import shortid from 'shortid';
import faker from 'faker';

export const createSampleUser = () => ({
    id: shortid.generate(),
    name: faker.name.findName(),
    avator: faker.image.avatar(),
});

export const createSamplePosts = (n) => {
    const samplePosts = [];
    for (let i = 0; i < n; i += 1) {
        samplePosts.push(createSamplePost());
    }
    return samplePosts;
};

const createSamplePost = () => ({
    id: shortid.generate(),
    auth: createSampleUser(),
    weather: createRandomWeather(),
    content: faker.lorem.text(),
    image: createSampleImages(),
});

const createRandomWeather = () => {
    const weather = ['sun', 'cloud', 'rain', 'moon'];
    const k = Math.floor(Math.random() * 4);
    return weather[k];
};

const createSampleImages = () => {
    const sampleImages = [];
    const cnt = Math.floor(Math.random() * 6);
    for (let i = 0; i < cnt; i += 1) {
        sampleImages.push(faker.image.image());
    }
    return sampleImages;
};

export const sampleMe = {
    id: 1,
    email: 'test@test.com',
    name: '라이언',
    avator: 'images/profile-thumbnail.jpg',
};

export const samplePost = {
    id: 1,
    auto: {
        id: 1,
        name: '라이언',
        avator: 'images/profile-thumbnail.jpg',
    },
    weather: 'sun',
    content: '오늘부터 2박 3일 러시아 다녀옵니다~',
    image: ['https://placeimg.com/300/300/any', 'https://placeimg.com/300/300/any', 'https://placeimg.com/300/300/any'],
};
