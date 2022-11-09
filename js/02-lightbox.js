import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", createGalleryImages(galleryItems));

function createGalleryImages(images) {
  return images.map(
      (image) => `  <li>
        <a class="gallery__item" href="${image.original}">
         <img
         class="gallery__image"
         src="${image.preview}"
         alt="${image.description}"
        />
        </a>
     </li>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

