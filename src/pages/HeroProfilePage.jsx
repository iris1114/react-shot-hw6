
import React, { useState } from "react";
import HeroCouter from "../components/HeroCounter";

const HeroProfile = () => {

    const HerosProfileData = [
        {
          title: "STR",
          point: 0
        },
        {
          title: "INT",
          point: 0
        },
        {
          title: "AGI",
          point: 0
        },
        {
          title: "LUK",
          point: 0
        }
    ];

    const [restPoint, setRestPoint] = useState(30);

    const handleCount = (newPoint) => {
        setRestPoint(restPoint + newPoint);
    };

    const handleSave = () => {
        console.log("save");
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-between rounded border border-1">
                <div className="col-8">
                    {
                        HerosProfileData.map((heroProfile, index)=>{
                            return(
                                <div className="mb-3" key={index}>
                                    <HeroCouter title={heroProfile.title} point={heroProfile.point} restPoint={restPoint} onCount={handleCount}></HeroCouter>
                                </div>
                            );
                        })
                        }
                </div>
                <div className="col-4 align-self-end mb-3 d-flex flex-column">
                    <p className="mb-3">剩餘點數：{restPoint}</p>
                    <button className="btn btn-primary" onClick={handleSave}>儲存</button>
                </div>
            </div>
        </div>
    );  
}



export default HeroProfile;