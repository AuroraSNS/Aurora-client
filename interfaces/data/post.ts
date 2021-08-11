import { IUser } from './user';

export interface IPost {
    id: string;
    auth: IUser;
    weather: string;
    content: string;
    image: string[];
}

export interface PostState {
    Posts: null | IPost[];
    loadFirstPostsLoading: boolean;
    loadFirstPostsDone: boolean;
    loadFirstPostsError: null | string;
    loadMorePostsLoading: boolean;
    loadMorePostsDone: boolean;
    loadMorePostsError: null | string;
}
