import { useDispatch, useSelector } from "react-redux";

import { loginUserAction } from "../../redux/app-reducer";
import "./login-page.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogged = useSelector((state) => state.app.is_logged);
  const navigateToMain = (id) => {
    navigate(`/`);
  };
  useEffect(() => {
    if (isLogged) {
      navigateToMain();
    }
  }, [isLogged]);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(loginUserAction(username, password));
  };

  return (
    <div className="auth_login_wrapper">
      <form onSubmit={handleLogin}>
        <div>
          <p> Логин</p>
          <input type="text" name="username" required />
        </div>
        <div>
          <p>Пароль</p>
          <input type="password" name="password" required />
        </div>
        <button type="submit" className="login_btn">
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
