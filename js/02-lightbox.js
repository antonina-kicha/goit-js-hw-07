import { galleryItems } from './gallery-items.js';
// Change code below this line


// Создание и рендер разметки по массиву данных galleryItems и предоставленному 
// шаблону элемента галереи.
const galleryEl = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");
galleryEl.insertAdjacentHTML("beforeend", markup)

console.log(galleryItems);

// Инициализация бибилиотеки SimpleLightbox
let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
gallery.on('show.simplelightbox', function () {
	// Do something…
    console.log(SimpleLightbox);
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // Some usefull information
});

