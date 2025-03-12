import {
  Button,
  Checkbox,
  Container,
  FormLabel,
  Grid2,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import loginImage from "../assets/Images/login-page.png";
import googleIcon from "../assets/Images/google-icon.png";
import { Input } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  // console.log("Theme", theme.palette.mode);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("login successful:", response);
      navigate("/");
    } catch (e) {
      console.log("login error:", e);
    }

    // console.log("email", email);
    // console.log("password", password);
  };

  const handleLoginWithGoogle = () => {
    const provider = new GoogleAuthProvider(); 
    signInWithPopup(auth, provider).then(async(result) => {
      console.log("google login successful:", result);
      navigate("/")
    })
  }
  return (
    <div
      className="login-container"
      style={{
        backgroundColor: theme.palette.background.default,
        width: "100vw",
      }}
    >
      <Container
        sx={{
          height: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          pt: "50px",
          pb: "50px",
          gap: { xs: "50px", md: "20px" },
        }}
      >
        <Grid2
          container
          spacing={2}
          margin={{ top: "30px" }}
          sx={{
            width: "100%",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
          }}
        >
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              alignItems: { xs: "center", md: "start" },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: "20px",
                fontFamily: "Inter",
                fontSize: "48px",
                fontWeight: "700",
                textAlign: { xs: "center", md: "left" },
                color: theme.palette.primary.main,
              }}
            >
              Login Now
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: "30px",
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: "400",
                textAlign: { xs: "center", md: "left" },
                color: theme.palette.primary.main,
              }}
            >
              Hi, Welcome back 👋{" "}
            </Typography>
            <Button
              sx={{
                width: { xs: "100%", md: "70%" },
                backgroundColor: "#FFA3BE",
                borderRadius: "5px",
                color: "#fff",
                gap: "20px",
                fontFamily: "Inter",
                fontSize: "15px",
                fontWeight: "500",
              }}
              onClick={handleLoginWithGoogle}
            >
              <img src={googleIcon} alt="" />
              Login with Google
            </Button>
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
                mt: "20px",
                mb: "20px",
                gap: "10px",
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
              disableGutters
            >
              <Grid2
                size={{ xs: 3 }}
                sx={{
                  border: theme.palette.secondary.main,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  height: "1px",
                }}
              ></Grid2>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: theme.palette.secondary.main,
                }}
              >
                {" "}
                or Login with Email{" "}
              </Typography>
              <Grid2
                size={{ xs: 3 }}
                sx={{
                  border: theme.palette.secondary.main,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  height: "1px",
                }}
              ></Grid2>
            </Container>
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
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "20px",
            }}
          >
            <img src={loginImage} alt="" />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Login;
