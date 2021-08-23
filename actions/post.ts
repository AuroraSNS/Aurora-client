import { IPost } from '../interfaces/data/post';

// 액션 상수
export const LOAD_ALL_POSTS_REQUEST = 'LOAD_ALL_POSTS_REQUEST' as const;
export const LOAD_ALL_POSTS_SUCCESS = 'LOAD_ALL_POSTS_SUCCESS' as const;
export const LOAD_ALL_POSTS_FAILURE = 'LOAD_ALL_POSTS_FAILURE' as const;

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST' as const;
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS' as const;
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE' as const;

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST' as const;
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS' as const;
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE' as const;
export const ADD_POST_CLEAR = 'ADD_POST_CLEAR' as const;

export const MODIFY_POST_REQUEST = 'MODIFY_POST_REQUEST' as const;
export const MODIFY_POST_SUCCESS = 'MODIFY_POST_SUCCESS' as const;
export const MODIFY_POST_FAILURE = 'MODIFY_POST_FAILURE' as const;

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST' as const;
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS' as const;
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE' as const;

// export const FILTER_WEATHER = 'FILTER_WEATHER' as const;
// export const CHANGE_TIME = 'CHANGE_TIME' as const;

// export const LOAD_ALL_STATISTICS_REQUEST = 'LOAD_ALL_STATISTICS_REQUEST' as const;
// export const LOAD_ALL_STATISTICS_SUCCESS = 'LOAD_ALL_STATISTICS_SUCCESS' as const;
// export const LOAD_ALL_STATISTICS_FAILURE = 'LOAD_ALL_STATISTICS_FAILURE' as const;

// export const LOAD_STATISTICS_REQUEST = 'LOAD_STATISTICS_REQUEST' as const;
// export const LOAD_STATISTICS_SUCCESS = 'LOAD_STATISTICS_SUCCESS' as const;
// export const LOAD_STATISTICS_FAILURE = 'LOAD_STATISTICS_FAILURE' as const;

// export const LOAD_LIKE_POST_REQUEST = 'LOAD_LIKE_POST_REQUEST' as const;
// export const LOAD_LIKE_POST_SUCCESS = 'LOAD_LIKE_POST_SUCCESS' as const;
// export const LOAD_LIKE_POST_FAILURE = 'LOAD_LIKE_POST_FAILURE' as const;

// export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST' as const;
// export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS' as const;
// export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE' as const;

// 액션 크리에이터
export const loadAllPostsRequest = (page: number) => ({
    type: LOAD_ALL_POSTS_REQUEST,
    page,
});

export const loadAllPostsSuccess = (data: IPost[], page: number) => ({
    type: LOAD_ALL_POSTS_SUCCESS,
    data,
    page,
});

export const loadAllPostsFailure = (error: string) => ({
    type: LOAD_ALL_POSTS_FAILURE,
    error,
});

export const loadUserPostsRequest = (userId: number, page: number) => ({
    type: LOAD_USER_POSTS_REQUEST,
    userId,
    page,
});

export const loadUserPostsSuccess = (data: IPost[], page: number) => ({
    type: LOAD_USER_POSTS_SUCCESS,
    data,
    page,
});

export const loadUserPostsFailure = (error: string) => ({
    type: LOAD_USER_POSTS_FAILURE,
    error,
});

export const addPostRequest = (data: FormData) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addPostSuccess = () => ({
    type: ADD_POST_SUCCESS,
});

export const addPostFailure = (error: string) => ({
    type: ADD_POST_FAILURE,
    error,
});

export const addPostClear = () => ({
    type: ADD_POST_CLEAR,
});

export const removePostRequest = (postId: number) => ({
    type: REMOVE_POST_REQUEST,
    postId,
});

export const removePostSuccess = () => ({
    type: REMOVE_POST_SUCCESS,
});

export const removePostFailure = (error: string) => ({
    type: REMOVE_POST_FAILURE,
    error,
});
export const modifyPostRequest = (postId: number, data: FormData) => ({
    type: MODIFY_POST_REQUEST,
    postId,
    data,
});

export const modifyPostSuccess = () => ({
    type: MODIFY_POST_SUCCESS,
});

export const modifyPostFailure = (error: string) => ({
    type: MODIFY_POST_FAILURE,
    error,
});
