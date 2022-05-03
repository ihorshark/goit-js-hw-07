import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

function createImagesMarkup (images) {
    return images.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`    
    }).join('')
};

galleryRef.innerHTML = createImagesMarkup(galleryItems);


galleryRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();
    const isImageEl = event.target.classList.contains('gallery__image');
    if (!isImageEl) return;

    showOriginalImage();
}

function showOriginalImage () {
    const instance = basicLightbox.create(`
            <img src="${event.target.dataset.source}">
        `)

    instance.show()
}