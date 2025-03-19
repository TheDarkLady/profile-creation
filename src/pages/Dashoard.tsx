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
  Typography,
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

interface ContextType {
  user: {} | null;
  setUser: React.Dispatch<React.SetStateAction<{} | null>>;
}

const Dashboard: React.FC = () => {
  const { user, setUser } = useOutletContext<ContextType>();
  console.log("user from dashboard", user);

  const theme = useTheme();
  const navigate = useNavigate();
  const body = document.body;
  const [showCreateUserPopup, setShowCreateUserPopup] = useState(false);
  const [createUsers, setCreateUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await getDocs(collection(db, "users"));
      const userList = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("userList", userList);

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
    body.style.overflowY = "hidden";
    setSelectedUser(null);
    setShowCreateUserPopup(true);
  };

  const handleUpdateUser = (user) => {
    setSelectedUser(user);
    setShowCreateUserPopup(true);
  };

  const handleDeleteUser = async (id) => {
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
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Designation</TableCell>
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
                  <TableCell>{createUser.id}</TableCell>
                  <TableCell>{createUser.firstName}</TableCell>
                  <TableCell>{createUser.lastName}</TableCell>
                  <TableCell>{createUser.email}</TableCell>
                  <TableCell>{createUser.department}</TableCell>
                  <TableCell>{createUser.designation}</TableCell>
                  <TableCell>
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
