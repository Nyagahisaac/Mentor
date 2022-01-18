
import axios from 'axios';

const token = localStorage.getItem('token');

export const axiosClient = axios.create({
  baseURL: 'https://demo-mentorapp.herokuapp.com/api',
//   headers: {
//     'Access-Control-Allow-Origin': 'http://localhost:3000',
//     'Authorization' : `Bearer: ${token}`
// }
});



axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error
    //   if (res.status === 401) {
    //   window.location.href = 'http://localhost:3000/user/member_login';
    // } 
    console.error('Looks like there was a problem.' + res);
    return Promise.reject(error);
  },
);
