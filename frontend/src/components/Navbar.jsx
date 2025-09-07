import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        width:"96%",
        backgroundColor: "#007BFF",
        color: "#fff",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
        🏠Property Listing
        </Link>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "18px" }}>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#fff", fontWeight: "500" }}
        >
          Home
        </Link>
        <Link
          to="/adminlogin"
          style={{ textDecoration: "none", color: "#fff", fontWeight: "500" }}
        >
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
