import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: { primary:{main:"#F25050"}, text: { primary: "#FFF", secondary:"#FFF", disabled:"#FFF" }, grey:{"400":"#FFF"}, background:{paper:"#000"} },
    
    components: {
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderColor: '#FFF',
            },
          },
        },
      },
});

