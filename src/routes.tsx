import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Produto from './pages/Produto';
import Cliente from './pages/Cliente';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/produto' component={Produto} />
                <Route path='/cliente' component={Cliente} />
            </Switch>
        </BrowserRouter>
    );
}