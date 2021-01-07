import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeroProfileAbility from "../components/HeroProfileAbility";

const HeroProfilePage = ({ remainPoints, abilities, name }) => {
  const [remainPoint, setRemainPoint] = useState(remainPoints);
  const [ability, setAbility] = useState([...abilities]);

  const handlePlus = (id, point) => {
    if (remainPoint > 0) {
      setAbility([
        ...ability.slice(0, id),
        { ...ability[id], point: point + 1},
        ...ability.slice(id + 1)
      ]);
      setRemainPoint(remainPoint - 1);
    }

    if (remainPoint <= 0) {
      alert("點數不足!");
    }
  };

  const handleMinus = (id, point) => {
    if (point > 0) {
      setAbility([
        ...ability.slice(0, id),
        { ...ability[id], point: point - 1 },
        ...ability.slice(id + 1)
      ]);
      setRemainPoint(remainPoint + 1);
    }

    if (point <= 0) {
      alert("點數不能小於0");
    }
  };

  const handleSave = () => {
    if (remainPoint === 0) {
      alert("點數儲存成功");
    }
  };

  const [editable, setEditable] = useState(true);
  useEffect(() => {
    if (remainPoint > 0) {
      setEditable(false);
    } else {
      setEditable(true);
    }
  }, [remainPoint]);

  return (
    <StyledHeroProfilePage>
      <div className="container">
        <h2 className="f-lg-2xl text-center mb-3 font-weight-bold">{name}</h2>
        <div className="d-flex justify-content-between rounded border border-1">
          <div className="col-8">
            {ability.map((heroProfile, index) => {
              return (
                <HeroProfileAbility
                  id={index}
                  key={index}
                  title={heroProfile.title}
                  point={heroProfile.point}
                  remainPoint={remainPoint}
                  onPlus={handlePlus}
                  onMinus={handleMinus}
                />
              );
            })}
          </div>
          <div className="col-4 align-self-end mb-3 d-flex flex-column">
            <p className="mb-3">剩餘點數：{remainPoint}</p>
            <button
              className="btn btn-primary"
              onClick={handleSave}
              disabled={!editable}
            >
              儲存
            </button>
          </div>
        </div>
      </div>
    </StyledHeroProfilePage>
  );
};

const StyledHeroProfilePage = styled.section`
  padding-bottom: 50px;
`;

export default HeroProfilePage;
