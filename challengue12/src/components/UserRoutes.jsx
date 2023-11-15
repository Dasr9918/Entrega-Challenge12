import React, { useContext } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import ProductsPage from "../pages/ProductsPage";
import AboutPage from "../pages/AboutPage";
import SearchPage from "../pages/SearchPage";

const UserRoutes = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("lastPath", "/");
    navigate("/login");
  };

  return (
    <>
      <div> Welcome, {user?.name} </div>
      <NavLink to="/"> Index </NavLink>
      <NavLink to="/about"> About </NavLink>
      <NavLink to="/products"> Products </NavLink>
      <NavLink to="/search"> Search </NavLink>
      <button className="btn btn-secondary" onClick={handleLogout}>
        Logout
      </button>

      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
};

export default UserRoutes;
