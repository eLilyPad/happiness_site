import React from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import "./index.scss";

export default function Layout() {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
