import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Creating a SimpleLightbox instance
let lightbox = new SimpleLightbox('.gallery a.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

/**
 * Creates HTML markup for image galleries
 * @param {Array} images - array of image objects
 */
export function createGallery(images) {
  const gallery = document.querySelector('.gallery');

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img 
            src="${webformatURL}" 
            alt="${tags}" 
            loading="lazy"
          />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span>${likes}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span>${views}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span>${comments}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span>${downloads}</span>
          </p>
        </div>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  // Updating SimpleLightbox after adding new items
  lightbox.refresh();
}

/**
 * Clears the contents of the gallery
 */
export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

/**
 * Shows the loading indicator
 */
export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('is-hidden');
}

/**
 * Hides the loading indicator
 */
export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('is-hidden');
}
