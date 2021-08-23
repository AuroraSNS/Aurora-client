import {
    addCommentRequest,
    addCommentSuccess,
    addCommentFailure,
    loadCommentRequest,
    loadCommentSuccess,
    loadCommentFailure,
    modifyCommentRequest,
    modifyCommentSuccess,
    modifyCommentFailure,
    removeCommentRequest,
    removeCommentSuccess,
    removeCommentFailure,
} from '../../actions/comment';

export type ICommentAction =
    | ReturnType<typeof addCommentRequest>
    | ReturnType<typeof addCommentSuccess>
    | ReturnType<typeof addCommentFailure>
    | ReturnType<typeof loadCommentRequest>
    | ReturnType<typeof loadCommentSuccess>
    | ReturnType<typeof loadCommentFailure>
    | ReturnType<typeof modifyCommentRequest>
    | ReturnType<typeof modifyCommentSuccess>
    | ReturnType<typeof modifyCommentFailure>
    | ReturnType<typeof removeCommentRequest>
    | ReturnType<typeof removeCommentSuccess>
    | ReturnType<typeof removeCommentFailure>;
