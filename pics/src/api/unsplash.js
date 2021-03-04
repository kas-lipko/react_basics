import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID HodoecxAAAldAho9ChXm531UX-WiwroGxqqPV_IEmm0'
  }
});
