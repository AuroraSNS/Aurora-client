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
} from '../actions/post';

import { PostAction } from '../interfaces/act/post';
import { IPost, IPostState } from '../interfaces/data/post';

// 초기 데이터 구조
export const initialState: IPostState = {
    Posts: [],
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
            default:
                break;
        }
    });

export default reducer;
