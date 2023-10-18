import { useDispatch } from "react-redux";

import { loginUserAction } from "../../redux/app-reducer";
import "./login-page.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(loginUserAction(username, password));
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
