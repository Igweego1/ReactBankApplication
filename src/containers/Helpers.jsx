export const getDate = (val) => {
    let date = new Date(val);
    let day = date.getDay(); 
    let month = date.toLocaleString('default', { month: 'long' }); 
    let year = date.getFullYear();

    return ([day, month, year].join(' '))
}

export const greetings = () => {
    const date = new Date();
    const hours = date.getHours();
    let greeting = '';
    if(hours >= 0 && hours < 12){
        greeting = 'morning'
    }
    else if (hours >= 12 && hours <= 17){
        greeting = 'afternoon'
    }
    else greeting = 'evening'

    return greeting
}

export const getFromLocalStorage = (item) => {
    const obj = JSON.parse(localStorage.getItem(item));
    return obj;
}

let allUsers = getFromLocalStorage('allUsers');

export const setToLocalStorage = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
}

export const getAuthenticatedUser = () => {
    let user = allUsers.find(x => x.isAuthenticated === true)
    return user !== undefined ? user.userDetails : null;
}

export const findUser = (email) => {
    return(allUsers ? allUsers.find(y => y.userDetails.email === email) : {})
}

export const verifyIfUserExists = (email, password) => {
    let find = (a) => a.userDetails.email === email && a.userDetails.password === password;
    //allusers && allusers.find(x => x.userDetails.email === email);
    return allUsers && allUsers.some(find);
}