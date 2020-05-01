import React from "react";
import PropTypes from "prop-types";

page2.propTypes = {};

function page2(props) {
  return (
    <div className=" mx-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <a href="#">
            <img src="https://morningchores.com/wp-content/uploads/2020/04/How-to-Spot-and-Get-Rid-of-Spider-Mites-in-Your-Garden-Plants-FI-728x485.jpg"></img>
          </a>
        </div>
        <div className="lg:pl-6">
          <a href="#" className="text-4xl hover:text-indigo-500">
            How to Spot and Get Rid of Spider Mites in Your Garden Plants
          </a>
          <p>
            Spiders are one of the only bugs that I ignore when I find them
            running around since they snack on all the nasty insects that have
            snuck their way into my house. I don’t ignore spider mites in my ...{" "}
          </p>
          <button className="bg-indigo-600 hover:bg-teal-800 text-white rounded p-2 mt-4">
            Read More
          </button>
        </div>
      </div>
      <div>
        <button className="bg-indigo-600 hover:bg-teal-800 text-white rounded p-3 my-6">
          Previous
        </button>
        <button className="bg-indigo-600 hover:bg-teal-800 text-white rounded p-3 my-6 float-right">
          Next
        </button>
      </div>
    </div>
  );
}

export default page2;
