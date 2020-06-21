import React from "react";

const TempValues = (props) => {
  //   console.log(props);
  return (
    <div className="temp">
      <h2 className="high">{props.max}&#8451;</h2>
      <h2 className="low">{props.min}&#8451;</h2>
    </div>
  );
};
export default TempValues;
