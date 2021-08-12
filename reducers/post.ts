/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    LOAD_FIRST_POSTS_REQUEST,
    LOAD_FIRST_POSTS_SUCCESS,
    LOAD_FIRST_POSTS_FAILURE,
    LOAD_MORE_POSTS_REQUEST,
    LOAD_MORE_POSTS_SUCCESS,
    LOAD_MORE_POSTS_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_CLEAR,
} from '../actions/post';

import { PostAction } from '../interfaces/act/post';
import { IPost, PostState } from '../interfaces/data/post';

// 초기 데이터 구조
export const initialState: PostState = {
    Posts: [],
    loadFirstPostsLoading: false,
    loadFirstPostsDone: false,
    loadFirstPostsError: null,
    loadMorePostsLoading: false,
    loadMorePostsDone: false,
    loadMorePostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
};

const reducer = (state = initialState, action: PostAction) =>
    produce(state, (draft: PostState) => {
        switch (action.type) {
            case LOAD_FIRST_POSTS_REQUEST:
                draft.loadFirstPostsLoading = true;
                draft.loadFirstPostsDone = false;
                draft.loadFirstPostsError = null;
                break;
            case LOAD_FIRST_POSTS_SUCCESS:
                draft.loadFirstPostsLoading = false;
                draft.loadFirstPostsDone = true;
                draft.Posts = action.data;
                break;
            case LOAD_FIRST_POSTS_FAILURE:
                draft.loadFirstPostsLoading = false;
                draft.loadFirstPostsError = action.error;
                break;
            case LOAD_MORE_POSTS_REQUEST:
                draft.loadMorePostsLoading = true;
                draft.loadMorePostsDone = false;
                draft.loadMorePostsError = null;
                break;
            case LOAD_MORE_POSTS_SUCCESS:
                draft.loadMorePostsLoading = false;
                draft.loadMorePostsDone = true;
                draft.Posts = (draft.Posts as IPost[]).concat(action.data);
                break;
            case LOAD_MORE_POSTS_FAILURE:
                draft.loadMorePostsLoading = false;
                draft.loadMorePostsError = action.error;
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
