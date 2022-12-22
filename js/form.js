import { isEscapeKey, checkStringLength } from './utils.js';
import { MAX_STRING_LENGTH, MAX_HASHTAG_COUNT, MAX_HASHTAG_LENGTH, ErrorMessage } from './const.js';
import { sliderWrapper, initEffects, removeEffects, createSlider } from './effect-filters.js';
import { initScaleContainer, removeScaleContainer } from './photo-scale.js';
import { sendData } from './api.js';
import { renderMessage } from './messages.js';
import { imgPreview } from './user-photo.js';

const body = document.querySelector('body');
const submitButton = document.querySelector('.img-upload__submit');
const imgUploadField = document.querySelector('#upload-file');
const editImg = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const closeButton = form.querySelector('.img-upload__cancel');
const hashtagsField = form.querySelector('.text__hashtags');
const commentsField = form.querySelector('.text__description');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

const closeForm  = () => {
  editImg.classList.add('hidden');
  body.classList.remove('modal-open');
  removeScaleContainer();
  removeEffects();
  imgUploadField.value = '';
  document.removeEventListener('keydown', onDocumentEscKeydown);
  closeButton.removeEventListener('click', onCloseButtonClick);
};

const closeFormWithDefaultSettings  = () => {
  closeForm();
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
  form.reset();
};

function onDocumentEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeFormWithDefaultSettings();
  }
}

function onCloseButtonClick() {
  closeFormWithDefaultSettings();
}

const addFieldListeners = (field) => {
  field.addEventListener('focus', () => {
    document.removeEventListener('keydown', onDocumentEscKeydown);
  });
  field.addEventListener('blur', () => {
    document.addEventListener('keydown', onDocumentEscKeydown);
  });
};

const adjustButton = () => {
  submitButton.disabled = !pristine.validate();
};

const doActionWithClassHidden = () => imgPreview.hasAttribute('class') ? sliderWrapper.classList.remove('hidden') : sliderWrapper.classList.add('hidden');

const onImgUploadFieldСhange = () => {
  editImg.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentEscKeydown);
  doActionWithClassHidden();
  initEffects();
  initScaleContainer();
  addFieldListeners(commentsField);
  addFieldListeners(hashtagsField);
  adjustButton();
};

const getUniqueHashtags = (hashtags) => {
  const uniqueSet = new Set(hashtags);
  return hashtags.length === uniqueSet.size;
};

let errorMessage = '';

const getError = () => errorMessage;

const hashtagsHandler = (string) => {
  errorMessage = '';

  const inputText = string.toLowerCase().trim();

  if(!inputText) {
    return true;
  }

  const inputHashtags = inputText.split(/\s+/);

  if(inputHashtags.length === 0) {
    return true;
  }

  const rules = [
    {
      check: inputHashtags.some((item) => item.indexOf('#', 1) >= 1),
      error: ErrorMessage.SEPARATED_BY_SPACES,
    },

    {
      check: inputHashtags.length > MAX_HASHTAG_COUNT,
      error: ErrorMessage.MAX_COUNT_HASHTAG,
    },

    {
      check: inputHashtags.some((item) => item[0] !== '#'),
      error: ErrorMessage.START_WITH,
    },

    {
      check: inputHashtags.some((item) => item.length > MAX_HASHTAG_LENGTH),
      error: ErrorMessage.HASHTAG_MAX_LENGTH,
    },

    {
      check: inputHashtags.some((item) => !/^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/.test(item)),
      error: ErrorMessage.UNACCEPTABLE_SYMBOLS,
    },

    {
      check: !getUniqueHashtags(inputHashtags),
      error: ErrorMessage.NO_REPEAT,
    },
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if(isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const commentHandler = (string) => {
  errorMessage = '';

  const inputText = string.trim();

  if(!inputText) {
    return true;
  }

  const rule = {
    check: !checkStringLength(inputText, MAX_STRING_LENGTH),
    error: ErrorMessage.COMMENT_MAX_LENGTH,
  };

  const isInvalid = rule.check;
  if(isInvalid) {
    errorMessage = rule.error;
  }
  return !isInvalid;
};

const validateForm = () => {
  pristine.addValidator(hashtagsField, hashtagsHandler, getError);
  pristine.addValidator(commentsField, commentHandler, getError);
  adjustButton();
};

const onHashtagsFieldInput = () => adjustButton();

const onCommentsFieldInput = () => adjustButton();

const setFormSubmit = (onSuccess, onError) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      submitButton.disabled = true;
      sendData(
        () => {
          onSuccess();
          renderMessage(true);
        },
        () => {
          onError();
          renderMessage();
        },
        new FormData(evt.target),
      );
    }
  });
};

const renderUploadForm = () => {
  imgUploadField.addEventListener('change', onImgUploadFieldСhange);
  hashtagsField.addEventListener('input', onHashtagsFieldInput);
  commentsField.addEventListener('input', onCommentsFieldInput);
  createSlider();
  validateForm();
  setFormSubmit(closeFormWithDefaultSettings, closeForm);
};

export { renderUploadForm };
