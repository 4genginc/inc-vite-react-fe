import axios from 'axios';

const axiosWithAuth = ()=> {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: `https://node-js-api-ad1fa2d2125b.herokuapp.com/api`
  });
}

export default axiosWithAuth;