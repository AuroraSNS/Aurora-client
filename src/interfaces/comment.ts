import { IAuth } from './user';
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
} from '../redux/modules/comment';

export interface IComment {
    id: number;
    auth: IAuth;
    content: string;
}

export interface ICommentState {
    comment: IComment[] | null;
    commentCnt: number;
    loadCommentLoading: boolean;
    loadCommentDone: boolean;
    loadCommentError: null | string;
    addCommentLoading: boolean;
    addCommentDone: boolean;
    addCommentError: null | string;
    modifyCommentLoading: boolean;
    modifyCommentDone: boolean;
    modifyCommentError: null | string;
    removeCommentLoading: boolean;
    removeCommentDone: boolean;
    removeCommentError: null | string;
}

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
