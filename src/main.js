// Import iziToast library for notifications
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Import API functions
import { getImagesByQuery } from './js/pixabay-api.js';

// Import render functions
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

// Get form elements
const form = document.querySelector('.form');
const searchInput = document.querySelector('input[name="search-text"]');

// Add form submit event listener
form.addEventListener('submit', onFormSubmit);

/**
 * Handle form submit event
 * @param {Event} event - Form submit event
 */
function onFormSubmit(event) {
  event.preventDefault();

  // Get search query from input and trim whitespace
  const query = searchInput.value.trim();

  // Check if search query is empty
  if (query === '') {
    iziToast.show({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
      backgroundColor: '#ffc107',
      titleColor: '#000',
      messageColor: '#000',
      iconColor: '#000',
      theme: 'light',
      icon: 'ico-warning',
    });
    return;
  }

  // Clear previous search results
  clearGallery();

  // Show loading indicator
  showLoader();

  // Fetch images from API
  getImagesByQuery(query)
    .then(data => {
      // Hide loading indicator
      hideLoader();

      // Check if API returned any results
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          titleColor: '#fafafb',
          messageColor: '#fafafb',
          iconColor: '#fafafb',
          progressBarColor: '#ffbebe',
        });
        return;
      }

      // Render gallery with fetched images
      createGallery(data.hits);

      // Clear input field after successful search
      searchInput.value = '';
    })
    .catch(error => {
      // Hide loading indicator on error
      hideLoader();

      // Show error notification
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
        position: 'topRight',
        backgroundColor: '#ef4040',
        titleColor: '#fafafb',
        messageColor: '#fafafb',
        iconColor: '#fafafb',
        progressBarColor: '#ffbebe',
      });

      // Log error to console for debugging
      console.error('Error fetching images:', error);
    });
}
