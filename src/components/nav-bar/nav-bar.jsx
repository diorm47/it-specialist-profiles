import React from "react";
import "./nav-bar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="nav_wrapper main_content_wrapper">
        <NavLink to="/">
          <div className="nav_logo">
            <p>IT - специалисты</p>
          </div>
        </NavLink>

        <div className="nav_auth">
          <div className="nav_auth_btns">
            <NavLink to="/login">
              <button>Войти</button>
            </NavLink>
            <NavLink to="/register">
              <button>Регистрироваться</button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
