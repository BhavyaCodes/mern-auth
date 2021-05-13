import { useEffect, useState } from "react";
import axios from "axios";

import { IUser } from "../../../interfaces";

function MyProfile() {
  const [user, setUser] = useState<null | IUser>(null);

  useEffect(() => {
    axios
      .get("/api/current-user")
      .then((res) => setUser(res.data))
      .catch((e) => console.log(e));
  }, []);

  if (!user) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <h1>{user.email}</h1>
    </div>
  );
}

export default MyProfile;
