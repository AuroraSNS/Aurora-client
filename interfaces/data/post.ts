import { IAuth } from './user';

export interface IWeatherStatistics {
    sun: number;
    cloud: number;
    rain: number;
    moon: number;
}

export interface IPost {
    id: number;
    auth: IAuth;
    mood: string;
    content: string;
    images: string[];
    commentCnt: number;
    likeCnt: number;
}

export interface IPostState {
    Posts: null | IPost[];
    statistics: IWeatherStatistics | null;
    filterList: string[];
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
    modifyPostLoading: boolean;
    modifyPostDone: boolean;
    modifyPostError: null | string;
    removePostLoading: boolean;
    removePostDone: boolean;
    removePostError: null | string;
    loadAllStatisticsLoading: boolean;
    loadAllStatisticsDone: boolean;
    loadAllStatisticsError: null | string;
    loadUserStatisticsLoading: boolean;
    loadUserStatisticsDone: boolean;
    loadUserStatisticsError: null | string;
    likePostLoading: boolean;
    likePostDone: boolean;
    likePostError: null | string;
}
