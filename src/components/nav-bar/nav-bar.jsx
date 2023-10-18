import React from "react";
import "./nav-bar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg";

function NavBar() {
  const isLogged = useSelector((state) => state.app.is_logged);
  const user_data = useSelector((state) => state.app.user_data);

  return (
    <nav>
      <div className="nav_wrapper main_content_wrapper">
        <NavLink to="/">
          <div className="nav_logo">
            <p>IT - специалисты</p>
          </div>
        </NavLink>

        <div className="nav_auth">
          {isLogged ? (
            <NavLink to="/profile">
              <div className="logged_nav">
                <p>{user_data.username}</p>
                <ArrowDown />
              </div>
            </NavLink>
          ) : (
            <div className="nav_auth_btns">
              <NavLink to="/login">
                <button>Войти</button>
              </NavLink>
              <NavLink to="/register">
                <button>Регистрироваться</button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
