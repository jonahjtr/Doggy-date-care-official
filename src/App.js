import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./mainPages/LandingPage";
import SignUpPage from "./mainPages/SignUp";
import LoginPage from "./mainPages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
