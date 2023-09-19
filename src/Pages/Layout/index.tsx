import React from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import "./index.scss";

export default function Layout() {
  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
