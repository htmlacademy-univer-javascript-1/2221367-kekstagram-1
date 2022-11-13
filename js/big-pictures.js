const bigPictures = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture_cancel');

const getCommentsList = (comments) => {
    const socialComments = document.querySelector('.social__comments');
    const socialOneComment = document.querySelector('.social__comment');
    const fragment = document.createDocumentFragment();
  
    comments.forEach((comment) => {
      const socialComment = socialOneComment.cloneNode(true);
      const authorAvatar = socialComment.querySelector('.social__picture');
      const authorMessage = socialComment.querySelector('.social__text');
      authorAvatar.src = comment.avatar;
      authorAvatar.alt = comment.name;
      authorMessage.textContent = comment.message;
      fragment.appendChild(socialComment);
    });

    socialComments.innerHTML = '';
    socialComments.appendChild(fragment);
  };
  
  const renderBigPicture = (picture) => {
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    bigPicture.querySelector('.big-picture__img img').src = picture.url;
    bigPicture.querySelector('.likes-count').textContent = picture.likes;
    bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
    bigPicture.querySelector('.social__caption').textContent = picture.description;
  
    getCommentsList(picture.comments);
  };
  
  const onPictureEscKeyDown = (evt) => {
    if(evt.key === 'Escape') {
      document.body.classList.remove('modal-open');
      bigPicture.classList.add('hidden');
      document.removeEventListener('keydown', onPictureEscKeyDown);
    }
  };
  
  function closePictureWindow() {
    document.body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');

    closeButton.removeEventListener('click', closePictureWindow);
    document.removeEventListener('keydown', onPictureEscKeyDown);
}
  
  const openPicture = (element) => {
    document.body.classList.add('modal-open');
    bigPicture.classList.remove('hidden');
  
    renderBigPicture(element);
  
    closeButton.addEventListener('click', closePictureWindow);
    document.addEventListener('keydown', onPictureEscKeyDown);
  };
  
  export {openPicture};
  