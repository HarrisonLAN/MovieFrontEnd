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
                <Movies />
                <Route path="/user" component={User} />
            </div>
        </Router>
    )
}

export default App;