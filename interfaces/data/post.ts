import { IAuth } from './user';

export interface IPost {
    id: string;
    auth: IAuth;
    mood: string;
    content: string;
    image: string[];
    commentCnt: number;
}

export interface PostState {
    Posts: null | IPost[];
    loadFirstPostsLoading: boolean;
    loadFirstPostsDone: boolean;
    loadFirstPostsError: null | string;
    loadMorePostsLoading: boolean;
    loadMorePostsDone: boolean;
    loadMorePostsError: null | string;
    addPostLoading: boolean;
    addPostDone: boolean;
    addPostError: null | string;
}
