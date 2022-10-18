import React from "react";
import {reducer} from './AuthReducer';
import { verifyIfUserExists, findUser, getFromLocalStorage } from "../containers/Helpers";

export const AuthContext = React.createContext([]);

const AuthProvider = ({children}) => {
    const [auth, authDispatch] = React.useReducer(reducer, getFromLocalStorage('allUsers'));

    const handleRegister = (user) => {
        let {confirmPassword, ...details} = user;
        if(verifyIfUserExists(user.email, user.password)){
            alert('account already exists');
        }
        else {
            authDispatch({
                type: 'register',
                payload: {isAuthenticated: false, userDetails: details}
            })
            return true;
        }
    }

    const handleLogin = (user) => {
        const details = findUser(user.email);
        console.log(details, verifyIfUserExists(user.email, user.password))
        if(details && verifyIfUserExists(user.email, user.password)){
            authDispatch({
                type: 'login',
                //payload: {isAuthenticated: true, userDetails: details}
                payload: {...details, isAuthenticated:true}
            })
            return true;
        }
        else{
            alert('invalid username or password.');
        }
    }

    const handleLogout = (user) => {
        const details = findUser(user.email);
        authDispatch({
            type: 'logout',
            payload: {...details, isAuthenticated:false}
        })
        return true;
    }

    return(
        <AuthContext.Provider value={{handleRegister, handleLogin, handleLogout, auth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
