
import React, { useState } from "react";

const HeroCounter = ({title ,point, onCount ,restPoint}) => {
   
    const [newPoint, setnewPoint] = useState(point);

    const handlePlus = () =>{
        if (restPoint > 0) {
            setnewPoint(newPoint + 1);
            onCount && onCount(-1);
          }
           
    }
    const handleMinus = () =>{
        if(newPoint > 0){
            setnewPoint(newPoint - 1);
            onCount && onCount(+1);
        }
        
        if(newPoint <= 0){
            setnewPoint(0);
            alert("point must more than 0");
        }
    }

    return(
        <div className="d-flex justify-content-center m-3 align-items-center">
            <p className="font-lg-m col-4 text-center">{title}</p>
            <div className="d-flex col-8 align-items-center">
                <button className="btn btn-light" onClick={handlePlus}>+</button>
                <p className="mx-2">{newPoint}</p>
                <button className="btn btn-light" onClick={handleMinus}>-</button>
            </div>
        </div>
    );


}

export default HeroCounter;