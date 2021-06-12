import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="love-navbar">
        <Link to="#" className="love-menu-bars">
          <FaBars />
        </Link>
      </div>
    </>
  );
}

export default Navbar;
