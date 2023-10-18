import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  logoutUserAction,
  updateProfileAction,
  updateUserAction,
} from "../../redux/app-reducer";
import "./user-page.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();
  const navigateToMain = (id) => {
    navigate(`/`);
  };

  const { register, handleSubmit } = useForm();
  const user = useSelector((state) => state.app.user_data) || {};
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.app.is_logged);
  const onSubmit = (data) => {
    dispatch(updateUserAction(data));
    dispatch(updateProfileAction(user.id, data));
  };

  const logout = () => {
    dispatch(
      logoutUserAction({
        username: user.user,
        password: user.password,
      })
    );
  };
  useEffect(() => {
    if (!isLogged) {
      navigateToMain();
    }
  });

  const deleteAccount = () => {
    logout();
    dispatch(deleteUserAction(user.id));
  };
  return (
    <div className="user_page_wrapper">
      <div className="profile_title">
        <h1>Мой профиль</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user_profile_form_wrapper">
          <div>
            <p>Логин</p>
            <input defaultValue={user.username} {...register("username")} />
          </div>
          <div>
            <p>Имя</p>
            <input defaultValue={user.name} {...register("name")} />
          </div>
          <div>
            <p>Специализация</p>
            <input
              defaultValue={user.specialization}
              {...register("specialization")}
            />
          </div>
          <div>
            <p>Навыки</p>
            <input defaultValue={user.skills} {...register("skills")} />
          </div>
          <div>
            <p>Город</p>
            <input defaultValue={user.city} {...register("city")} />
          </div>
          <div>
            <p>Образование</p>
            <input defaultValue={user.education} {...register("education")} />
          </div>
          <div>
            <p>Дата рождения</p>
            <input defaultValue={user.dob} {...register("dob")} />
          </div>
          <div>
            <p>Возраст</p>
            <input defaultValue={user.age} {...register("age")} />
          </div>
          <div>
            <p>Контакты (email)</p>
            <input
              defaultValue={user.contacts}
              type="email"
              {...register("contacts")}
            />
          </div>
          <div>
            <p>Пароль</p>
            <input defaultValue={user.password} {...register("password")} />
          </div>
        </div>

        <button type="submit" className="login_btn">
          Сохранить
        </button>
      </form>

      <div className="profile_actions">
        <button className="login_btn" onClick={logout}>
          Выйти
        </button>
        <button className="login_btn" onClick={deleteAccount}>
          Удалить аккаунт
        </button>
      </div>
    </div>
  );
};

export default UserPage;
