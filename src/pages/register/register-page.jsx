import { useDispatch } from "react-redux";
import { createUserAction, loginUserAction } from "../../redux/app-reducer";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      username: e.target.username.value,
      password: e.target.password.value,
    };
    dispatch(createUserAction(newUser));
    dispatch(loginUserAction(newUser.username, newUser.password));
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
