import React from 'react';
import './App.css';
import Nav from './navComponents/nav';
import Movies from './FilmComponents/movies';
import MovieDetail from './FilmComponents/movieDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Account from './userComponents/account';
import PrivateRoute from './userComponents/privateRoute';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact />
                    <Route path="/movie" exact component={Movies} />
                    <Route path="/user" component={Account} />
                    <Route path="/movie/:id" component={MovieDetail} />
                    <PrivateRoute path="/account" component={Account} />

                </Switch>
            </div>
        </Router>
    )
}

export default App;