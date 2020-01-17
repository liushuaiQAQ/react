
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login'
import AdminIndex from './AdminIndex';
import ArticleList from './ArticleList';
import Test from './Test';

function Main(){
    return (
        <Router>      
            <Route path="/login/" exact component={Login} />
            <Route path="/index/" exact component={AdminIndex} />
            <Route path="/list/" exact component={ArticleList} />
            <Route path="/test/" exact component={Test} />
        </Router>
    )
}
export default Main