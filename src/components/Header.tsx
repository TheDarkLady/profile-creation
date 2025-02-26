import { Divider, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Profile Creation
        </Typography>
        <Button variant="contained" sx={{backgroundColor:"#474BCA", pl:"50px", pr:"50px", pt:"10px", pb:"10px"}} onClick={()=> navigate('/signup')}> Sign Up</Button>
      </Toolbar>
      <Divider />
    </div>
  );
};

export default Header;
