import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

function makeMarkup(gallery) {
     return gallery.map(({preview,original,description}) => {
      return  `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
     />
   </a>
  </div>`
    }).join(" ");
}

const markup =  makeMarkup(galleryItems);

galleryRef.insertAdjacentHTML("afterbegin", markup);
galleryRef.addEventListener("click", onClickImgModal)



function onClickImgModal(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return
  }
  const instance =  basicLightbox.create(
     `<img width="1280" height="600" src="${e.target.dataset.source}">`
  )
  instance.show();


  document.body.addEventListener("keydown", onCloseImgModal)

  function onCloseImgModal(event) {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
      document.body.removeEventListener("keydown", onCloseImgModal);
     }
  }
   
}



