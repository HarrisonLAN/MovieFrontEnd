import React from 'react';
import './App.css';
import NavMenu from './navComponents/navMenu';
import Movies from './FilmComponents/movies';
import MovieDetail from './FilmComponents/movieDetail';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Account from './userComponents/account';
import PrivateRoute from './routes/privateRoute';
import PublicRoute from './routes/publicRoute';
import SignIn from './userComponents/signIn';
import Register from '../src/userComponents/register'

function App() {
    return (
        <Router>
            <NavMenu />
            <div className="min-h-screen flex justify-center items-center">
                <Switch>
                    <PublicRoute restricted={false} component={SignIn} path="/" exact />
                    <PublicRoute restricted={false} path="/register" component={Register} />
                    <PrivateRoute Route path="/movie" exact component={Movies} />
                    <PrivateRoute Route path="/movie/:id" component={MovieDetail} />
                    <PrivateRoute path="/account" component={Account} />

                </Switch>
            </div>
        </Router>
    )
}

export default App;