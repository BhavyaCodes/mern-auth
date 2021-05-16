import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "components/Footer";
import { UserProvider } from "contexts/User";
import Pages from "Pages";

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
        <CssBaseline />
        <UserProvider>
          <div className={classes.root}>
            <div className={classes.content}>
              <Pages />
            </div>
            <Footer />
          </div>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
