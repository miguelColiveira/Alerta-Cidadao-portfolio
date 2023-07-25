import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ReportProvider } from "./Context/reportsContext";
import { UserProvider } from "./Context/userContext";
import { Index } from "./Styles";
import { GlobalStyles } from "./Styles/globalStyles";
import { Reset } from "./Styles/reset";
import { theme } from "./Styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ReportProvider>
                <UserProvider>
                    <ThemeProvider theme={theme}>
                        <App />
                    </ThemeProvider>
                </UserProvider>
            </ReportProvider>
            <GlobalStyles />
            <Reset />
            <Index />
        </BrowserRouter>
    </React.StrictMode>
);
