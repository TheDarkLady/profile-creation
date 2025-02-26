import { Avatar, Divider, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const MainHeader = () => {
    return (
      <div className="header-container">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Profile Creation
          </Typography>
          <IconButton>
            <Avatar />
          </IconButton>
        </Toolbar>
        <Divider />
      </div>
    );
}

export default MainHeader
