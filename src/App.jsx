import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import DogProfile from "./pages/DogProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/dog-profile" element={<DogProfile />} />
    </Routes>
  );
}
export default App;
