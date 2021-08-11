import {
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
    | ReturnType<typeof loadMorePostsFailure>;
