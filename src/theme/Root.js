import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import store from "../app/store";
import { Provider } from "react-redux";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import useAuthStateListener from "../hooks/useAuthStateListener";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "@docusaurus/router";
import { useState, useEffect } from "react";
// Default implementation, that you can customize
export default function Root({ children }) {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#407BFF",
      },
      secondary: {
        main: "#F5F0F6",
      },
    },
  });

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline></CssBaseline>
          <RouteHandler></RouteHandler>
          {children}
        </ThemeProvider>
      </Provider>
    </>
  );
}

function RouteHandler() {
  useAuthStateListener();
  let userInfo = useSelector((state) => state.auth);
  const location = useLocation();
  const history = useHistory();
  const [FirstLoad, setFirstLoad] = useState(true);
  function GoToSignIn() {
    history.push("/SignIn");
  }
  function GoToMain() {
    history.push("/");
  }
  useEffect(() => {
    if (FirstLoad) {
      setFirstLoad(false);
    }
  }, [FirstLoad]);
  return (
    <>
      {userInfo.user === null &&
        location.pathname !== "/SignIn" &&
        location.pathname !== "/SignUp" &&
        GoToSignIn()}
      {FirstLoad && location.pathname === "/" && GoToSignIn()}
      {(userInfo.user !== null &&
        location.pathname === "/SignIn" &&
        GoToMain()) ||
        (location.pathname === "/SignUp" &&
          userInfo.user !== null &&
          GoToMain())}
    </>
  );
}
