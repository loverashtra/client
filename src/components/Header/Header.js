import React from "react";
import "./header.scss";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import logo from "../../assets/logo.svg";

//helper functions
const toggleMenu = () => {
  try {
    alert("Toggle Menu");
  } catch (error) {
    console.error(error);
  }
};

const redirectToHome = () => {
  try {
    alert("redirect To Home");
  } catch (error) {
    console.error(error);
  }
};

const redirectToCart = () => {
  try {
    alert("redirect To Cart");
  } catch (error) {
    console.error(error);
  }
};

//Header Component  >> render to all pages
function Header() {
  return (
    <div className="love-header">
      <FiMenu size={30} onClick={toggleMenu} />
      <img src={logo} alt="logo" width={120} onClick={redirectToHome} />
      <FiShoppingCart size={30} onClick={redirectToCart} />
    </div>
  );
}

export default Header;
