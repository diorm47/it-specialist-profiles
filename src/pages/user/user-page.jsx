import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction, updateUserAction } from "../../redux/app-reducer";
import "./user-page.css";

const UserPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const user = useSelector((state) => state.app.user_data) || {};
  const dispatch = useDispatch();
  console.log(user);
  const onSubmit = (data) => {
    dispatch(updateUserAction(data));
    dispatch(updateProfileAction(user.id, data));
  };

  return (
    <div className="user_page_wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user_profile_form_wrapper">
          <div>
            <p>Логин</p>
            <input defaultValue={user.username} {...register("username")} />
          </div>
        </div>

        <button type="submit" className="login_btn">
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default UserPage;
