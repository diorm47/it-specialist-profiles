import React from "react";
import "./user-profile.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function UserProfile() {
  const specialists = useSelector((state) => state.app.specialists);

  const params = useParams();
  const user = specialists.find((u) => u.id == params.user);

  return (
    <div className="user_profile_page main_content_wrapper">
      <div className="user_page_title">
        <h3>
          Анкета специалиста <br /> {user.name}
        </h3>
      </div>
      <div className="user_page_content">
        <div>
          <p>Имя:</p>
          <p>{user.name}</p>
        </div>
        <div>
          <p>Логин:</p>
          <p>{user.username}</p>
        </div>
        <div>
          <p>ID:</p>
          <p>{user.id}</p>
        </div>
        <div>
          <p>Специализация:</p>
          <p>{user.specialization}</p>
        </div>
        <div>
          <p>Навыки:</p>
          <p>{user.skills}</p>
        </div>
        <div>
          <p>Город:</p>
          <p>{user.city}</p>
        </div>
        <div>
          <p>Образование:</p>
          <p>{user.education}</p>
        </div>
        <div>
          <p>Дата рождения:</p>
          <p>{user.dob}</p>
        </div>
        <div>
          <p>Возраст:</p>
          <p>{user.age}</p>
        </div>
        <div>
          <p>Контакты:</p>
          <p>{user.contacts}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
