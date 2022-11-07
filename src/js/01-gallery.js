// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createMarckUp() {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
     alt=${description}
    />
  </a>
</li>`
    )
    .join('');
}

galleryEl.insertAdjacentHTML('afterbegin', createMarckUp());

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
