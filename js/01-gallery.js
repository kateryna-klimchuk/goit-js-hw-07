import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');


const imagesMarkUp = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>`).join('');

galleryEl.insertAdjacentHTML('afterbegin', imagesMarkUp);

galleryEl.addEventListener("click", onClick);

function onClick(event) {
    if (event.target.nodeName !== "IMG") {
    return;
    }
    event.preventDefault();
    modalWindow(event.target.dataset.source);
}
let instance;

function modalWindow(source) {
    instance = basicLightbox.create(`<img src="${source}"></img>`, {
    onShow: () => {
        addListener();
    },
    onClose: () => {
        removeListener();
    },
    });
    instance.show();
}
function addListener() {
    window.addEventListener("keydown", onEscClick);
}
function onEscClick(event) {
    if (event.code === "Escape") {
    instance.close();
    }
}
function removeListener() {
    window.removeEventListener("keydown", onEscClick);
}


