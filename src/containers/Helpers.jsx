export const getDate = (val) => {
    let date = new Date(val);
    let day = date.getDay(); 
    let month = date.toLocaleString('default', { month: 'long' }); 
    let year = date.getFullYear();

    return ([day, month, year].join(' '))
}