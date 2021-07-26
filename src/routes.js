import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import formcliente from './formcliente';
import Formproduto from './formproduto';
import Home from './Home'

export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route  path='/' exact component={Home}/>
            <Route  path='/formcliente' exact component={formcliente} />
            <Route  path='/formproduto' exact component={Formproduto}/>
        </Switch>
    </BrowserRouter>
    )} 
