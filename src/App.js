import React, { createContext, useState, useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Routes from "router";
import { theme } from "styles/theme";
import { getTokenData } from "utils/getToken";

export const AppContext = createContext();

function App() {
  const [reload, setReload] = useState(false);

  const contextValue = useMemo(
    () => ({ reload, setReload }),
    [reload, setReload]
  );

  getTokenData();
  return (
    <AppContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
