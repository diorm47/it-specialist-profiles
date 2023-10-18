import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/main-page";
import LoginPage from "./pages/login/login-page";
import RegisterPage from "./pages/register/register-page";
import UserPage from "./pages/user/user-page";
function App() {
  return (
    <div className="main_wrapper">
      <div className="page_content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<UserPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
