import { Divider, Switch, Toolbar, Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
}


const Header: React.FC<Props> = ({ setMode }) => {
  const theme = useTheme();
  
  const [checked, setChecked] = useState<boolean>(true)
  const navigate = useNavigate()
  const location = useLocation();
  const isloginpage = location.pathname === '/login'
  const handleChange = () => {
    setMode((prevMode) => {
      console.log("Dark Mode Before Update:", prevMode);
      const newMode = !prevMode;
      console.log("Dark Mode After Update:", newMode);
      return newMode;
    });
    setChecked(!checked)
  };

  const handleNavigate = () => {
    isloginpage ? navigate('/signup') : navigate('/login')
  }
  return (
    <div className="header-container">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, color:theme.palette.primary.main}}>
          Profile Creation
        </Typography>
        <Switch
                  checked={checked}
                  onChange={(e) => {
                    console.log("Toggle Clicked");
                    handleChange()
                  }}
                 sx={{color:theme.palette.primary.main}}
                />
        <Button variant="contained" sx={{backgroundColor:"#474BCA", pl:"50px", pr:"50px", pt:"10px", pb:"10px", color:"#fff"}} onClick={handleNavigate}> 
          {isloginpage ? "sign up" : "Login"}
        </Button>
      </Toolbar>
      <Divider/>
    </div>
  );
};

export default Header;
