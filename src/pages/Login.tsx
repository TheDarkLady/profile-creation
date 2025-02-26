import { Button, Container, FormLabel, Grid2, Typography } from "@mui/material";
import Header from "../components/Header";
import loginImage from "../assets/Images/login-page.png";
import googleIcon from "../assets/Images/google-icon.png";
import { Input } from '@mui/material';

const Login = () => {
  return (
    <div className="login-container">
      <Header />
      <Container
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid2
          container
          spacing={2}
          margin={{ top: "30px" }}
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{ alignItems: "start", justifyContent: "flex-start" }}
          >
            <Typography variant="h2" sx={{ mb: "20px", fontFamily:"Inter", fontSize:"48px", fontWeight:"700" }}>
              Login Now
            </Typography>
            <Typography variant="h6" sx={{ mb: "30px",fontFamily:"Inter", fontSize:"20px", fontWeight:"400"  }}>
              Hi, Welcome back 👋{" "}
            </Typography>
            <Button
              sx={{
                width: "70%",
                backgroundColor: "#FFA3BE",
                borderRadius: "5px",
                color: "#fff",
                gap: "20px",
                fontFamily:"Inter", 
                fontSize:"15px", 
                fontWeight:"500"  
              }}
            >
              <img src={googleIcon} alt="" />
              Login with Google
            </Button>
            <Container sx={{display:"flex", flexDirection:"row", alignItems:"center", mt:"20px", mb:"20px", gap:"10px", paddingLeft:"0px", paddingRight:"0px"}} disableGutters>
                <Grid2 size={{xs:3}} sx={{border:"1px solid #00000040", height:"1px"}}></Grid2>
                <Typography color="#00000040" sx={{fontFamily:"Inter", fontSize:"15px", fontWeight:"500"}}> or Login with Email </Typography>
                <Grid2 size={{xs:3}} sx={{border:"1px solid #00000040", height:"1px"}}></Grid2>
            </Container>
            <Container sx={{display:"flex", flexDirection:"column"}} disableGutters>
                <FormLabel sx={{mb:"10px", fontFamily:"Inter", fontSize:"18px", fontWeight:"600", color:"#000"}}>Email</FormLabel>
                <Input type="email" sx={{width:"75%", backgroundColor:"#FFA3BE", borderRadius:"5px", padding:"5px 15px", mb:"20px", fontFamily:"Inter", fontSize:"15px", fontWeight:"500", color:"#fff"}} disableUnderline placeholder="Enter your email id"/>
                <FormLabel  sx={{mb:"10px", fontFamily:"Inter", fontSize:"18px", fontWeight:"600",  color:"#000"}}>Password</FormLabel>
                <Input type="password" sx={{width:"75%", backgroundColor:"#FFA3BE", borderRadius:"5px", padding:"5px 15px", mb:"20px", fontFamily:"Inter", fontSize:"15px", fontWeight:"500", color:"#fff"}} disableUnderline  placeholder="Enter your password"/>
            </Container>

          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} className="login-page-img">
            <img src={loginImage} alt="" />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Login;
