import React, { ChangeEvent, useState } from "react";
import {
  Container,
  FormLabel,
  Input,
  IconButton,
  Checkbox,
  Typography,
  Button,
  useTheme,
  colors,
  Box,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FormData } from "../types/Types";
import { db } from "../firebase/firebase";
import {collection , addDoc, setDoc, doc} from 'firebase/firestore'

interface Props {
  showCreateUserPopup :boolean,
  setShowCreateUserPopup :React.Dispatch<React.SetStateAction<boolean>>

}

const CreateUserPopup : React.FC<Props> =({
  showCreateUserPopup,
  setShowCreateUserPopup
}) =>{
  const theme = useTheme();
   const [showPassword, setShowPassword] = useState(false); 
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password:"",
    confirmPassword:"",
    department:"",
    designation:""
  });

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name] : value
    }));
  };

  const handleCreateNewUser = async () => {
    if (formData.password === formData.confirmPassword) {
      console.log("FormData", formData);
      try {
        const usersCollectionRef = collection(db, "users");
        console.log("usersCollectionRef : ", usersCollectionRef);
        
        const response = await addDoc(usersCollectionRef, {
          ...formData,
          id: "", 
        });

        console.log("response :",response);
        
        const newUserId = response.id;
  
        await setDoc(doc(db, "users", newUserId), {
          ...formData,
          id: newUserId,  
        });
  
        console.log("User created with ID:", newUserId);
        setShowCreateUserPopup(false);
      } catch (e) {
        console.log("Firestore Error:", e);
      }
    } else {
      console.log("Passwords do not match");
    }
  };
  
  const handleClosePopup = () => {
    setShowCreateUserPopup(false)
  }


  return (
    <Container sx={{display:"flex", flexDirection:'column', position:"relative"}}>
      <Container sx={{}}>
      <Button sx={{color:theme.palette.primary.main, backgroundColor:theme.palette.success.main, position:"relative", left:"100%"}} onClick={handleClosePopup}>X</Button>
      </Container>
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns:"1fr 1fr",
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
            m:'0px'
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
           {showPassword ?  <VisibilityOffIcon /> :  <VisibilityOffIcon />}
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
           {showConfirmPassword ?  <VisibilityOffIcon /> :  <VisibilityOffIcon />}
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
        >
        </Container>
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
          create user
        </Button>
      </Container>
    </Container>
  );
}

export default CreateUserPopup;
