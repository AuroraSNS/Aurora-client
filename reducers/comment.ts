/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    LOAD_COMMENT_FAILURE,
    LOAD_COMMENT_REQUEST,
    LOAD_COMMENT_SUCCESS,
    REMOVE_COMMENT_REQUEST,
    REMOVE_COMMENT_SUCCESS,
    REMOVE_COMMENT_FAILURE,
    MODIFY_COMMENT_REQUEST,
    MODIFY_COMMENT_SUCCESS,
    MODIFY_COMMENT_FAILURE,
} from '../actions/comment';
import { ICommentAction } from '../interfaces/act/comment';
import { ICommentState } from '../interfaces/data/comment';

// 초기 데이터 구조
export const initialState: ICommentState = {
    comment: null,
    loadCommentLoading: false,
    loadCommentDone: false,
    loadCommentError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    modifyCommentLoading: false,
    modifyCommentDone: false,
    modifyCommentError: null,
    removeCommentLoading: false,
    removeCommentDone: false,
    removeCommentError: null,
};

const reducer = (state = initialState, action: ICommentAction) =>
    produce(state, (draft: ICommentState) => {
        switch (action.type) {
            case LOAD_COMMENT_REQUEST:
                draft.loadCommentLoading = true;
                draft.loadCommentDone = false;
                draft.loadCommentError = null;
                draft.comment = null;
                break;
            case LOAD_COMMENT_SUCCESS:
                draft.loadCommentLoading = false;
                draft.loadCommentDone = true;
                draft.comment = action.data;
                break;
            case LOAD_COMMENT_FAILURE:
                draft.loadCommentLoading = false;
                draft.loadCommentError = action.error;
                break;
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS:
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;
            case MODIFY_COMMENT_REQUEST:
                draft.modifyCommentLoading = true;
                draft.modifyCommentDone = false;
                draft.modifyCommentError = null;
                break;
            case MODIFY_COMMENT_SUCCESS:
                draft.modifyCommentLoading = false;
                draft.modifyCommentDone = true;
                break;
            case MODIFY_COMMENT_FAILURE:
                draft.modifyCommentLoading = false;
                draft.modifyCommentError = action.error;
                break;
            case REMOVE_COMMENT_REQUEST:
                draft.removeCommentLoading = true;
                draft.removeCommentDone = false;
                draft.removeCommentError = null;
                break;
            case REMOVE_COMMENT_SUCCESS:
                draft.removeCommentLoading = false;
                draft.removeCommentDone = true;
                break;
            case REMOVE_COMMENT_FAILURE:
                draft.removeCommentLoading = false;
                draft.removeCommentError = action.error;
                break;
            default:
                break;
        }
    });

export default reducer;
