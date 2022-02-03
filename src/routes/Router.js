import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "../pages/Home"
import PokeDetail from "../pages/PokeDetail"
import Pokedex from '../pages/Pokedex'

const Router = () => {

    return (
        <BrowserRouter>
        <Switch>

          <Route exact path={"/"}> 
            <Home></Home>
          </Route> 
          
          <Route exact path={"/pokedex"}> 
            <Pokedex></Pokedex>
          </Route>

          <Route exact path={"/pokedetail"}> 
            <PokeDetail></PokeDetail>
          </Route>
          
          <Route> 
              <p>ERRO PORRAM</p>
          </Route>  

        </Switch>
      </BrowserRouter>
    )
}

export default Router