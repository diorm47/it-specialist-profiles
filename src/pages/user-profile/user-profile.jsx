import React from "react";
import "./user-profile.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function UserProfile() {
  const specialists = useSelector((state) => state.app.specialists);

  const params = useParams();
  const user = specialists.find((u) => u.id == params.user);
  console.log(user);

  return (
    <div className="user_profile_page main_content_wrapper">
      <div className="user_page_title">
        <h3>Анкета специалиста <br /> {user.name}</h3>
      </div>
    </div>
  );
}

export default UserProfile;
