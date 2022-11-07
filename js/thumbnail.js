import { photos } from './mocks.js';

const getPictureTemplate = ({url, comments, likes}) => `<a href="#" class="picture">
<img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
<p class="picture__info">
  <span class="picture__comments">${comments.length}</span>
  <span class="picture__likes">${likes}</span>
</p>
</a>`;

const containerPictures = document.querySelector('.js-pictures');

containerPictures.insertAdjacentHTML('beforeend', photos.map((photo) => getPictureTemplate(photo)).join(''));

export {containerPictures};