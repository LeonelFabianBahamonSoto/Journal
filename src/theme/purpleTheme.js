import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: { main: '#262254' },
        secondary: { main: '#543884' },
        third: { main: '#BB8FCE' },
        error: { main: red.A400 },
        action: { main: '#D2B4DE' },
    }
})