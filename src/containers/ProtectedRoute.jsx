import React from 'react';
import {Navigate} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import {getAuthenticatedUser} from './Helpers';

const ProtectedRoute = () => {
    const isAuth = getAuthenticatedUser();
    return isAuth ? <Dashboard /> : <Navigate to={'/'}/>
}
export default ProtectedRoute;