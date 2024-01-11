import { Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import DogProfile from "./pages/DogProfile";
import AllMeds from "./pages/AllMeds";
import AllPhotos from "./pages/AllPhotos";
import AllDogs from "./pages/AllDogs";
import AllDates from "./pages/AllDates";
import AllFiles from "./pages/AllFiles";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dog-profile" element={<DogProfile />} />
      <Route path="/all-photos" element={<AllPhotos />} />
      <Route path="/all-meds" element={<AllMeds />} />
      <Route path="/all-dogs" element={<AllDogs />} />
      <Route path="/all-dates" element={<AllDates />} />
      <Route path="/all-files" element={<AllFiles />} />
    </Routes>
  );
}
export default App;
