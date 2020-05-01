import React from "react";
import PropTypes from "prop-types";

Comp3.propTypes = {};

function Comp3(props) {
  return (
    <div className="mx-20">
      <div>
        <a href="#" className="text-4xl">
          Gardening
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center">
        <div className="mr-2 ">
          <a href="#">
            <img src="https://morningchores.com/wp-content/uploads/2018/05/Growing-Cucumbers-Your-Guide-to-Plant-Grow-and-Harvest-Cucumbers-FB-550x367.jpg"></img>
            <p className="md:text-xl text-2xl hover:text-indigo-500">
              Growing Cucumbers: Varieties, Planting Guide, Care, Problems, and
              Harvest
            </p>
          </a>
        </div>
        <div className="mx-1">
          <a href="#">
            <img src="https://morningchores.com/wp-content/uploads/2018/02/19-Simple-Vegetable-Garden-Plans-to-Start-Your-Spring-Off-Right-FB-550x367.jpg"></img>
            <p className="md:text-xl text-2xl hover:text-indigo-500">
              19 Vegetable Garden Plans and Layout Ideas That Will Inspire You
            </p>
          </a>
        </div>
        <div className="ml-2">
          <a href="#">
            <img src="https://morningchores.com/wp-content/uploads/2018/02/How-to-Grow-Blueberries-in-3-Easy-Steps-and-Other-Info-You-Must-Know-FB-550x367.jpg"></img>
            <p className="md:text-xl text-2xl hover:text-indigo-500">
              Growing Blueberries: Best Varieties, Planting Guide, Care,
              Problems, and Harvest
            </p>
          </a>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-indigo-500 p-4 hover:bg-teal-800 text-4xl m-20 text-white rounded">
          View more
        </button>
      </div>
    </div>
  );
}

export default Comp3;
