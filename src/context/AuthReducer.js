import { getFromLocalStorage, setToLocalStorage, getIndexOfUser } from "../containers/Helpers";


export const getInitialState = () => {
    return localStorage.getItem('allUsers') ? JSON.parse(localStorage.getItem('allUsers')) : [];
};

const init = getInitialState();

export const reducer = (state, action) => {
    let find = getIndexOfUser(action.payload.userDetails);
    console.log(find)
    switch(action.type){
        case 'register':
            if(find === -1){
                init.push({
                    isAuthenticated: action.payload.isAuthenticated,
                    userDetails: action.payload.userDetails
                })
                setToLocalStorage('allUsers', init);
            }
            break;
        case 'login':
            if(find !== -1){
                console.log('found');
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