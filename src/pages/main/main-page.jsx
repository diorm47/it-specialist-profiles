import React from "react";
import "./main-page.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const specialists = useSelector((state) => state.app.specialists) || {};

  const navigate = useNavigate();
  const aboutUser = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <main>
      <div className="main_page  pages_template">
        <header>
          <div className="main_title">
            <h1>Анкеты IT-специалистов</h1>
          </div>
        </header>
        <div className="profiles_list main_content_wrapper">
          <h2>Анкеты</h2>
          <table>
            <thead>
              <tr>
                <td>имя</td>
                <td>специальность</td>
                <td>навыки</td>
                <td>контакты</td>
              </tr>
            </thead>
            {specialists ? (
              <tbody>
                {specialists.map((specialist) => (
                  <tr
                    key={specialist.id}
                    onClick={() => aboutUser(specialist.id)}
                  >
                    <td>{specialist.name}</td>
                    <td>{specialist.specialization}</td>
                    <td>{specialist.skills}</td>
                    <td>{specialist.contacts}</td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <p>Анкеты отсутствуют</p>
            )}
          </table>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
