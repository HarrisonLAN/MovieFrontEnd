import React from 'react';
import './App.css';
import NavMenu from './navComponents/navMenu';
import Movies from './FilmComponents/movies';
import MovieDetail from './FilmComponents/movieDetail';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Account from './userComponents/account';
import PrivateRoute from './routes/privateRoute';
import PublicRoute from './routes/publicRoute';
import Landing from './landing'
import SignIn from './userComponents/signIn';
import Register from '../src/userComponents/register'

function App() {
    return (
        <Router>
            <div className="min-h-screen flex justify-center items-center">
                <Switch>
                    <PublicRoute restricted={false} component={Landing} path="/" exact />
                    <PublicRoute restricted={false} path="/register" component={Register} />
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