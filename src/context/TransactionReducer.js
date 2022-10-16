import { getFromLocalStorage, getIndexOfUser, setToLocalStorage, getAuthenticatedUser } from "../containers/Helpers";

let allUsers = getFromLocalStorage('allUsers');
let allTransactions = getFromLocalStorage('allTransactions');
let user = getAuthenticatedUser();

export const transactionReducer = (state, action) => {
    let find = getIndexOfUser(user);
    switch(action.type){
        case 'Debit':
            allTransactions.push(action.payload);
            if(find !== -1){
                allUsers[find].userDetails.initialDeposit = action.payload.userBalance;
                console.log(allUsers);
                console.log(allTransactions)
                setToLocalStorage('allUsers', allUsers);
                setToLocalStorage('allTransactions', allTransactions);
            }
            break;
        case 'Credit':
            allTransactions.push(action.payload);
            if(find !== -1){
                allUsers[find].userDetails.initialDeposit = action.payload.userBalance;
                console.log(allUsers);
                console.log(allTransactions)
                setToLocalStorage('allUsers', allUsers);
                setToLocalStorage('allTransactions', allTransactions);
            }
            break;
        default:
            return state;
    }
}