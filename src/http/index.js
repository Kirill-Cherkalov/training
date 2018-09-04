import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  withCredentials: true,
});

export default http;
