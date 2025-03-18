import { Box, Button, Container, Paper, TableContainer, Typography, useTheme } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, useOutlet, useOutletContext } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"
import CreateUserPopup from "../components/CreateUserPopup";
import { useState } from "react";
import zIndex from "@mui/material/styles/zIndex";


interface ContextType  {
  user: {} | null;
  setUser: React.Dispatch<React.SetStateAction<{} | null>>;
}

const Dashboard : React.FC = () => {
  const {user , setUser}  = useOutletContext<ContextType>();
  console.log("user from dashboard", user);
  
  const theme = useTheme();
  const navigate = useNavigate();
  const body = document.body;
  const [showCreateUserPopup, setShowCreateUserPopup] = useState(false)

  const handleLogout = async() =>{
    try{
      const result = await signOut(auth)
      console.log("Logout Result:", result);
      setUser(null)
      navigate('/login')
    }
    catch(e){
      console.log("dashboard error:", e);
      
    }
  }
  const handleCreateNewUser = () => {
   body.style.overflowY = "hidden"
   setShowCreateUserPopup(true)
  }

  return(
    <div>
      <TableContainer sx={{position:"relative", height:"100vh", overflowX:"hidden"}}>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:"center", margin:'20px'}}>
          <Button variant="contained" color="success"  sx={{color:theme.palette.primary.main}} onClick={handleCreateNewUser}>
          <AddIcon/> Create New USer
          </Button>
          <Button variant="contained" color="success" sx={{color:theme.palette.primary.main}} onClick={handleLogout}>
          <LogoutIcon/> Logout
          </Button>
        </Box>
       
           {showCreateUserPopup ?  <Container   sx={{
          maxWidth:"100vw !important",
          position: "absolute",
          width:"100vw",
          height:"100vh",
          top:"0",
          zIndex: 99,
          backgroundColor:"#00000078",
          p:"5%",
          overflowY:"hidden"
        }}>
          <CreateUserPopup showCreateUserPopup={showCreateUserPopup} setShowCreateUserPopup={setShowCreateUserPopup}/> 
        </Container > : null }
           
      </TableContainer>
    </div>
  )
  
}

export default Dashboard
