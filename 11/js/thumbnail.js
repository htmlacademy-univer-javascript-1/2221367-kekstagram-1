import { openPicture } from './big-picture.js';

const getPictureTemplate = ({id, url, comments, likes}) => `<a href="#" class="picture js-picture" data-id="${id}">
<img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
<p class="picture__info">
  <span class="picture__comments">${comments.length}</span>
  <span class="picture__likes">${likes}</span>
</p>
</a>`;

const renderThumbnails = (data) => {
  const containerPictures = document.querySelector('.js-pictures');
  containerPictures.insertAdjacentHTML('beforeend',data.map((photo) => getPictureTemplate(photo)).join(''));
};

const addPictures = (data) => {
  renderThumbnails(data);
  const pictures = document.querySelectorAll('.js-picture');
  pictures.forEach((picture) => {
    picture.addEventListener('click', (evt) => {
      evt.preventDefault();
      const target = evt.target;
      const parent = target.closest('.js-picture');
      const id = +parent.dataset.id;
      const [ photo ] = data.filter((item) => item.id === id);
      openPicture(photo);
    });
  });
};

export { addPictures };
