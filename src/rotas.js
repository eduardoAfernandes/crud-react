import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/home';
import CadastroProduto from './views/produtos/cadastro';

export default () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/cadastro-produtos" component={CadastroProduto}  />
                <Route exact path="/" component={Home}  />

            </Switch>
        </Router>
    )
}