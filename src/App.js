import React from 'react';
import './App.css';
import Nav from './components/navComponents/nav';
import Movies from './components/filmComponents/movies';
import MovieDetail from './components/filmComponents/movieDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Account from './components/userComponents/account';
import PrivateRoute from './components/userComponents/privateRoute';
import useFindUser from './hooks/useFindUser'
import { UserContext } from './hooks/userContext';
import Login from './pages/login';

function App() {
    const {
        user,
        setUser,
        isLoading } = useFindUser();
    return (
        <Router>
            <UserContext.Provider value={{ user, setUser, isLoading }}>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact />
                    <Route path="/movie" exact component={Movies} />
                    <Route path="/user" component={Account} />
                    <Route path="/login" component={Login}/>
                    <Route path="/movie/:id" component={MovieDetail} />
                    <PrivateRoute path="/account" component={Account} />

                </Switch>
            </div>
            </UserContext.Provider>
        </Router>
    )
}

export default App;