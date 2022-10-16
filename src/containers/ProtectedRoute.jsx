import React from 'react';
import {Navigate} from 'react-router-dom';
import {getAuthenticatedUser} from './Helpers';

const ProtectedRoute = ({children}) => {
    const isAuth = getAuthenticatedUser();
    return isAuth ? children : <Navigate to={'/'}/>
}
export default ProtectedRoute;