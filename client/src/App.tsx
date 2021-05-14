import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Signup from "./pages/Signup";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import LogoutButton from "components/LogoutButton";
import Footer from "components/Footer";
import AuthLayout from "components/AuthLayout";

// const theme = {
//   typography:{
//     fontFamily:
//   }
// };

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Lato', sans-serif;",
  },
  palette: {
    primary: {
      light: "#3b8ad9",
      main: "#1877f2",
      dark: "#385898",
      contrastText: "#fff",
    },
    secondary: {
      light: "#42b72a",
      main: "#3BA331",
      dark: "#2b9217",
      contrastText: "#fff",
    },
  },
});

function App() {
  const useStyles = makeStyles({
    root: {
      background: "#f0f2f5",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    content: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  });
  const classes = useStyles();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className={classes.root}>
            <div className={classes.content}>
              <Switch>
                <Route path="/login" exact>
                  <Login />
                </Route>
                <Route path="/signup" exact>
                  <Signup />
                </Route>
                <Route path="/" exact>
                  <h1>index page</h1>
                </Route>
                <Route path="/profile" exact>
                  <MyProfile />
                </Route>
              </Switch>
            </div>
            <Footer />
          </div>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
