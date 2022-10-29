import { galleryItems } from './gallery-items.js';

// Change code below this line


    
// Создание и рендер разметки по массиву данных galleryItems и предоставленному 
// шаблону элемента галереи.
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");
gallery.insertAdjacentHTML("beforeend", markup)

console.log(galleryItems);


// Реализация делегирования на div.gallery и получение url большого изображения.
gallery.addEventListener('click', getBigUrl);

let urlBigImg;

function getBigUrl(evt) {
    evt.preventDefault();

    urlBigImg = evt.target.dataset.source;
    return urlBigImg;
};

// Открытие модального окна по клику на элементе галереи
gallery.addEventListener('click', openBigImg);

let instance;

function openBigImg(evt) {
    evt.preventDefault();
    instance = basicLightbox.create(`
    <img src="${urlBigImg}">
`)
    instance.show()
   
}

// Закрытие модального окна по нажатию клавиши Escape
document.addEventListener("keydown", evt => {
    if (instance) {
        if (instance.visible() && evt.code === "Escape") {
            instance.close();
        }
    }
});

