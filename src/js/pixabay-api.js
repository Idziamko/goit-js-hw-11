import axios from 'axios';

const API_KEY = '46160270-245e238467519bdf1432473a7';
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Function for obtaining images based on a search query
 * @param {string} query - search term
 * @returns {Promise} - Promise with data from API
 */
export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
