import React from "react";
import { Route, Routes } from "react-router-dom";
import Album from "./pages/album/Album";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/album/:id" element={ <Album /> } />
    </Routes>
  );
}

export default App;
