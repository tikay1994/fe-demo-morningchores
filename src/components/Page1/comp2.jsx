import React from "react";
import PropTypes from "prop-types";

Comp2.propTypes = {};

function Comp2(props) {
  return (
    <div className="bg-teal-800 text-center m-5 sm:m-24">
      <div className="text-white p-6">
        <p className="text-xl">NEVER MISS AN UPDATE</p>
        <h3 className="text-4xl">Subscribe to the Morning Newsletter</h3>
      </div>
      <div className="p-6">
        <input
          type="text"
          placeholder="Enter your email"
          className="p-2"
        ></input>
        <button className="bg-indigo-600 text-white p-2">Subscribe</button>
      </div>
    </div>
  );
}

export default Comp2;
