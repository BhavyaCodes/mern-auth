import axios from "axios";

function LogoutButton() {
  return (
    <button
      onClick={() => {
        axios
          .get("/api/logout")
          .then((res) => console.log(res.data))
          .catch((e) => console.log(e));
      }}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
