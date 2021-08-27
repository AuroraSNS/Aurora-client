import {
    addPostClear,
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
} from '../../actions/post';

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
    | ReturnType<typeof likePostFailure>;
