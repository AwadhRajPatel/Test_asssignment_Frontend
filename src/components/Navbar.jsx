import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
<nav className="navbar navbar-dark bg-dark px-4 d-flex">
  {/* Left side: Home */}
  <Link className="navbar-brand me-auto" to="/">Home</Link>

  {/* Center: Upload */}
  {user && <Link className="btn btn-success mx-3" to="/upload">Upload Post</Link>}

  {/* Right side: Profile & Logout */}
  <div className="ms-auto">
    {user ? (
      <>
        <Link className="btn btn-warning me-2" to="/profile">Profile</Link>
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      </>
    ) : (
      <Link className="btn btn-primary" to="/login">Login</Link>
    )}
  </div>
</nav>

  );
};

export default Navbar;
