import axios from 'axios'

export default (ctx, inject) => {
  
  let token = null;
  
  if(process.client) {
    token = localStorage.getItem('auth._token.local')
  }
  
  const axiosAuth = axios.create({
    ...ctx.$axios.defaults,
    baseURL: process.env.BASE_API_URL,
    headers: {
      'Authorization': token
    }
  });
  
  inject('axiosAuth', axiosAuth)
}