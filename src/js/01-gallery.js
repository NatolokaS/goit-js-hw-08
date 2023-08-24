// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const listEl = document.querySelector(".gallery");
listEl.style.listStyle = 'none';
const galleryCardMarkup = renderList(galleryItems);

function renderList(galleryItems) {
  return galleryItems
    .map(
        (item) => `<li class="item gallery__item">
      <a class="gallery__link" href="${item.original}" >
  <img class="gallery__image" alt="${item.description}" src="${item.preview}" width="300" />
  </a>
  </li>`
    )
  .join("");
};

listEl.insertAdjacentHTML("beforeend", galleryCardMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});