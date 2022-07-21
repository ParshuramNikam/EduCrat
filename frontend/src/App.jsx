import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SignupPage from "./pages/signup/SignupPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import PageLayout from "./components/layouts/PageLayout";
import TutorHomePage from "./pages/home/TutorHomePage";

function App() {
  const componentList = [
    { path: "/", component: <HomePage /> },
    { path: "/signup", component: <SignupPage /> },
    { path: "/login", component: <LoginPage /> },
  ];

  return (
    <Routes>
      {/* 404 page */}
      <Route path='*' element={<div>PAGE NOT FOUND</div>} />

      {/* Home page with layout */}
      <Route  path="/" element={<PageLayout navbarType={"home"}/>}>
        <Route index element={<HomePage />} />
      </Route>

      {/* Beacome a tutor landing page with layout */}
      <Route  path="/start_teaching" element={<PageLayout navbarType={"start_teaching"}/>}>
        <Route index  element={<TutorHomePage />} />
      </Route>
    </Routes>

  );
}

export default App;
