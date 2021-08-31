import faker from 'faker';
import { IContent, IRoom } from '../interfaces/chat';
import { IAuth } from '../interfaces/user';

export const createSampleMe = () => ({
    id: new Date().getTime(),
    name: faker.name.firstName(),
    avatar: '',
    email: faker.internet.email(),
    bio: faker.lorem.word(),
});

export const createSampleUser = (): IAuth => ({
    id: new Date().getTime(),
    name: faker.name.firstName(),
    avatar: '',
});

export const createSamplePosts = (n: number) => {
    const samplePosts = [];
    for (let i = 0; i < n; i += 1) {
        samplePosts.push(createSamplePost());
    }
    return samplePosts;
};

export const createSampleComments = (n: number) => {
    const sampleComments = [];
    for (let i = 0; i < n; i += 1) {
        sampleComments.push(createSampleComment());
    }
    return sampleComments;
};

export const createSampleAllNotification = () => ({
    chatting: Math.floor(Math.random() * 10),
    notification: Math.floor(Math.random() * 10),
    friend: Math.floor(Math.random() * 10),
});

export const createSampleNotifications = (n: number) => {
    const sampleNotifications = [];
    for (let i = 0; i < n; i += 1) {
        sampleNotifications.push(createSampleNotification());
    }
    return sampleNotifications;
};

export const createSampleRooms = (n: number) => {
    const sampleRooms = [];
    for (let i = 0; i < n; i += 1) {
        sampleRooms.push(createSampleRoom(i));
    }
    return sampleRooms;
};

export const createSampleContents = (id1: number, id2: number) => {
    const sampleContents = [];
    let randomNumber = Math.floor(Math.random() * (30 - 5 + 1)) + 5;
    const user = [id1, id2];
    for (let i = 0; i < randomNumber; i += 1) {
        sampleContents.push(createSampleContent(user[Math.round(Math.random())]));
    }
    return sampleContents;
};

const createSampleContent = (id: number): IContent => ({
    id: 1,
    sender: createSampleUser(),
    message: faker.random.words(),
    timeStamp: new Date().toLocaleTimeString(),
});

const createSampleRoom = (roomId: number): IRoom => ({
    roomId,
    user: createSampleUser(),
    lastMessage: faker.random.words(),
    lastTimeStamp: new Date().toLocaleTimeString(),
});

const createSampleNotification = () => ({
    id: new Date().getTime(),
    auth: createSampleUser(),
    content: faker.random.words(),
    time: new Date().toLocaleTimeString(),
});

const createSampleComment = () => ({
    id: new Date().getTime(),
    auth: createSampleUser(),
    content: faker.random.words(),
});

const createSamplePost = () => ({
    id: new Date().getTime(),
    auth: createSampleUser(),
    mood: createRandomWeather(),
    content: faker.lorem.text(),
    images: createSampleImages(),
    commentCnt: createRandomNumber(),
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

const createRandomNumber = () => Math.floor(Math.random() * 10);

export const sampleMe = {
    id: 1,
    email: 'test@test.com',
    name: '라이언',
    avatar: 'https://placeimg.com/300/300/any',
    bio: '',
};

export const samplePost = {
    id: 1,
    auto: {
        id: 1,
        name: '라이언',
        avatar: '/images/defaultProfile.png',
    },
    weather: 'sun',
    content: '오늘부터 2박 3일 러시아 다녀옵니다~',
    image: ['https://placeimg.com/300/300/any', 'https://placeimg.com/300/300/any', 'https://placeimg.com/300/300/any'],
};
