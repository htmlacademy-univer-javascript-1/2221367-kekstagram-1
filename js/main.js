const NAMES = ['Анастасия', 'Мария', 'Александр', 'Артем', 'Юлия'];
const MASSAGES = ['Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DISCRIPTION = ['Любовь в каждом цветочке.',
    'Радость моя!',
    'Погода решила взгрустнуть.',
    'Привет моя грусть, я теперь не боюсь.',
];
const Max_Count_Photos = 25;

const CountLikes = {
    Min: 15,
    Max: 200
};

const getRandomPositiveInteger = (a, b) => {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};
const checkStringLength = (string, length) => string.length <= length;
checkStringLength();

const UserData = id => ({
    id,
    avatar: `img/avatar-${getRandomPositiveInteger(1, Max_Count_Photos)}.svg`,
    message: MASSAGES[getRandomPositiveInteger(0, MASSAGES.length - 1)],
    name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
});

const PhotoData = (id) => ({
    id,
    url: `photos/${id}.jpg`,
    despription: DISCRIPTION[getRandomPositiveInteger(0, DISCRIPTION.length - 1)],
    likes: getRandomPositiveInteger(CountLikes.Min, CountLikes.Max),
    comments: Array.from({ length: getRandomPositiveInteger(1, 6) }).map((value, index) => UserData(index + 1)),
});

const PHOTOS = Array.from({ length: Max_Count_Photos }).map((value, index) => PhotoData(index + 1));
PhotoData(20).comments;