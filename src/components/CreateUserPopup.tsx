import React, { useState } from "react";
import {
  Container,
  FormLabel,
  Input,
  IconButton,
  Checkbox,
  Typography,
  Button,
  useTheme,
} from "@mui/material";

function CreateUserPopup() {
  const theme = useTheme();
  const [formData, setFormData] = useState<Object>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: { xs: "center", md: "start" },
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
            color: theme.palette.primary.main,
          }}
        >
          Email
        </FormLabel>
        <Input
          type="email"
          sx={{
            width: "75%",
            backgroundColor: "#FFA3BE",
            borderRadius: "5px",
            padding: "5px 15px",
            mb: "20px",
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight: "500",
            color: theme.palette.primary.light,
          }}
          disableUnderline
          placeholder="Enter your email id"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormLabel
          sx={{
            mb: "10px",
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "600",
            color: theme.palette.primary.main,
          }}
        >
          Email
        </FormLabel>
        <Input
          type="email"
          sx={{
            width: "75%",
            backgroundColor: "#FFA3BE",
            borderRadius: "5px",
            padding: "5px 15px",
            mb: "20px",
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight: "500",
            color: theme.palette.primary.light,
          }}
          disableUnderline
          placeholder="Enter your email id"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormLabel
          sx={{
            mb: "10px",
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "600",
            color: theme.palette.primary.main,
          }}
        >
          Password
        </FormLabel>
        <Container
          sx={{
            width: "75%",
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: "#FFA3BE",
            borderRadius: "5px",
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
              padding: "0px 15px",
              fontFamily: "Inter",
              fontSize: "15px",
              fontWeight: "500",
              color: theme.palette.primary.light,
            }}
            disableUnderline
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <IconButton
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              left: "0px",
              color: theme.palette.primary.main,
              width: "15%",
            }}
          >
            <VisibilityOffIcon />
          </IconButton>
        </Container>
        <Container
          sx={{
            width: "75%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            m: "0px",
          }}
          disableGutters
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "50%",
              m: "0px",
            }}
            disableGutters
          >
            <Checkbox
              size="small"
              sx={{ color: theme.palette.primary.light }}
            ></Checkbox>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontFamily: "Inter",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              Remember Me
            </Typography>
          </Container>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontFamily: "Inter",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Forgot Password?
          </Typography>
        </Container>
        <Button
          sx={{
            backgroundColor: "#474BCA",
            color: "#fff",
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: "500",
            width: "75%",
            mt: "20px",
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography
          sx={{
            textAlign: "center",
            width: "75%",
            mt: "10px",
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight: "500",
            color: theme.palette.primary.main,
          }}
        >
          Not registered yet?{" "}
          <span style={{ color: "#474BCA" }}>Create an account</span>{" "}
          <span
            style={{
              color: "#FFA3BE",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => navigate("/signup")}
          >
            {" "}
            SignUp
          </span>{" "}
        </Typography>
      </Container>
    </div>
  );
}

export default CreateUserPopup;
