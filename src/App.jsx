import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { heroesInfo } from "./data/heroesInfo";
import HeroListPage from "./page/HeroListPage";
import HeroProfilePage from "./page/HeroProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/common.css";

const App = () => {
  return (
    <BrowserRouter>
      <HeroListPage />
      <Switch>
        <Route path="/" exact>
          <h3 className="text-center font-weight-bold f-lg-2xl">請選擇英雄</h3>
        </Route>
        {heroesInfo.map((hero, index) => (
          <Route key={index} path={ `/heroes/${hero.id}`}>
            <HeroProfilePage
              name={hero.name}
              key={hero.id}
              heroesId={hero.id}
              remainPoints={hero.remainPoints}
              abilities={hero.abilities}
            />
          </Route> 
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
