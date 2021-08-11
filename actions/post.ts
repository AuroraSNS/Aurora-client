import { IPost } from '../interfaces/data/post';

// 액션 상수
export const LOAD_FIRST_POSTS_REQUEST = 'LOAD_FIRST_POSTS_REQUEST' as const;
export const LOAD_FIRST_POSTS_SUCCESS = 'LOAD_FIRST_POSTS_SUCCESS' as const;
export const LOAD_FIRST_POSTS_FAILURE = 'LOAD_FIRST_POSTS_FAILURE' as const;

export const LOAD_MORE_POSTS_REQUEST = 'LOAD_MORE_POSTS_REQUEST' as const;
export const LOAD_MORE_POSTS_SUCCESS = 'LOAD_MORE_POSTS_SUCCESS' as const;
export const LOAD_MORE_POSTS_FAILURE = 'LOAD_MORE_POSTS_FAILURE' as const;

// export const FIRST_LOAD_POST_REQUEST = 'FIRST_LOAD_POST_REQUEST' as const;
// export const FIRST_LOAD_POST_SUCCESS = 'FIRST_LOAD_POST_SUCCESS' as const;
// export const FIRST_LOAD_POST_FAILURE = 'FIRST_LOAD_POST_FAILURE' as const;

// export const MORE_LOAD_POST_REQUEST = 'MORE_LOAD_POST_REQUEST' as const;
// export const MORE_LOAD_POST_SUCCESS = 'MORE_LOAD_POST_SUCCESS' as const;
// export const MORE_LOAD_POST_FAILURE = 'MORE_LOAD_POST_FAILURE' as const;

// export const ADD_POST_REQUEST = 'ADD_POST_REQUEST' as const;
// export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS' as const;
// export const ADD_POST_FAILURE = 'ADD_POST_FAILURE' as const;

// export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST' as const;
// export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS' as const;
// export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE' as const;

// export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST' as const;
// export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS' as const;
// export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE' as const;

// export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST' as const;
// export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS' as const;
// export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE' as const;

// export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST' as const;
// export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS' as const;
// export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE' as const;

// export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST' as const;
// export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS' as const;
// export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE' as const;

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
export const loadFirstPostsRequest = () => ({
    type: LOAD_FIRST_POSTS_REQUEST,
});

export const loadFirstPostsSuccess = (data: IPost[]) => ({
    type: LOAD_FIRST_POSTS_SUCCESS,
    data,
});

export const loadFirstPostsFailure = (error: string) => ({
    type: LOAD_FIRST_POSTS_FAILURE,
    error,
});

export const loadMorePostsRequest = (lastPostId: number) => ({
    type: LOAD_MORE_POSTS_REQUEST,
    lastPostId,
});

export const loadMorePostsSuccess = (data: IPost[]) => ({
    type: LOAD_MORE_POSTS_SUCCESS,
    data,
});

export const loadMorePostsFailure = (error: string) => ({
    type: LOAD_MORE_POSTS_FAILURE,
    error,
});
