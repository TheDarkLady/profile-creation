import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useOutletContext } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import CreateUserPopup from "../components/CreateUserPopup";
import { useEffect, useState } from "react";
// import zIndex from "@mui/material/styles/zIndex";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { FormData , User } from "../types/Types";

interface ContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const Dashboard: React.FC = () => {
  const { user, setUser } = useOutletContext<ContextType>();
  console.log("user from dashboard", user);

  const theme = useTheme();
  const navigate = useNavigate();
  // const body = document.body;
  const [showCreateUserPopup, setShowCreateUserPopup] = useState(false);
  const [createUsers, setCreateUsers] =useState<FormData[]>([]);;
  const [selectedUser, setSelectedUser] = useState<FormData | null>(null);

  const fetchUsers = async () => {
    try {
      const response = await getDocs(collection(db, "users"));
      const userList: FormData[] = response.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          password: data.password || "",
          department: data.department || "",
          designation: data.designation || "",
        };
      });
      setCreateUsers(userList);
    } catch (e) {
      console.error("Error fetching users:", e);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  const handleLogout = async () => {
    try {
      const result = await signOut(auth);
      console.log("Logout Result:", result);
      setUser(null);
      navigate("/login");
    } catch (e) {
      console.log("dashboard error:", e);
    }
  };
  const handleCreateNewUser = () => {
    // body.style.overflowY = "hidden";
    setSelectedUser(null);
    setShowCreateUserPopup(true);
  };

  const handleUpdateUser = (user : FormData) => {
    setSelectedUser(user);
    setShowCreateUserPopup(true);
  };

  const handleDeleteUser = async (id:string) => {
    try {
      await deleteDoc(doc(db, "users", id));
      // Remove user from state
      setCreateUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (e) {
      console.log("Error deleting user:", e);
    }
  };

  return (
    <div>
      <TableContainer
        sx={{ position: "relative", height: "100vh", overflowX: "hidden" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <Button
            variant="contained"
            color="success"
            sx={{ color: theme.palette.primary.main }}
            onClick={handleCreateNewUser}
          >
            <AddIcon /> Create New USer
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ color: theme.palette.primary.main }}
            onClick={handleLogout}
          >
            <LogoutIcon /> Logout
          </Button>
        </Box>
        {showCreateUserPopup ? (
          <Container
            sx={{
              maxWidth: "100vw !important",
              position: "absolute",
              width: "100vw",
              height: "100vh",
              top: "0",
              zIndex: 99,
              backgroundColor: theme.palette.background.default,
              p: "5%",
              overflowY: "hidden",
            }}
          >
            <CreateUserPopup
              setCreateUsers={setCreateUsers}
              setShowCreateUserPopup={setShowCreateUserPopup}
              selectedUser={selectedUser}
            />
          </Container>
        ) : null}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{color:theme.palette.primary.main}}>Id</TableCell>
              <TableCell sx={{color:theme.palette.primary.main}}>First Name</TableCell>
              <TableCell sx={{color:theme.palette.primary.main}}>Last Name</TableCell>
              <TableCell sx={{color:theme.palette.primary.main}}>Email</TableCell>
              <TableCell sx={{color:theme.palette.primary.main}}>Department</TableCell>
              <TableCell sx={{color:theme.palette.primary.main}}>Designation</TableCell>
              <TableCell sx={{color:theme.palette.primary.main}}>Edit/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {createUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} sx={{ textAlign: "center" }}>
                  No user Created
                </TableCell>
              </TableRow>
            ) : (
              createUsers.map((createUser) => (
                <TableRow key={createUser.id}>
                  <TableCell sx={{color:theme.palette.primary.main}}>{createUser.id}</TableCell>
                  <TableCell sx={{color:theme.palette.primary.main}}>{createUser.firstName}</TableCell>
                  <TableCell sx={{color:theme.palette.primary.main}}>{createUser.lastName}</TableCell>
                  <TableCell sx={{color:theme.palette.primary.main}}>{createUser.email}</TableCell>
                  <TableCell sx={{color:theme.palette.primary.main}}>{createUser.department}</TableCell>
                  <TableCell sx={{color:theme.palette.primary.main}}>{createUser.designation}</TableCell>
                  <TableCell sx={{display:"flex",flexDirection:"row", flexWrap:"nowrap", justifyContent:"start", gap:"10px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdateUser(createUser)}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteUser(createUser.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
