import React from "react";
import "./header.scss";
import { FiMenu, FiSearch } from "react-icons/fi";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="love-header">
      <FiMenu size={30} />

      <img src={logo} alt="logo" width={80} />
      <FiSearch size={30} />
    </div>
  );
}

export default Header;
