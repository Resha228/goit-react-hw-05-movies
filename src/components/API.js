import axios from 'axios';

export const API_KEY = '4b344883b82fcf079d9187a8a7651085';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchData = async (way, data) => {
  const response = await axios.get
    (`${way}?api_key=${API_KEY}${data ?? ''}`);
  return response.data;
};



