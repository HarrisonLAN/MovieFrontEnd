import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../hooks/userContext';
import Loading from './../userComponents/Loading';



export default function PrivateRoute(props) {   
    const { user, isLoading } = useContext(UserContext); 
    console.log(user, isLoading);

    const { component: Component,
        ...rest } = props;

      if(isLoading) {
          return <Loading/>
        }

      if(user){
        return ( <Route {...rest} render={(props) => (<Component {...props}/>)}/>)
        } else {
          return <Redirect to='/login'/> 
        }

}
