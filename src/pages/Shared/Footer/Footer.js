import React from "react";
import logo from "../../../images/logo.png";
const Footer = () => {
  return (
    <div>
      <div className=" d-flex justify-content-center bg-light pt-3">
        <div className="px-3 ">
          <h6>Contact us</h6>
          <ul className="list-unstyled">
            <li>Email: bestbazer@gmail.com</li>
            <li>Phone: 01666562666</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="px-3 ">
          <img src={logo} alt="footer-logo" />
        </div>
        <div className="px-3 ">
          <h6>WHO WE ARE</h6>
          <ul className="list-unstyled">
            <li>About us</li>
            <li>Reasons to shop</li>
            <li>Meet the team</li>
            <li>Cookies & privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
