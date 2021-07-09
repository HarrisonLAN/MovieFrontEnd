import React from 'react';
import './App.css';
import Nav from './navComponents/nav';
import Movies from './FilmComponents/movies';
import MovieDetail from './FilmComponents/movieDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Account from './userComponents/account';
import PrivateRoute from './routes/privateRoute';
import PublicRoute from './routes/publicRoute';
import Landing from './landing'
import SignIn from './userComponents/signIn';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <PublicRoute restricted={false} component={Landing} path="/" exact />
                    <PublicRoute restricted={true} path="/signin" component={SignIn} />
                    <PrivateRoute Route path="/movie" exact component={Movies} />
                    <PrivateRoute Route path="/movie/:id" component={MovieDetail} />
                    <PrivateRoute path="/account" component={Account} />

                </Switch>
            </div>
        </Router>
    )
}

export default App;