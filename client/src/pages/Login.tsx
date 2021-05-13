import { useRef, FormEvent } from "react";
import axios from "axios";

function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(email, password);
    axios
      .post("/api/login", {
        email,
        password,
      })
      .then((res) => console.log(res.data))
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input type="email" required ref={emailRef} />
        <br />
        <label>password</label>
        <input type="password" required ref={passwordRef} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
