import { IComment } from '../interfaces/data/comment';

export const LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST' as const;
export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS' as const;
export const LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE' as const;

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST' as const;
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS' as const;
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE' as const;

export const MODIFY_COMMENT_REQUEST = 'MODIFY_COMMENT_REQUEST' as const;
export const MODIFY_COMMENT_SUCCESS = 'MODIFY_COMMENT_SUCCESS' as const;
export const MODIFY_COMMENT_FAILURE = 'MODIFY_COMMENT_FAILURE' as const;

export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST' as const;
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS' as const;
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE' as const;

export const loadCommentRequest = (postId: number) => ({
    type: LOAD_COMMENT_REQUEST,
    postId,
});

export const loadCommentSuccess = (data: { comments: IComment[]; commentCnt: number }) => ({
    type: LOAD_COMMENT_SUCCESS,
    data,
});

export const loadCommentFailure = (error: string) => ({
    type: LOAD_COMMENT_FAILURE,
    error,
});

export const addCommentRequest = (postId: number, content: string) => ({
    type: ADD_COMMENT_REQUEST,
    postId,
    content,
});

export const addCommentSuccess = () => ({
    type: ADD_COMMENT_SUCCESS,
});

export const addCommentFailure = (error: string) => ({
    type: ADD_COMMENT_FAILURE,
    error,
});

export const modifyCommentRequest = (commentId: number, content: string) => ({
    type: MODIFY_COMMENT_REQUEST,
    commentId,
    content,
});

export const modifyCommentSuccess = () => ({
    type: MODIFY_COMMENT_SUCCESS,
});

export const modifyCommentFailure = (error: string) => ({
    type: MODIFY_COMMENT_FAILURE,
    error,
});

export const removeCommentRequest = (commentId: number) => ({
    type: REMOVE_COMMENT_REQUEST,
    commentId,
});

export const removeCommentSuccess = () => ({
    type: REMOVE_COMMENT_SUCCESS,
});

export const removeCommentFailure = (error: string) => ({
    type: REMOVE_COMMENT_FAILURE,
    error,
});
