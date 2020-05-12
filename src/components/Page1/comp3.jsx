import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Comp3.propTypes = {};

function Comp3(props) {
  const postList = [
    {
      img:
        "https://morningchores.com/wp-content/uploads/2018/05/Growing-Cucumbers-Your-Guide-to-Plant-Grow-and-Harvest-Cucumbers-FB-550x367.jpg",
      title:
        "Growing Cucumbers: Varieties, Planting Guide, Care, Problems, and Harvest",
    },
    {
      img:
        "https://morningchores.com/wp-content/uploads/2018/02/19-Simple-Vegetable-Garden-Plans-to-Start-Your-Spring-Off-Right-FB-550x367.jpg",
      title: "19 Vegetable Garden Plans and Layout Ideas That Will Inspire You",
    },
    {
      img:
        "https://morningchores.com/wp-content/uploads/2018/02/How-to-Grow-Blueberries-in-3-Easy-Steps-and-Other-Info-You-Must-Know-FB-550x367.jpg",
      title:
        "Growing Blueberries: Best Varieties, Planting Guide, Care, Problems, and Harvest",
    },
  ];
  return (
    <div className="mx-5 sm:mx-24">
      <div>
        <a
          href="#"
          className="text-4xl text-teal-800 hover:text-black font-bold hover:bg-teal-200 duration-300 rounded"
        >
          Gardening
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center font-medium">
        {postList.map((post, index) => (
          <div className="md:mx-2 ">
            <Link to="/page3">
              <img src={post.img}></img>
              <p className="md:text-xl text-2xl hover:text-indigo-500">
                {post.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="bg-indigo-500 p-4 hover:bg-teal-800 text-4xl m-20 text-white rounded duration-300">
          View more
        </button>
      </div>
    </div>
  );
}

export default Comp3;
