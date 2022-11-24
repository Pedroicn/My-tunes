import React from "react";
import { Route, Routes } from "react-router-dom";
import Album from "./pages/album/Album";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./services/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/home" element={ <ProtectedRoute><Home /></ProtectedRoute>  } />
        <Route path="/album/:id" element={ <ProtectedRoute><Album /></ProtectedRoute> } />
      </Routes>
    </AuthProvider>
  );
}

export default App;
