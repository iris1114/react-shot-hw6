import React from "react";
import styled from "styled-components";
import HeroCard from "../components/HeroCard";
import { heroesInfo } from "../data/heroesInfo";

const HeroListPage = () => {
  return (
    <StyleHeroList>
      <div className="container">
        <div className="d-flex justify-content-center mb-4">
          <div className="row mx-auto">
            {heroesInfo.map((hero) => {
              return (
                <div className="col-lg-3 col-md-6 mb-4" key={hero.id}>
                  <HeroCard card={hero}></HeroCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyleHeroList>
  );
};

const StyleHeroList = styled.section`
  padding: 50px;
`;

export default HeroListPage;
