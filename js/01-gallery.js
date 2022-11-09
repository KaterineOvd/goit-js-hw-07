import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divEl = document.querySelector(".gallery");

function createGalleryItems(images) {
  return images.map((image) => ` <div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
         <img
         class="gallery__image"
         src="${image.preview}"
         data-source="${image.original}"
         alt="${image.description}"/>
        </a>
    </div>`
    )
    .join("");
}

const addGalleryItems = createGalleryItems(galleryItems);

divEl.innerHTML = addGalleryItems;
divEl.addEventListener("click", onImageClick);

function onImageClick(event) {
    event.preventDefault();
    
  if (event.target.nodeName !== "IMG") {
    return;
  }
    
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="600" height="400">
`);
  instance.show();
  window.addEventListener("keydown", onKeyPress);

  // Close
  function onKeyPress(event) {
    if (event.code === "Escape") {
      window.removeEventListener("keydown", onKeyPress);
      instance.close();
    }
  }
}
