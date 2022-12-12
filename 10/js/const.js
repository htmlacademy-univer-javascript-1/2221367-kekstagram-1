const MaxCountPhotos = 25;
const COUNT_COMMETS = 8;
const MAX_STRING_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const SHOWN_COMMENT_COUNT = 5;

const CountLikes = {
  MIN: 15,
  MAX: 200
};

const NumberAvatar = {
  MIN: 1,
  MAX: 6
};

const NAMES = [
  'Анастасия',
  'Мария',
  'Александр',
  'Артем',
  'Юлия'
];

const MASSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DISCRIPTION = [
  'Любовь в каждом цветочке.',
  'Радость моя!',
  'Погода решила взгрустнуть.',
  'Привет моя грусть, я теперь не боюсь.',
];

const ErrorMessage = {
  SEPARETED_BY_SPASES: 'Хэш-теги должны разделяться пробелами',
  START_WITH: 'Хэш-тег должен начинаться с символа #',
  NO_REPEAT: 'Хэш-теги не должны повторяться',
  HASHTAG_MAX_LENTH: `Максимальная длина одного хэш-тега ${MAX_HASHTAG_LENGTH} символов, включая #`,
  MAX_COUNT_HASHTAG: `Нельзя указать больше ${MAX_HASHTAG_COUNT} хэш-тегов`,
  UNACCEPTABLE_SYMBOLS: 'Хэш-тег содержит недопустимые символы',
  COMMENT_MAX_LENGTH: `Максимальная длина комментария ${MAX_STRING_LENGTH} символов`
};

export {DISCRIPTION, MASSAGES, NAMES, CountLikes, COUNT_COMMETS, MaxCountPhotos, NumberAvatar, ErrorMessage, MAX_HASHTAG_COUNT, MAX_HASHTAG_LENGTH, MAX_STRING_LENGTH, SHOWN_COMMENT_COUNT };
