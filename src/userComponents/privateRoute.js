import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <p>wapomdaw</p>
    )
};

export default PrivateRoute;