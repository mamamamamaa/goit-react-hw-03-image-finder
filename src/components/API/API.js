import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29298623-332f005867e72021b2987b33f';
export async function imageSearch(query, page = 2) {
  const options = {
    params: {
      q: query,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 20,
    },
  };
  return (await axios.get('/', options)).data.hits;
}
