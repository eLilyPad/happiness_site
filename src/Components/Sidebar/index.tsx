import { Outlet, Link, NavLink } from "react-router-dom";

import React from "react";
import "./index.scss";
import Logo from "../../assets/images/E_Logo.jpg";
// import LogoSubtitle from "../../assets/images/LogoSubtitle.png";

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/overview">Overview</NavLink>
        {/* <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="elizabeth" />
      </Link> */}
      </nav>
    </div>
  );
}
