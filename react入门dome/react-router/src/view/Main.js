import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, Route } from 'react-router-dom';
import { Menus } from '@/Router';

class Main extends Component {
    render() { 
        return (  
            // <Switch>
            //     {
            //         Menus.map(item => {
            //             return <Route path={item.path} component={item.component} key={item.path} exact></Route>
            //         })
            //     }
            // </Switch>
            <div>
                {renderRoutes(Menus)}
            </div>
        );
    }
}
 
export default Main;