import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  FormLabel,
  Input,
  IconButton,
  Button,
  useTheme
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FormData } from "../types/Types";
import { db } from "../firebase/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

interface Props {
  setCreateUsers: React.Dispatch<React.SetStateAction<FormData[]>>;
  setShowCreateUserPopup: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser?: FormData | null;
}

const CreateUserPopup: React.FC<Props> = ({
  setCreateUsers,
  setShowCreateUserPopup,
  selectedUser,
}) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    id: selectedUser?.id || "",
    firstName: selectedUser?.firstName || "",
    lastName: selectedUser?.lastName || "",
    email: selectedUser?.email || "",
    password: selectedUser?.password || "",
    confirmPassword: selectedUser?.confirmPassword || "",
    department: selectedUser?.department || "",
    designation: selectedUser?.designation || "",
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    } else {
      setFormData({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        department: "",
        designation: "",
      });
    }
  }, [selectedUser]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateNewUser = async () => {
    try {
      if (selectedUser) {
        // Updating user
        await setDoc(doc(db, "users", formData.id), formData);
        setCreateUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === formData.id ? formData : user))
        );
      } else {
        // Creating new user
        const response = await addDoc(collection(db, "users"), formData);
        const newUser = { ...formData, id: response.id };
        await setDoc(doc(db, "users", response.id), newUser);
        setCreateUsers((prevUsers) => [...prevUsers, newUser]);
      }
      setShowCreateUserPopup(false);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleClosePopup = () => {
    setShowCreateUserPopup(false);
  };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      <Container sx={{}}>
        <Button
          sx={{
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.success.main,
            position: "relative",
            left: "100%",
          }}
          onClick={handleClosePopup}
        >
          X
        </Button>
      </Container>
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: { xs: "center", md: "start" },
          position: "relative",
        }}
        disableGutters
      >
        <FormLabel
          sx={{
            mb: "10px",
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "600",
            color: theme.palette.primary.main,
          }}
        >
          First Name
        </FormLabel>
        <Input
          type="text"
          name="firstName"
          sx={{
            width: "75%",
            backgroundColor: "#FFA3BE",
            borderRadius: "5px",
            padding: "5px 15px",
            mb: "20px",
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight: "500",
            color: theme.palette.primary.light,
          }}
          value={formData.firstName}
          onChange={handleInputChange}
          disableUnderline
          placeholder="Enter your first name"
        />
        <FormLabel
          sx={{
            mb: "10px",
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "600",
            color: theme.palette.primary.main,
          }}
        >
          Last Name
        </FormLabel>
        <Input
          type="text"
          name="lastName"
          sx={{
            width: "75%",
            backgroundColor: "#FFA3BE",
            borderRadius: "5px",
            padding: "5px 15px",
            mb: "20px",
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight: "500",
            color: theme.palette.primary.light,
          }}
          value={formData.lastName}
          onChange={handleInputChange}
          disableUnderline
          placeholder="Enter your email id"
        />
        <FormLabel
          sx={{
            mb: "10px",
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "600",
            color: theme.palette.primary.main,
          }}
        >
          Email
        </FormLabel>
        <Input
          type="email"
          name="email"
          sx={{
            width: "75%",
            backgroundColor: "#FFA3BE",
            borderRadius: "5px",
            padding: "5px 15px",
            mb: "20px",
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight: "500",
            color: theme.palette.primary.light,
          }}
          value={formData.email}
          onChange={handleInputChange}
          disableUnderline
          placeholder="Enter your email id"
        />
        <FormLabel
          sx={{
            mb: "10px",
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "600",
            color: theme.palette.primary.main,
          }}
        >
          Password
        </FormLabel>
        <Container
          sx={{
            width: "75%",
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: "#FFA3BE",
            borderRadius: "5px",
            m: "0px",
          }}
          disableGutters
        >
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            sx={{
              width: "100%",
              backgroundColor: "#FFA3BE",
              borderRadius: "5px",
              padding: "0px 15px",
              fontFamily: "Inter",
              fontSize: "15px",
              fontWeight: "500",
              color: theme.palette.primary.light,
            }}
            value={formData.password}
            onChange={handleInputChange}
            disableUnderline
            placeholder="Enter your password"
          />
          <IconButton
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              left: "0px",
              color: theme.palette.primary.main,
              width: "15%",
            }}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </Container>
        <FormLabel
          sx={{
            m: "10px 0px",
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "600",
            color: theme.palette.primary.main,
          }}
        >
          Retype Password
        </FormLabel>
        <Container
          sx={{
            width: "75%",
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: "#FFA3BE",
            borderRadius: "5px",
            m: "20px 0px",
          }}
          disableGutters
        >
          <Input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            sx={{
              width: "100%",
              backgroundColor: "#FFA3BE",
              borderRadius: "5px",
              padding: "0px 15px",
              fontFamily: "Inter",
              fontSize: "15px",
              fontWeight: "500",
              color: theme.palette.primary.light,
            }}
            value={formData.confirmPassword}
            onChange={handleInputChange}
            disableUnderline
            placeholder="Re-Enter your password"
          />
          <IconButton
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              left: "0px",
              color: theme.palette.primary.main,
              width: "15%",
            }}
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? (
              <VisibilityOffIcon />
            ) : (
              <VisibilityOffIcon />
            )}
          </IconButton>
        </Container>
        <FormLabel
          sx={{
            m: "0px",
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "600",
            color: theme.palette.primary.main,
          }}
        >
          Department
        </FormLabel>
        <Container
          sx={{
            width: "75%",
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: "#FFA3BE",
            borderRadius: "5px",
            m: "0px",
          }}
          disableGutters
        >
          <Input
            type="text"
            name="department"
            sx={{
              width: "75%",
              backgroundColor: "#FFA3BE",
              borderRadius: "5px",
              padding: "5px 15px",
              fontFamily: "Inter",
              fontSize: "15px",
              fontWeight: "500",
              color: theme.palette.primary.light,
            }}
            value={formData.department}
            onChange={handleInputChange}
            disableUnderline
            placeholder="Enter your Department"
          />
        </Container>
        <FormLabel
          sx={{
            m: "20px 0px",
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "600",
            color: theme.palette.primary.main,
          }}
        >
          Designation
        </FormLabel>
        <Container
          sx={{
            width: "75%",
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: "#FFA3BE",
            borderRadius: "5px",
            m: "20px 0px",
          }}
          disableGutters
        >
          <Input
            type="text"
            name="designation"
            sx={{
              width: "75%",
              backgroundColor: "#FFA3BE",
              borderRadius: "5px",
              padding: "5px 15px",
              fontFamily: "Inter",
              fontSize: "15px",
              fontWeight: "500",
              color: theme.palette.primary.light,
            }}
            value={formData.designation}
            onChange={handleInputChange}
            disableUnderline
            placeholder="Enter your Designation"
          />
        </Container>
        <Container
          sx={{
            width: "75%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            m: "0px",
          }}
          disableGutters
        ></Container>
        <Button
          sx={{
            backgroundColor: "#474BCA",
            color: "#fff",
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: "500",
            width: "75%",
            mt: "20px",
          }}
          onClick={handleCreateNewUser}
        >
          {selectedUser ? "update user" : "create user"}
        </Button>
      </Container>
    </Container>
  );
};

export default CreateUserPopup;
