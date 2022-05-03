import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function createImagesMarkup (images) {
    return images.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`    
    }).join('')
};

galleryRef.innerHTML = createImagesMarkup(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
}
);