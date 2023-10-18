import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction, updateUserAction } from "../../redux/app-reducer"; // предполагается, что у вас есть такой экшен

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.username} {...register("username")} />

        <button type="submit">Update</button>
      </form>
      <div>
        <h2>Your Data:</h2>
        <p>Username: {user.username}</p>
      </div>
    </div>
  );
};

export default UserPage;
