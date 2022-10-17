import { setToLocalStorage, getIndexOfUser, getFromLocalStorage } from "../containers/Helpers";

const init = getFromLocalStorage('allUsers');

export const reducer = (state, action) => {
    let find = getIndexOfUser(action.payload.userDetails);
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
                init[find].isAuthenticated = action.payload.isAuthenticated;
                setToLocalStorage('allUsers', init);
            }
            break;
        case 'logout':
            init[find].isAuthenticated = action.payload.isAuthenticated;
            setToLocalStorage('allUsers', init);
            break;
        default:
            return state;
    }
}