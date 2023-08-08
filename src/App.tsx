import React, { FunctionComponent, useEffect, useState } from 'react';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        {/* La barre de navigation commune à toute les pages*/}
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">Pokédex</Link>
          </div>
        </nav>
        {/*Le systeme de gestion des routes*/}
        <Switch>
          <PrivateRoute exact path="/" component={PokemonList} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/pokemons" component={PokemonList} />
          <PrivateRoute exact path="/pokemon/add" component={PokemonAdd} />
          <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
          <PrivateRoute exact path="/pokemons/:id" component={PokemonsDetail} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;