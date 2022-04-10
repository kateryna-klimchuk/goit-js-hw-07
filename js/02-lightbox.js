import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');


const imagesMarkUp = galleryItems.map(({ preview, original, description }) =>
    `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a></li>`).join('');

galleryEl.insertAdjacentHTML('afterbegin', imagesMarkUp);

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: "250",
    enableKeyboard: "true",
});