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
    <div className="auth_login_wrapper">
      <form onSubmit={handleRegister}>
        <div>
          <p> Логин</p>
          <input type="text" name="username" required />
        </div>
        <div>
          <p>Пароль</p>
          <input type="password" name="password" required />
        </div>
        <button type="submit" className="login_btn">
          Создать аккаунт
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
