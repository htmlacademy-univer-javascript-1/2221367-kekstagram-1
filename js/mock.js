
import { getRandomPositiveInteger} from './utils.js';
import {NAMES, MASSAGES, DISCRIPTION, COUNT_COMMETS, MaxCountPhotos, CountLikes, NumberAvatar } from './const.js';

const createComments = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(NumberAvatar.MIN, NumberAvatar.MAX)}.svg`,

import { getRandomPositiveInteger} from '/utils.js';
import { MASSAGES, DISCRIPTION, NAMES, MaxCountPhotos } from '/const.js';

const GetUserData = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, MaxCountPhotos)}.svg`,

  message: MASSAGES[getRandomPositiveInteger(0, MASSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
});

const getPhotoData = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  despription: DISCRIPTION[getRandomPositiveInteger(0, DISCRIPTION.length - 1)],
  likes: getRandomPositiveInteger(CountLikes.MIN, CountLikes.MAX),
  comments: Array.from({ length: getRandomPositiveInteger(1, COUNT_COMMETS) }).map((_, index) => getUserData(index + 1)),
});

const createPhotos = () = Array.from({length: MaxCountPhotos}).map((_, index) => getPhotoData(index + 1));

const photos = createPhotos();

export { photos };
