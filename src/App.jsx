import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { auth } from "./firebase";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, []);
  return (
    <div>
      <ToastContainer theme="dark" draggable autoClose="3000" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player key={"1233069"} />} />
      </Routes>
    </div>
  );
};

export default App;
