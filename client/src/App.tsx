import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import "./App.css";
import LogoutButton from "components/LogoutButton";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("/api/test")
  //     .then((res) => console.log(res.data))
  //     .catch((e) => console.log(e));
  // }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <h1>index page</h1>
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/profile" exact>
            <MyProfile />
          </Route>
        </Switch>
        <LogoutButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
