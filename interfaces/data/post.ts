import { IAuth } from './user';

export interface IPost {
    id: string;
    auth: IAuth;
    mood: string;
    content: string;
    images: string[];
    commentCnt: number;
}

export interface IPostState {
    Posts: null | IPost[];
    hasMorePosts: boolean;
    loadAllPostsLoading: boolean;
    loadAllPostsDone: boolean;
    loadAllPostsError: null | string;
    loadUserPostsLoading: boolean;
    loadUserPostsDone: boolean;
    loadUserPostsError: null | string;
    addPostLoading: boolean;
    addPostDone: boolean;
    addPostError: null | string;
}
