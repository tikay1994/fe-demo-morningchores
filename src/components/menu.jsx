import React from "react";
import PropTypes from "prop-types";
import logo from "./windmill.svg";
Menu.propTypes = {};

function Menu(props) {
  return (
    <nav class="flex items-center justify-between flex-wrap mx-20 py-6 border-b-2">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <button>
          <svg class="h-6 w-6" viewBox="0 0 24 24">
            <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
          </svg>
        </button>
      </div>

      <img src={logo} className="h-12 w-12"></img>
      <span class="font-semibold text-2xl text-black">Morning Chores</span>

      <div class="lg:hidden">
        <button>
          <svg class="h-6 w-6 ml-2 mt-1" viewBox="0 0 32 32">
            <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm hidden lg:flex">
          <a
            href="#responsive-header"
            class="mt-1 text-base hover:text-teal-500 mx-4"
          >
            Homestead
          </a>
          <a href="#responsive-header" class="text-base mr-4">
            <ul className="mt-1 group hover:text-teal-500">
              Gardening
              <div className="absolute bg-white">
                <li className="hidden group-hover:block text-black hover:text-teal-500 p-3">
                  How to start a Garden
                </li>
                <li className="hidden group-hover:block text-black hover:text-teal-500 p-3">
                  Planting zone map
                </li>
                <li className="hidden group-hover:block text-black hover:text-teal-500 p-3">
                  First and Last Frost Dates
                </li>
                <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
                  Planting Celender
                </li>
                <li className="hidden group-hover:block text-black hover:text-teal-500 p-3">
                  Garden Size Calculator
                </li>
                <li className="hidden group-hover:block text-black hover:text-teal-500 p-3">
                  Plant Growing Guides
                </li>
                <li className="hidden group-hover:block text-black hover:text-teal-500 p-3">
                  Fertilizer Calculator
                </li>
                <li className="hidden group-hover:block text-black hover:text-teal-500 p-3">
                  C/N Compost Calculator
                </li>
                <li className="hidden group-hover:block text-black hover:text-teal-500 p-3">
                  Gardening Basics
                </li>
              </div>
            </ul>
          </a>
          <a href="#responsive-header" class="text-base mr-4">
            <ul className="mt-1 group hover:text-teal-500">
              Animals
              <div className="absolute bg-white">
                <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
                  Chicken
                </li>
                <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
                  Beekeeping
                </li>
                <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
                  Goats
                </li>
              </div>
            </ul>
          </a>
          <a
            href="#responsive-header"
            class="mt-1 text-base hover:text-teal-500 mr-4"
          >
            DIY
          </a>
          <a href="#responsive-header" class="text-base mr-4">
            <ul className="group hover:text-teal-500 mt-1 ">
              More
              <div className="absolute bg-white">
                <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
                  Frugal Living
                </li>
                <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
                  Food and Drinks
                </li>
                <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
                  Home Decor
                </li>
                <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
                  Survival and Prepping
                </li>
                <li className="hidden group-hover:block text-black  hover:text-teal-500 p-3">
                  Handmade
                </li>
              </div>
            </ul>
          </a>
        </div>
        <div class="w-full block flex-grow hidden lg:flex">
          <button className="mt-1 hover:text-teal-500">
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
          <button>
            <svg class="h-6 w-6 mr-3" viewBox="0 0 32 32">
              <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
