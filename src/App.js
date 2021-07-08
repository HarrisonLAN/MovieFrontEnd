import React from 'react';
import './App.css';
import Nav from './nav';
import Movies from './movies';
import User from './user';
import MovieDetail from './movieDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Movies} />
                    <Route path="/user" component={User} />
                    <Route path="/movie/:id" component={MovieDetail} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;