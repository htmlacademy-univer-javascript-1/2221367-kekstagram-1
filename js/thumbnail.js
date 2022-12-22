import { openPicture } from './big-pictures.js';

const picturesContainer = document.querySelector('.js-pictures');
let photos = [];

const getPictureTemplate = ({id, url, comments, likes}) => `<a href="#" class="picture js-picture" data-id="${id}">
<img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
<p class="picture__info">
${comments ? `<span class="picture__comments">${comments.length}</span>` : ''}
  <span class="picture__likes">${likes}</span>
</p>
</a>`;

const createThumbnails = () => {
  picturesContainer.insertAdjacentHTML('beforeend', photos.map((photo) => getPictureTemplate(photo)).join(''));
};

const onPicturesClick = (evt) => {
  const target = evt.target;
  const picture = target.closest('.js-picture');

  if ( picture ) {
    const id = +picture.dataset.id;
    const [ photo ] = photos.filter((item) => item.id === id);
    openPicture(photo);
  }
};

const removeThumbnails = () => {
  const pictures = document.querySelectorAll('.js-picture');
  pictures.forEach((picture) => picture.remove());
};

const renderThumbnails = (data) => {
  photos = data.slice();
  createThumbnails();
  picturesContainer.addEventListener('click', onPicturesClick);
};

export { renderThumbnails, removeThumbnails };
