import { Container, Typography, FormLabel, Input, IconButton, Button } from '@mui/material'
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
  return (
    <Container sx={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        
    }}>
      <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: 'center',
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
                  color: "#000",
                  textAlign:"left",
                  width:"50%"
                }}
              >
                Name
              </FormLabel>
              <Input
                type="email"
                sx={{
                  width: "50%",
                  backgroundColor: "#FFA3BE",
                  borderRadius: "5px",
                  padding: "5px 15px",
                  mb: "20px",
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#fff",
                }}
                disableUnderline
                placeholder="Enter your Name"
              />
              <FormLabel
                sx={{
                  mb: "10px",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#000",
                  textAlign:"left",
                  width:"50%"
                }}
              >
                Email
              </FormLabel>
              <Input
                type="email"
                sx={{
                  width: "50%",
                  backgroundColor: "#FFA3BE",
                  borderRadius: "5px",
                  padding: "5px 15px",
                  mb: "20px",
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#fff",
                }}
                disableUnderline
                placeholder="Enter your email id"
              />
              <FormLabel
                sx={{
                  mb: "10px",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#000",
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
                }}
                disableGutters
              >
                <Input
                  type="password"
                  sx={{
                    width: "100%",
                    backgroundColor: "#FFA3BE",
                    borderRadius: "5px",
                    padding: "5px 15px",
                    mb: "20px",
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#fff",
                  }}
                  disableUnderline
                  placeholder="Enter your password"
                />
                <IconButton
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                    left: "0px",
                    color: "#000",
                    width: "75%",
                  }}
                >
                  <VisibilityOffIcon />
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
              >
                Sign Up
              </Button>
            </Container>
    </Container>
  )
}

export default Signup
