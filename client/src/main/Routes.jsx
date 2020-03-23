import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/contents/Home'
import Desafio from '../components/contents/Desafio'
import Autor from '../components/contents/Autor'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/desafio' component={Desafio}/>
        <Route path='/autor' component={Autor}/>
        <Redirect from="*" to="/" />
    </Switch>