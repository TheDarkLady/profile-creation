import { Box, Button, Paper, TableContainer, Typography, useTheme } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, useOutlet, useOutletContext } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"
import CreateUserPopup from "../components/CreateUserPopup";


interface ContextType  {
  user: {} | null;
  setUser: React.Dispatch<React.SetStateAction<{} | null>>;
}

const Dashboard : React.FC = () => {
  const {user , setUser}  = useOutletContext<ContextType>();
  console.log("user from dashboard", user);
  
  const theme = useTheme();
  const navigate = useNavigate();

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

  return(
    <div>
      <TableContainer >
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:"center", margin:'20px'}}>
          <Button variant="contained" color="success"  sx={{color:theme.palette.primary.main}}>
          <AddIcon/> Create New USer
          </Button>
          <Button variant="contained" color="success" sx={{color:theme.palette.primary.main}} onClick={handleLogout}>
          <LogoutIcon/> Logout
          </Button>
        </Box>
        <CreateUserPopup />
      </TableContainer>
    </div>
  )
  
}

export default Dashboard
