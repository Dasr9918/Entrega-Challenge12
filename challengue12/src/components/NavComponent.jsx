import React from "react";
import { NavLink } from "react-router-dom";
import "./NavComponent.css"; // Archivo de estilos personalizados

const NavComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
