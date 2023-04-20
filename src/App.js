import React, { createContext, useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Routes from "router";
import { theme } from "styles/theme";
import { getTokenData } from "utils/getToken";

export const AppContext = createContext();

function App() {
  const [reload, setReload] = useState(false);
  const [tokenData, setTokenData] = useState(null);

  const contextValue = useMemo(
    () => ({ reload, setReload, tokenData }), // add tokenData to context value
    [reload, setReload, tokenData]
  );

  useEffect(() => {
    const data = getTokenData(); // get token data
    setTokenData(data); // set token data to state
  }, []);

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
