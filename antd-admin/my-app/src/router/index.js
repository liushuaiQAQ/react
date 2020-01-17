import React, { Component } from 'react'
import { HashRouter, Switch } from 'react-router-dom';
import AuthRouter from './authRouter';
import Layout from '@/layout/Index';

class Router extends Component {
    render(){
        return (
            <HashRouter>
                <Switch>
                    {/* <Route component={Login} exact path="/login" /> */}
                    <AuthRouter path="/" component={Layout} />
                </Switch>
            </HashRouter>
        )
    }
}
export default Router;