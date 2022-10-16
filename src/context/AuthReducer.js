import { getFromLocalStorage, setToLocalStorage } from "../containers/Helpers";

let allUsers = getFromLocalStorage('allUsers');

export const getInitialState = () => {
    return localStorage.getItem('allUsers') ? JSON.parse(localStorage.getItem('allUsers')) : [];
};

const getIndexOfUser = (user) => {
    return allUsers ? allUsers.findIndex(a => a.userDetails.email === user.email && a.userDetails.password === user.password) : [];
}

const init = getInitialState();

export const reducer = (state, action) => {
    let find = getIndexOfUser(action.payload.userDetails);
    switch(action.type){
        case 'register':
            if(find !== -1){
                init.push({
                    isAuthenticated: action.payload.isAuthenticated,
                    userDetails: action.payload.userDetails
                })
                setToLocalStorage('allUsers', init)
            }
            break;
        case 'login':
            if(find !== -1){
                init[find].isAuthenticated = action.payload.isAuthenticated;
                setToLocalStorage('allUsers', init);
            }
            break;
        case 'logout':
            init[find].isAuthenticated = action.payload.isAuthenticated;
            setToLocalStorage('allUsers', init);
            console.log(init);
            break;
        default:
            return state;
    }
}