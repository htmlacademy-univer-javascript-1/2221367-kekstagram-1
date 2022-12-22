import { isEscapeKey } from './utils.js';
import { SHOWN_COMMENT_COUNT } from './consts.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsToShowCount = document.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

let actualComments = [];
let countRenderedComments = SHOWN_COMMENT_COUNT;

const getCommentTemplate = ({avatar, message, name}) => `<li class="social__comment">
  <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
  <p class="social__text">${message}</p>
</li>`;

const getCounterCommentsTemplate = (commentsCount) => `${Math.min(countRenderedComments, commentsCount)} из <span class="comments-count">${commentsCount}</span> комментариев`;

const getCounterComments = () => {
  commentsToShowCount.innerHTML='';
  commentsToShowCount.insertAdjacentHTML('afterbegin', getCounterCommentsTemplate(actualComments.length));
};

const renderComments = () => {
  getCounterComments();

  commentsList.innerHTML='';
  const commentsTemplate = actualComments.slice(0, countRenderedComments).map((comment) => getCommentTemplate(comment)).join('');
  commentsList.insertAdjacentHTML('afterbegin', commentsTemplate);

  if (countRenderedComments >= actualComments.length) {
    commentsLoader.removeEventListener('click', onCommentsLoaderButtonClick);
    commentsLoader.classList.add('hidden');
  }
};

const initComments = (comments) => {
  actualComments = comments.slice();
  commentsList.innerHTML='';

  if (comments.length === 0) {
    commentsLoader.classList.add('hidden');
    commentsToShowCount.innerHTML = 'Нет комментариев';
    return;
  }

  renderComments();
  commentsLoader.addEventListener('click', onCommentsLoaderButtonClick);
};

const renderBigPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  initComments(picture.comments);
};

const closePicture = () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onDocumentEscKeyDown);
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', onCommentsLoaderButtonClick);
  countRenderedComments = SHOWN_COMMENT_COUNT;
};

function onDocumentEscKeyDown(evt) {
  if(isEscapeKey(evt)) {
    closePicture();
  }
}

function onCloseButtonClick() {
  closePicture();
}

function onCommentsLoaderButtonClick() {
  countRenderedComments += SHOWN_COMMENT_COUNT;
  renderComments();
}

const openPicture = (element) => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  renderBigPicture(element);

  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentEscKeyDown);
};

export { openPicture };
