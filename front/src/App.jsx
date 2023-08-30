import { useEffect, useState, createContext } from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login/Login";
import { LogoutButton } from "./components/Logout";
import Profile from "./components/Profile";

export default function App() {
  const userContext = createContext(undefined);

  // const routes = (
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/home" element={<Home />} />
  //     <Route path="/login" element={<Login />} />
  //     <Route path="/register" element={<h1>Register</h1>} />
  //     <Route path="/profile" element={<h1>Profile</h1>} />
  //   </Routes>
  // );

  return (
    <div>
      <div className="container mt-3">
        <Home />
        <hr />
        <Profile />
        <hr />
        <LogoutButton />
        <hr />
        <Login />
      </div>
    </div>
  );
}
