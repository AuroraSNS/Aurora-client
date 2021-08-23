import { IAuth } from './user';

export interface IComment {
    id: number;
    auth: IAuth;
    content: string;
}

export interface ICommentState {
    comment: IComment[] | null;
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
