import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Signup from "./pages/Signup";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LogoutButton from "components/LogoutButton";

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
  },
});

function App() {
  // useEffect(() => {
  //   axios
  //     .get("/api/test")
  //     .then((res) => console.log(res.data))
  //     .catch((e) => console.log(e));
  // }, []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Switch>
            <Route path="/" exact>
              <h1>index page</h1>
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/profile" exact>
              <MyProfile />
            </Route>
          </Switch>
          {/* <LogoutButton /> */}
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
