export default function authHeader() {
    let token = JSON.parse(localStorage.getItem('jwt'));
    if (token!=null) {
      return { Authorization: 'Bearer ' + token};
    } else {
      return {};
    }
  }