import { Typography, useTheme } from "@mui/material"

const Dashboard = () => {
  const theme = useTheme();

  return(
    <div>
      <Typography
              variant="h2"
              sx={{
                mb: "20px",
                fontFamily: "Inter",
                fontSize: "48px",
                fontWeight: "700",
                textAlign: { xs: "center", md: "left" },
                color:theme.palette.primary.main
              }}
            >
              Im Dashboard
            </Typography>
    </div>
  )
  
}

export default Dashboard
