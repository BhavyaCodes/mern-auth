import { useEffect } from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import { useUser } from "contexts/User";
import { Login } from "./Login";
import { MyProfile } from "./MyProfile";
import { Signup } from "./Signup";
import { EditProfile } from "./EditProfile";
import Navbar from "components/common/Navbar";

function Pages() {
  const [user, setUser, loading] = useUser();
  useEffect(() => {
    axios
      .get("/api/current-user")
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
        setUser(null);
      });
  }, [setUser]);

  if (loading) {
    return null;
  }
  console.log(user, loading);
  return (
    <Switch>
      <Route path="/login" exact>
        {user ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route path="/signup" exact>
        {user ? <Redirect to="/" /> : <Signup />}
      </Route>
      <Route path="/" exact>
        <>
          <Navbar />
          {user ? <MyProfile /> : <Redirect to="/login" />}
        </>
      </Route>
      <Route path="/edit-profile" exact>
        <Navbar />
        {user ? <EditProfile /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
}

export default Pages;
