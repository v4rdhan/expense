import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/loginPage/LoginPage"
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<NoPage/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
