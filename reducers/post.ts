/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_CLEAR,
    LOAD_ALL_POSTS_FAILURE,
    LOAD_ALL_POSTS_REQUEST,
    LOAD_ALL_POSTS_SUCCESS,
    LOAD_USER_POSTS_FAILURE,
    LOAD_USER_POSTS_REQUEST,
    LOAD_USER_POSTS_SUCCESS,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
    REMOVE_POST_FAILURE,
    MODIFY_POST_REQUEST,
    MODIFY_POST_SUCCESS,
    MODIFY_POST_FAILURE,
    LOAD_ALL_STATISTICS_REQUEST,
    LOAD_ALL_STATISTICS_SUCCESS,
    LOAD_ALL_STATISTICS_FAILURE,
} from '../actions/post';

import { PostAction } from '../interfaces/act/post';
import { IPost, IPostState } from '../interfaces/data/post';

// 초기 데이터 구조
export const initialState: IPostState = {
    Posts: [],
    allStatistics: null,
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
                draft.allStatistics = action.data;
                break;
            case LOAD_ALL_STATISTICS_FAILURE:
                draft.loadAllStatisticsLoading = false;
                draft.loadAllStatisticsError = action.error;
                break;
            default:
                break;
        }
    });

export default reducer;
