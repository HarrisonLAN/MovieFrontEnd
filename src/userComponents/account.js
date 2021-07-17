import React from 'react';
import jwt_decode from "jwt-decode";
import { logiutilsJWTnDets } from '../utils/index';


function Account() {

    const token = logiutilsJWTnDets();
    var decoded = jwt_decode(token);
    console.log(decoded);



    return (
        <div>
            <h1>Name: {decoded.name}</h1>
            <h1>Email: {decoded.email}</h1>
        </div>

    );
}

export default Account;