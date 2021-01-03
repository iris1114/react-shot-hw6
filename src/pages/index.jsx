
import React from "react";
import HeroListPage from "./HeroListPage"
import HeroProfilePage from "./HeroProfilePage"
import { BrowserRouter, Route, Switch } from "react-router-dom"

const HeroPage = () => {
    return(
        <BrowserRouter>
        <HeroListPage />
        <Switch>
            <Route path="/heroes" exact></Route>
            <Route path="/heroes/:heroId">
              <HeroProfilePage />
            </Route>
        </Switch>
      </BrowserRouter>
    )
}

export default HeroPage;