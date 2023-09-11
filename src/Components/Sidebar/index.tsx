import { Link, NavLink } from "react-router-dom";

import React from "react";
import "./index.scss";
// import Logo from "../../assets/images/E_Logo.png";
// import LogoSubtitle from "../../assets/images/LogoSubtitle.png";

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        {/* <img src={Logo} alt="logo" /> */}
        {/* <img className="sub-logo" src={LogoSubtitle} alt="elizabeth" /> */}
      </Link>
      <nav>
        <NavLink to="/"></NavLink>
        <NavLink to="/about"></NavLink>
        <NavLink to="/contact"></NavLink>
      </nav>
    </div>
  );
}
