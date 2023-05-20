import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Update this with your server's URL
});

export default api;
