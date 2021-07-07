import React from 'react';
import './App.css';
import Nav from './nav';
import Movies from './movies';
import User from './user';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" component={Movies} />
                    <Route path="/user" component={User} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;