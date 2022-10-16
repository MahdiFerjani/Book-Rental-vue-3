export const idAuth = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user.role=="admin"&&user.token.token){
        return true
    }
    else 
    return false
}
export default  idAuth