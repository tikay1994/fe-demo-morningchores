import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
ButtonMenu.propTypes = {};

function ButtonMenu(props) {
  return (
    <div className="relative border-2 max-w-xs h-full bg-white">
      <div className="absolute right-0">
        <button>
          <svg class="h-6 w-6 m-3" viewBox="0 0 20 20">
            <path d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"></path>
          </svg>
        </button>
      </div>
      <div className="text-center">
        <input
          type="text"
          placeholder="Search this website..."
          className="border-2 p-3 mt-12"
        ></input>
      </div>
      <div className="p-3 text-center mt-6">
        <button>
          <svg class="h-6 w-6 mr-3" viewBox="0 0 32 32">
            <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
          </svg>
        </button>
        <button>
          <svg class="h-6 w-6 mr-3" viewBox="0 0 32 32">
            <path d="M16 0c-8.825 0-16 7.175-16 16s7.175 16 16 16 16-7.175 16-16-7.175-16-16-16zM16 29.863c-1.431 0-2.806-0.219-4.106-0.619 0.563-0.919 1.412-2.431 1.725-3.631 0.169-0.65 0.863-3.294 0.863-3.294 0.45 0.863 1.775 1.594 3.175 1.594 4.181 0 7.194-3.844 7.194-8.625 0-4.581-3.738-8.006-8.544-8.006-5.981 0-9.156 4.019-9.156 8.387 0 2.031 1.081 4.563 2.813 5.369 0.262 0.125 0.4 0.069 0.463-0.188 0.044-0.194 0.281-1.131 0.387-1.575 0.031-0.137 0.019-0.262-0.094-0.4-0.575-0.694-1.031-1.975-1.031-3.162 0-3.056 2.313-6.019 6.256-6.019 3.406 0 5.788 2.319 5.788 5.637 0 3.75-1.894 6.35-4.356 6.35-1.363 0-2.381-1.125-2.050-2.506 0.394-1.65 1.15-3.425 1.15-4.613 0-1.063-0.569-1.95-1.756-1.95-1.394 0-2.506 1.438-2.506 3.369 0 1.225 0.412 2.056 0.412 2.056s-1.375 5.806-1.625 6.887c-0.281 1.2-0.169 2.881-0.050 3.975-5.156-2.012-8.813-7.025-8.813-12.9 0-7.656 6.206-13.863 13.862-13.863s13.863 6.206 13.863 13.863c0 7.656-6.206 13.863-13.863 13.863z"></path>
          </svg>
        </button>
        <button>
          <svg class="h-6 w-6 mr-3" viewBox="0 0 32 32">
            <path d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>
          </svg>
        </button>
      </div>
      <ul className="group hover:text-teal-500 mt-1 p-3">
        Gardening
        <div className="block bg-white">
          <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
            Planting Zone Map
          </li>
          <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
            Frost Dates
          </li>
          <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
            Planting Calendar
          </li>
          <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
            Plant Growing Guides
          </li>
        </div>
      </ul>
      <ul className="p-3 hover:text-teal-500">Homestead</ul>
      <ul className="p-3 hover:text-teal-500">Money</ul>
      <ul className="p-3 hover:text-teal-500">Home Ideas</ul>
      <ul className="p-3 hover:text-teal-500">DIY</ul>
      <ul className="p-3 hover:text-teal-500">Raising Chickens</ul>
      <ul className="p-3 hover:text-teal-500">Food and Drinks</ul>
      <ul className="p-3 hover:text-teal-500">Product</ul>
      <ul className="p-3 hover:text-teal-500">Write for Us</ul>
      <ul className="p-3 hover:text-teal-500">About Us</ul>
    </div>
  );
}

export default ButtonMenu;
