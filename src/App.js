import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/AuthForm";
import UploadPost from "./components/UploadPost";

import Profile from "./pages/Profile"; // Import Profile Page

const App = () => (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<UploadPost />} />
        <Route path="/profile" element={<Profile />} />  {/* New Profile Route */}
      </Routes>
    </Router>
  );

export default App;
