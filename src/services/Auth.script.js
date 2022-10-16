import axios from "axios"
export const login = async item => {
  let data = {
    email: item.email,
    password: item.password
  };
  let request = {
    url: "http://127.0.0.1:3333/signin", 
    method: "post",
    headers: {
      "Content-type": "application/json"
    },
    data: JSON.stringify(data)
  };

  const response = await axios(request);
  return response;
};
export default  login