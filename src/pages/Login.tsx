import {
  Button,
  Checkbox,
  Container,
  FormLabel,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import Header from "../components/Header";
import loginImage from "../assets/Images/login-page.png";
import googleIcon from "../assets/Images/google-icon.png";
import { Input } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      className="login-container"
      style={{
        backgroundColor: "#F9E6E6",
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
                sx={{ border: "1px solid #00000040", height: "1px" }}
              ></Grid2>
              <Typography
                color="#00000040"
                sx={{
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {" "}
                or Login with Email{" "}
              </Typography>
              <Grid2
                size={{ xs: 3 }}
                sx={{ border: "1px solid #00000040", height: "1px" }}
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
                  color: "#000",
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
                  color: "#fff",
                }}
                disableUnderline
                placeholder="Enter your email id"
              />
              <FormLabel
                sx={{
                  mb: "10px",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#000",
                }}
              >
                Password
              </FormLabel>
              <Container
                sx={{
                  width: "75%",
                  display: "flex",
                  justifyContent: "flex-start",
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
                    padding: "5px 15px",
                    mb: "20px",
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#fff",
                  }}
                  disableUnderline
                  placeholder="Enter your password"
                />
                <IconButton
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                    left: "0px",
                    color: "#000",
                    width: "75%",
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
                  <Checkbox size="small"></Checkbox>
                  <Typography
                    sx={{
                      color: "#000",
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
                    color: "#474BCA",
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
                }}
              >
                Not registered yet?{" "}
                <span style={{ color: "#474BCA" }}>Create an account</span>{" "}
                <span
                  style={{ color: "#FFA3BE", textDecoration: "underline", cursor:"pointer" }}
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
