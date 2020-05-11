import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
Comp1.propTypes = {};

function Comp1(props) {
  const newPosts = [
    {
      img:
        "https://morningchores.com/wp-content/uploads/2020/04/8-Best-Moisture-Meters-to-Detect-Leaks-Quickly-and-Accurately-FI-728x485.jpg",
      title: "8 Best Moisture Meters to Detect Leaks Quickly and Accurately",
    },
    {
      img:
        "https://morningchores.com/wp-content/uploads/2020/04/How-to-Spot-and-Get-Rid-of-Spider-Mites-in-Your-Garden-Plants-FI-728x485.jpg",
      title: "How to Spot and Get Rid of Spider Mites in Your Garden Plants",
    },
    {
      img:
        "https://morningchores.com/wp-content/uploads/2020/04/How-to-Spot-and-Get-Rid-of-Spider-Mites-in-Your-Garden-Plants-FI-728x485.jpg",
      title:
        "Growing Agretti: Varieties, Planting Guide, Care, Problems, and Harvest",
    },
    {
      img:
        "https://morningchores.com/wp-content/uploads/2020/04/5-Clever-DIY-Tower-Garden-Ideas-to-Make-the-Most-of-Your-Space-FB-728x485.jpg",
      title: "5 Clever DIY Tower Garden Ideas to Make the Most of Your Space",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 sm:mx-24 mt-5">
      <div className="lg:mr-6">
        <Link to="/page3">
          <img src="https://morningchores.com/wp-content/uploads/2020/04/Why-You-Should-Prevent-Your-Chickens-from-Getting-Bored-and-How-FI.jpg"></img>
          <p className="md:text-4xl text-2xl hover:text-indigo-500">
            Why You Should Prevent Your Chickens from Getting Bored and How
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {newPosts.map((newPost, index) => (
          <div className="md:px-3 lg:pl-3 lg:pr-0">
            <Link to="/page3">
              <img src={newPost.img}></img>
              <p className="text-2xl md:text-4xl lg:text-xl hover:text-indigo-500">
                {newPost.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comp1;
