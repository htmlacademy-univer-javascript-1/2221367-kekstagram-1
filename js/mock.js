import { getRandomPositiveInteger} from '/utils.js';
import {MASSAGES, PHOTOS, DISCRIPTION, NAMES, MaxCountPhotos } from '_/const.js';
const GetUserData = (id) => ({
    id,
    avatar: `img/avatar-${getRandomPositiveInteger(1, MaxCountPhotos)}.svg`,
    message: MASSAGES[getRandomPositiveInteger(0, MASSAGES.length - 1)],
    name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
});

const GetPhotoData = (id) => ({
    id,
    url: `photos/${id}.jpg`,
    despription: DISCRIPTION[getRandomPositiveInteger(0, DISCRIPTION.length - 1)],
    likes: getRandomPositiveInteger(CountLikes.MIN, CountLikes.MAX),
    comments: Array.from({ length: getRandomPositiveInteger(1, 6) }).map((value, index) => GetUserData(index + 1)),
});
const createPhotoArray = Array.from({ length: MaxCountPhotos }).map((value, index) => GetPhotoData(index + 1));
const photos = createPhotoArray(MaxCountPhotos);
export { photos }