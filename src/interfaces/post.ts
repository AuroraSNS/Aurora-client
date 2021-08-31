import { IAuth } from './user';
import {
    addPostClear,
    addPostComment,
    addPostFailure,
    addPostRequest,
    addPostSuccess,
    filterWeather,
    likePostFailure,
    likePostRequest,
    likePostSuccess,
    loadAllPostsFailure,
    loadAllPostsRequest,
    loadAllPostsSuccess,
    loadAllStatisticsFailure,
    loadAllStatisticsRequest,
    loadAllStatisticsSuccess,
    loadUserPostsFailure,
    loadUserPostsRequest,
    loadUserPostsSuccess,
    loadUserStatisticsFailure,
    loadUserStatisticsRequest,
    loadUserStatisticsSuccess,
    modifyPostFailure,
    modifyPostRequest,
    modifyPostSuccess,
    removePostFailure,
    removePostRequest,
    removePostSuccess,
} from '../redux/modules/post';

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

export type PostAction =
    | ReturnType<typeof loadAllPostsRequest>
    | ReturnType<typeof loadAllPostsSuccess>
    | ReturnType<typeof loadAllPostsFailure>
    | ReturnType<typeof loadUserPostsRequest>
    | ReturnType<typeof loadUserPostsSuccess>
    | ReturnType<typeof loadUserPostsFailure>
    | ReturnType<typeof addPostRequest>
    | ReturnType<typeof addPostSuccess>
    | ReturnType<typeof addPostFailure>
    | ReturnType<typeof addPostClear>
    | ReturnType<typeof removePostRequest>
    | ReturnType<typeof removePostSuccess>
    | ReturnType<typeof removePostFailure>
    | ReturnType<typeof modifyPostRequest>
    | ReturnType<typeof modifyPostSuccess>
    | ReturnType<typeof modifyPostFailure>
    | ReturnType<typeof loadAllStatisticsRequest>
    | ReturnType<typeof loadAllStatisticsSuccess>
    | ReturnType<typeof loadAllStatisticsFailure>
    | ReturnType<typeof loadUserStatisticsRequest>
    | ReturnType<typeof loadUserStatisticsSuccess>
    | ReturnType<typeof loadUserStatisticsFailure>
    | ReturnType<typeof filterWeather>
    | ReturnType<typeof likePostRequest>
    | ReturnType<typeof likePostSuccess>
    | ReturnType<typeof likePostFailure>
    | ReturnType<typeof addPostComment>;
