import React from "react";
import PropTypes from "prop-types";

Comp1.propTypes = {};

function Comp1(props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-20 mt-5">
      <div>
        <a href="#">
          <img src="https://morningchores.com/wp-content/uploads/2020/04/Why-You-Should-Prevent-Your-Chickens-from-Getting-Bored-and-How-FI.jpg"></img>
          <p className="md:text-4xl text-2xl hover:text-indigo-500">
            Why You Should Prevent Your Chickens from Getting Bored and How
          </p>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <a href="#" className="lg:pl-6">
          <img src="https://morningchores.com/wp-content/uploads/2020/04/8-Best-Moisture-Meters-to-Detect-Leaks-Quickly-and-Accurately-FI-728x485.jpg"></img>
          <p className="text-2xl md:text-4xl lg:text-xl hover:text-indigo-500">
            8 Best Moisture Meters to Detect Leaks Quickly and Accurately
          </p>
        </a>
        <a href="#" className="lg:pl-6">
          <img src="https://morningchores.com/wp-content/uploads/2020/04/How-to-Spot-and-Get-Rid-of-Spider-Mites-in-Your-Garden-Plants-FI-728x485.jpg"></img>
          <p className="text-2xl md:text-4xl lg:text-xl hover:text-indigo-500">
            How to Spot and Get Rid of Spider Mites in Your Garden Plants
          </p>
        </a>
        <a href="#" className="lg:pl-6">
          <img src="https://morningchores.com/wp-content/uploads/2020/04/Growing-Agretti-Varieties-Planting-Guide-Care-Problems-and-Harvest-FI-728x485.jpg"></img>
          <p className="text-2xl md:text-4xl lg:text-xl hover:text-indigo-500">
            Growing Agretti: Varieties, Planting Guide, Care, Problems, and
            Harvest
          </p>
        </a>
        <a href="#" className="lg:pl-6">
          <img src="https://morningchores.com/wp-content/uploads/2020/04/5-Clever-DIY-Tower-Garden-Ideas-to-Make-the-Most-of-Your-Space-FB-728x485.jpg"></img>
          <p className="text-2xl md:text-4xl lg:text-xl hover:text-indigo-500">
            5 Clever DIY Tower Garden Ideas to Make the Most of Your Space
          </p>
        </a>
      </div>
    </div>
  );
}

export default Comp1;
