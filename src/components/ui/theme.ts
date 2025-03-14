import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette:{
        background:{
            default:"#f9e6e6"
        },
        primary:{
            main:"#000"
        },
        secondary:{
            main: "#00000040"
        },
        success:{
            main:"#FFA3BE"
        }
    }
});

const darkTheme = createTheme({
    palette:{
        background:{
            default:"#000"
        },
        primary:{
            main:"#fff"
        },
        secondary:{
            main:"#fff"
        },
        success:{
            main:"#FFA3BE"
        }
    }
})

export {lightTheme, darkTheme}