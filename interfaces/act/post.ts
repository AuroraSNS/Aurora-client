import {
    addPostClear,
    addPostFailure,
    addPostRequest,
    addPostSuccess,
    loadFirstPostsFailure,
    loadFirstPostsRequest,
    loadFirstPostsSuccess,
    loadMorePostsFailure,
    loadMorePostsRequest,
    loadMorePostsSuccess,
} from '../../actions/post';

export type PostAction =
    | ReturnType<typeof loadFirstPostsRequest>
    | ReturnType<typeof loadFirstPostsSuccess>
    | ReturnType<typeof loadFirstPostsFailure>
    | ReturnType<typeof loadMorePostsRequest>
    | ReturnType<typeof loadMorePostsSuccess>
    | ReturnType<typeof loadMorePostsFailure>
    | ReturnType<typeof addPostRequest>
    | ReturnType<typeof addPostSuccess>
    | ReturnType<typeof addPostFailure>
    | ReturnType<typeof addPostClear>;
