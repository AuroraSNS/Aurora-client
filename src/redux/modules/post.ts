/* eslint-disable no-param-reassign */
import produce from 'immer';
import { PostAction } from '../../interfaces/act/post';
import { IPost, IPostState, IWeatherStatistics } from '../../interfaces/data/post';

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

export const LOAD_ALL_STATISTICS_REQUEST = 'LOAD_ALL_STATISTICS_REQUEST' as const;
export const LOAD_ALL_STATISTICS_SUCCESS = 'LOAD_ALL_STATISTICS_SUCCESS' as const;
export const LOAD_ALL_STATISTICS_FAILURE = 'LOAD_ALL_STATISTICS_FAILURE' as const;

export const LOAD_USER_STATISTICS_REQUEST = 'LOAD_USER_STATISTICS_REQUEST' as const;
export const LOAD_USER_STATISTICS_SUCCESS = 'LOAD_USER_STATISTICS_SUCCESS' as const;
export const LOAD_USER_STATISTICS_FAILURE = 'LOAD_USER_STATISTICS_FAILURE' as const;

export const FILTER_WEATHER = 'FILTER_WEATHER' as const;

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST' as const;
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS' as const;
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE' as const;

export const REMOVE_LIKE_REQUEST = 'REMOVE_LIKE_REQUEST' as const;
export const REMOVE_LIKE_SUCCESS = 'REMOVE_LIKE_SUCCESS' as const;
export const REMOVE_LIKE_FAILURE = 'REMOVE_LIKE_FAILURE' as const;

// 초기 데이터 구조
export const initialState: IPostState = {
    Posts: [],
    statistics: null,
    filterList: [],
    hasMorePosts: true,
    loadAllPostsLoading: false,
    loadAllPostsDone: false,
    loadAllPostsError: null,
    loadUserPostsLoading: false,
    loadUserPostsDone: false,
    loadUserPostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    modifyPostLoading: false,
    modifyPostDone: false,
    modifyPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    loadAllStatisticsLoading: false,
    loadAllStatisticsDone: false,
    loadAllStatisticsError: null,
    loadUserStatisticsLoading: false,
    loadUserStatisticsDone: false,
    loadUserStatisticsError: null,
    likePostLoading: false,
    likePostDone: false,
    likePostError: null,
};

