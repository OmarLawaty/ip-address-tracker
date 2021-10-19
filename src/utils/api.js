import axios from 'axios';

export default axios.create({
  baseURL: 'https://geo.ipify.org/',
  params: {
    apiKey: process.env.REACT_APP_KEY
  }
});
