import { Divider, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';


const Header = () => {
  return (
    <div className="header-container">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Profile Creation
        </Typography>
        <IconButton  >
            <Avatar ></Avatar>
        </IconButton>
        <Button variant="contained" style={{backgroundColor:"#474BCA"}}> Sign Up</Button>
      </Toolbar>
      <Divider />
    </div>
  );
};

export default Header;
