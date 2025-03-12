import { Container, Typography, FormLabel, Input, IconButton, Button, GlobalStyles } from '@mui/material'
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTheme } from '@mui/material/styles';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const theme = useTheme();
  const globalStyles = (
    <GlobalStyles
      styles={{
        "input:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0px 1000px #FFA3BE inset !important",
          WebkitTextFillColor: theme.palette.primary.main, 
        },
      }}
    />
  );
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  // const [formData, setFormData] = useState<FormData>({
  //   name:'',
  //   email:'',
  //   password:''
  // });
  // const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
  //   const {name, value} = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]:value
  //   }));

  // }

  const handleSignUp = async(e:ChangeEvent<HTMLInputElement>) => {
    // navigate('/')
    // console.log("Name", name);
    // console.log("Email", email);
    // console.log("Password", password);
    // console.log("FormData", formData);
    e.preventDefault();
    try{
      const response = await createUserWithEmailAndPassword(auth, email, password )
      console.log("signup successful : ", response);
      navigate('/login')
    }
    catch(e){
      console.log("error", e);
      
    }
    
  }
  return (
    <>
    {globalStyles}
    <Container sx={{
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
        gap:"50px"
    }}  disableGutters>
     <Typography variant='h2' sx={{fontFamily:"Inter", fontSize:"40px", fontWeight:"600", color:theme.palette.primary.main}}> You can sign up here</Typography>
      <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: 'center',
                position: "relative",
                
              }}
             
            >
              <FormLabel
                sx={{
                  mb: "10px",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: "600",
                  color:theme.palette.primary.main,
                  textAlign:"left",
                  width:"50%"
                }}
              >
                Name
              </FormLabel>
              <Input
                type="text"
                name='name'
                sx={{
                  width: "50%",
                  backgroundColor: "#FFA3BE",
                  borderRadius: "5px",
                  padding: "5px 15px",
                  mb: "20px",
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: "500",
                  color:theme.palette.primary.main,
                }}
                disableUnderline
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel
                sx={{
                  mb: "10px",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: "600",
                  color:theme.palette.primary.main,
                  textAlign:"left",
                  width:"50%"
                }}
              >
                Email
              </FormLabel>
              <Input
                type="email"
                name='email'
                
                sx={{
                  width: "50%",
                  backgroundColor: "#FFA3BE",
                  borderRadius: "5px",
                  padding: "5px 15px",
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: theme.palette.primary.main,
                  mb:"20px"
                }}
                inputProps={{
                  style: {
                    backgroundColor: "#FFA3BE",
                  },
                }}
                disableUnderline
                placeholder="Enter your email id"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <FormLabel
                sx={{
                  mb: "10px",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: "600",
                  color:theme.palette.primary.main,
                  textAlign:"left",
                  width:"50%"
                }}
              >
                Password
              </FormLabel>
              <Container
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-start",
                  m: "0px",
                  backgroundColor: "#FFA3BE",
                  borderRadius: "5px",
                }}
                disableGutters
              >
                <Input
                  type={showPassword ? "text" : "password"}
                  name='password'
                  sx={{
                    width: "100%",
                    
                    borderRadius: "5px",
                    padding: "5px 15px",
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontWeight: "500",
                    color:theme.palette.primary.main,
                  }}
                  disableUnderline
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
                <IconButton
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    color:theme.palette.primary.main,
                    width: "10%",
                    zIndex:"9"
                  }}
                  onClick={() => setShowPassword((prev) => !prev)}

                >
                  {/* <VisibilityOffIcon /> */}
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />} 
                </IconButton>
              </Container>
              <Button
                sx={{
                  backgroundColor: "#474BCA",
                  color: "#fff",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: "500",
                  width: "50%",
                  mt: "20px",
                }}
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </Container>
    </Container>
    </>
  )
}

export default Signup
