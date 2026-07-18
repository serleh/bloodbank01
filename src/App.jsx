import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddDonor from "./pages/AddDonor";
import Header from "./components/Header";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import BloodInformation from "./pages/BloodInformation";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AddDonor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="blood-information" element={<BloodInformation />} />
      </Routes>
    </>
  );
};

export default App;
