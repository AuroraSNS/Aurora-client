import {
    addPostClear,
    addPostFailure,
    addPostRequest,
    addPostSuccess,
    loadAllPostsFailure,
    loadAllPostsRequest,
    loadAllPostsSuccess,
    loadUserPostsFailure,
    loadUserPostsRequest,
    loadUserPostsSuccess,
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
    | ReturnType<typeof addPostClear>;