const reducer = (state = initialState, action: PostAction) =>
    produce(state, (draft: IPostState) => {
        switch (action.type) {
            case LOAD_ALL_POSTS_REQUEST:
                draft.loadAllPostsLoading = true;
                draft.loadAllPostsDone = false;
                draft.loadAllPostsError = null;
                break;
            case LOAD_ALL_POSTS_SUCCESS:
                draft.loadAllPostsLoading = false;
                draft.loadAllPostsDone = true;
                draft.Posts = action.page === 0 ? action.data : (draft.Posts as IPost[]).concat(action.data);
                draft.hasMorePosts = action.data.length === 10;
                break;
            case LOAD_ALL_POSTS_FAILURE:
                draft.loadAllPostsLoading = false;
                draft.loadAllPostsError = action.error;
                break;
            case LOAD_USER_POSTS_REQUEST:
                draft.loadUserPostsLoading = true;
                draft.loadUserPostsDone = false;
                draft.loadUserPostsError = null;
                break;
            case LOAD_USER_POSTS_SUCCESS:
                draft.loadUserPostsLoading = false;
                draft.loadUserPostsDone = true;
                draft.Posts = action.page === 0 ? action.data : (draft.Posts as IPost[]).concat(action.data);
                draft.hasMorePosts = action.data.length === 10;
                break;
            case LOAD_USER_POSTS_FAILURE:
                draft.loadUserPostsLoading = false;
                draft.loadUserPostsError = action.error;
                break;
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
            case ADD_POST_CLEAR:
                draft.addPostLoading = false;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case MODIFY_POST_REQUEST:
                draft.modifyPostLoading = true;
                draft.modifyPostDone = false;
                draft.modifyPostError = null;
                break;
            case MODIFY_POST_SUCCESS:
                draft.modifyPostLoading = false;
                draft.modifyPostDone = true;
                break;
            case MODIFY_POST_FAILURE:
                draft.modifyPostLoading = false;
                draft.modifyPostError = action.error;
                break;
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;
            case LOAD_ALL_STATISTICS_REQUEST:
                draft.loadAllStatisticsLoading = true;
                draft.loadAllStatisticsDone = false;
                draft.loadAllStatisticsError = null;
                break;
            case LOAD_ALL_STATISTICS_SUCCESS:
                draft.loadAllStatisticsLoading = false;
                draft.loadAllStatisticsDone = true;
                draft.statistics = action.data;
                break;
            case LOAD_ALL_STATISTICS_FAILURE:
                draft.loadAllStatisticsLoading = false;
                draft.loadAllStatisticsError = action.error;
                break;
            case LOAD_USER_STATISTICS_REQUEST:
                draft.loadUserStatisticsLoading = true;
                draft.loadUserStatisticsDone = false;
                draft.loadUserStatisticsError = null;
                break;
            case LOAD_USER_STATISTICS_SUCCESS:
                draft.loadUserStatisticsLoading = false;
                draft.loadUserStatisticsDone = true;
                draft.statistics = action.data;
                break;
            case LOAD_USER_STATISTICS_FAILURE:
                draft.loadUserStatisticsLoading = false;
                draft.loadUserStatisticsError = action.error;
                break;
            case FILTER_WEATHER:
                draft.filterList = action.data;
                break;
            case LIKE_POST_REQUEST:
                draft.likePostLoading = true;
                draft.likePostDone = false;
                draft.likePostError = null;
                break;
            case LIKE_POST_SUCCESS: {
                draft.likePostLoading = false;
                draft.likePostDone = true;
                const tmp = (draft.Posts as IPost[]).find((ele) => ele.id === action.postId);
                if (action.like) {
                    (tmp as IPost).likeCnt += 1;
                } else {
                    (tmp as IPost).likeCnt -= 1;
                }
                break;
            }
            case LIKE_POST_FAILURE:
                draft.likePostLoading = false;
                draft.likePostError = action.error;
                break;
            default:
                break;
        }
    });

// 액션 크리에이터
export const loadAllPostsRequest = (page: number, filter: string[]) => ({
    type: LOAD_ALL_POSTS_REQUEST,
    page,
    filter,
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

export const loadUserPostsRequest = (userId: number, page: number, filter: string[]) => ({
    type: LOAD_USER_POSTS_REQUEST,
    userId,
    page,
    filter,
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

export const loadAllStatisticsRequest = () => ({
    type: LOAD_ALL_STATISTICS_REQUEST,
});

export const loadAllStatisticsSuccess = (data: IWeatherStatistics) => ({
    type: LOAD_ALL_STATISTICS_SUCCESS,
    data,
});

export const loadAllStatisticsFailure = (error: string) => ({
    type: LOAD_ALL_STATISTICS_FAILURE,
    error,
});

export const loadUserStatisticsRequest = (userId: string) => ({
    type: LOAD_USER_STATISTICS_REQUEST,
    userId,
});

export const loadUserStatisticsSuccess = (data: IWeatherStatistics) => ({
    type: LOAD_USER_STATISTICS_SUCCESS,
    data,
});

export const loadUserStatisticsFailure = (error: string) => ({
    type: LOAD_USER_STATISTICS_FAILURE,
    error,
});

export const filterWeather = (data: string[]) => ({
    type: FILTER_WEATHER,
    data,
});

export const likePostRequest = (postId: number, like: boolean) => ({
    type: LIKE_POST_REQUEST,
    postId,
    like,
});

export const likePostSuccess = (postId: number, like: boolean) => ({
    type: LIKE_POST_SUCCESS,
    postId,
    like,
});

export const likePostFailure = (error: string) => ({
    type: LIKE_POST_FAILURE,
    error,
});

export default reducer;
