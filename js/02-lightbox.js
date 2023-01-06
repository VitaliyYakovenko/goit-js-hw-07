import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


function makeMarkup(images) {
    return images.map(({ preview, original, description }) => {
        return `<li> <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> </li>`
    }).join(" ");
}

const markup = makeMarkup(galleryItems)
gallery.innerHTML = markup;


const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captipionDelay: 250,
    });



