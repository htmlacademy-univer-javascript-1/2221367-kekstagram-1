import { getRandomPositiveInteger} from './utils.js';
import {MASSAGES, createPhotoArray, DISCRIPTION, NAMES, MaxCountPhotos } from './const.js';
const getUserData = (id) => ({
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
  comments: Array.from({ length: getRandomPositiveInteger(1, 6) }).map((value, index) => getUserData(index + 1)),
});
const createPhotoArray = (lengthArray) = Array.from({ length: MaxCountPhotos }).map((value, index) => getPhotoData(index + 1));
const photos = createPhotoArray(MaxCountPhotos);
export { photos };
