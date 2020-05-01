import React from "react";
import PropTypes from "prop-types";
import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./comp3";
Page1.propTypes = {};

function Page1(props) {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </div>
  );
}

export default Page1;
