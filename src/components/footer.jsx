import React from "react";
import PropTypes from "prop-types";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="bg-teal-800 text-center text-white">
      <div className="p-6">
        <a href="" className="p-4">
          Home
        </a>
        <a href="" className="p-4">
          About
        </a>
        <a href="" className="p-4">
          Write for Us
        </a>
        <a href="" className="p-4">
          Contact
        </a>
        <a href="" className="p-4">
          Unsubscribe
        </a>
      </div>
      <div className="p-6">
        2020 MorningChores. All rights reserved
        <a href="" className="p-3">
          Privacy Policy
        </a>
        <a href="" className="p-3">
          Terms of Use
        </a>
        <a href="" className="p-3">
          Disclosure
        </a>
      </div>
      <div className=" p-6">
        <p>AN ELITE CAFEMEDIA LIFESTYLE PUBLISHER</p>
      </div>
    </div>
  );
}

export default Footer;
