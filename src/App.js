import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/AuthForm";
import UploadPost from "./components/UploadPost";
import Profile from "./pages/Profile"; // Import Profile Page
import PrivateRoute from "./components/PrivateRoute";  // Import PrivateRoute

const App = () => (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<UploadPost />} />
        <Route path="/profile" element={<Profile />} />  {/* New Profile Route */}
      </Routes>
    </Router>
  );

export default App;
