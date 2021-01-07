import React from "react";

const HeroProfileAbility = ({ id, title, point, onPlus, onMinus }) => {
  const handlePlus = () => {
    onPlus && onPlus(id, point);
  };

  const handleMinus = () => {
    onMinus && onMinus(id, point);
  };

  return (
    <div className="d-flex justify-content-center m-3 align-items-center">
      <h4 className="font-lg-m col-4 text-center font-weight-bold">{title}</h4>
      <div className="d-flex col-8 align-items-center">
        <button className="btn btn-primary" onClick={handlePlus}>
          +
        </button>
        <div className="col-3 mx-3 text-center border p-1" value={point}>
          {point}
        </div>
        <button className="btn btn-primary" onClick={handleMinus}>
          -
        </button>
      </div>
    </div>
  );
};

export default HeroProfileAbility;
