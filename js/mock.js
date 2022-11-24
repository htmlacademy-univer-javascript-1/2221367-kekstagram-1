
import { getRandomPositiveInteger } from './utils.js';
import { NAMES, MESSAGES, DESCRIPTIONS, COUNT_PHOTO, COUNT_COMMENT, CountLike, NumberAvatar } from './consts.js';

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(NumberAvatar.MIN, NumberAvatar.MAX)}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)]
});

const createPhotoData = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomPositiveInteger(CountLike.MIN, CountLike.MAX),
  comments: Array.from({length: getRandomPositiveInteger(1, COUNT_COMMENT)}).map((_, index) => createComment(index + 1))
});

const createPhotoArray = (lengthArray) => Array.from({length: lengthArray}).map((_, index) => createPhotoData(index + 1));

const photos = createPhotoArray(COUNT_PHOTO);

export {photos};
