import { Avatar, Divider, Switch, Toolbar, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useState } from "react";

interface Props {
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  user: React.Dispatch<React.SetStateAction<{} | null>>;
}

const MainHeader: React.FC<Props> = ({ setMode, user }) => {
  console.log("user from mainheader", user);
  
  const theme = useTheme();
  const [checked, setChecked] = useState<boolean>(true)
  const handleChange = () => {
    setMode((prevMode) => {
      console.log("Dark Mode Before Update:", prevMode);
      const newMode = !prevMode;
      console.log("Dark Mode After Update:", newMode);
      return newMode;
    });
    setChecked(!checked)
  };

  return (
    <div className="header-container">
      <Toolbar>
        <IconButton>
          <MenuIcon sx={{color:theme.palette.secondary.main}}/>
        </IconButton>
        <Typography variant="h5" sx={{ flexGrow: 1, color:theme.palette.primary.main }}>
          User Profile Creation
        </Typography>
        <Switch
          checked={checked}
          onChange={(e) => {
            console.log("Toggle Clicked");
            handleChange()
          }}
        />
        <IconButton>
        {user ? <Avatar alt="profile pic" src={user.profilePic} /> : <Avatar />}
        </IconButton>
      </Toolbar>
      <Divider />
    </div>
  );
};

export default MainHeader;
