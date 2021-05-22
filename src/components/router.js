import React from 'react'
import Home from './home/home'
import Form from './form/form'
import Sobre from './sobre/sobre'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

export default function Routes(){


    return (
        <Router>
                <Route exact path='/' component={Home}/>
            <Switch>
                <Route exact path='/form' component={Form}/>
                <Route exact path='/sobre' component={Sobre}/>
            </Switch>
        </Router>
    )

}