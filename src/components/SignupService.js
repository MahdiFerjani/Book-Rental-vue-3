import axios from "axios";
  const signup = async item => {
    let data = {
      username: item.username,
      email: item.email,
      nom:item.nom,
      prenom:item.prenom,
      niveau:item.niveau,
      password: item.password,
      
    };
    let request = {
      url: "http://127.0.0.1:3333/signup", // should be replaced after going to production with domain url
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      data: JSON.stringify(data)
    };
    
  
    const response = await axios(request);
    return response;
  };
  export default signup