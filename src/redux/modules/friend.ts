/* eslint-disable no-param-reassign */
import produce from 'immer';

import { IFriendAction, IFriendState } from '../../interfaces/friend';
import { IAuth } from '../../interfaces/user';

export const LOAD_FRIEND_LIST_REQUEST = 'LOAD_FRIEND_LIST_REQUEST' as const;
export const LOAD_FRIEND_LIST_SUCCESS = 'LOAD_FRIEND_LIST_SUCCESS' as const;
export const LOAD_FRIEND_LIST_FAILURE = 'LOAD_FRIEND_LIST_FAILURE' as const;

export const LOAD_RECOMMEND_FRIEND_REQUEST = 'LOAD_RECOMMEND_FRIEND_REQUEST' as const;
export const LOAD_RECOMMEND_FRIEND_SUCCESS = 'LOAD_RECOMMEND_FRIEND_SUCCESS' as const;

export const ADD_FRIEND_REQUEST = 'ADD_FRIEND_REQUEST' as const;

export const ADD_RECOMMEND_FRIEND_REQUEST = 'ADD_RECOMMEND_FRIEND_REQUEST' as const;
export const ADD_RECOMMEND_FRIEND_SUCCESS = 'ADD_RECOMMEND_FRIEND_SUCCESS' as const;

export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST' as const;

export const initialState: IFriendState = {
    friendList: null,
    recommendFriendList: null,
    loadFriendListError: null,
};

const reducer = (state = initialState, action: IFriendAction) =>
    produce(state, (draft: IFriendState) => {
        switch (action.type) {
            case LOAD_FRIEND_LIST_SUCCESS:
                draft.friendList = action.data;
                draft.loadFriendListError = null;
                break;
            case LOAD_FRIEND_LIST_FAILURE:
                draft.loadFriendListError = action.error;
                break;
            case LOAD_RECOMMEND_FRIEND_SUCCESS:
                draft.recommendFriendList = action.data;
                break;
            case ADD_RECOMMEND_FRIEND_SUCCESS:
                if (draft.recommendFriendList) {
                    draft.recommendFriendList = draft.recommendFriendList?.filter((ele) => ele.id !== action.friendId);
                }
                break;
            default:
                break;
        }
    });

export const loadFriendListRequest = (token: string) => ({
    type: LOAD_FRIEND_LIST_REQUEST,
    token,
});

export const loadFriendListSuccess = (data: IAuth[]) => ({
    type: LOAD_FRIEND_LIST_SUCCESS,
    data,
});

export const loadFriendListFailure = (error: string) => ({
    type: LOAD_FRIEND_LIST_FAILURE,
    error,
});

export const loadRecommendFriendRequest = () => ({
    type: LOAD_RECOMMEND_FRIEND_REQUEST,
});

export const loadRecommendFriendSuccess = (data: IAuth[]) => ({
    type: LOAD_RECOMMEND_FRIEND_SUCCESS,
    data,
});

export const addFriendRequest = (friendId: number) => ({
    type: ADD_FRIEND_REQUEST,
    friendId,
});

export const addRecommendFriendRequest = (friendId: number) => ({
    type: ADD_RECOMMEND_FRIEND_REQUEST,
    friendId,
});
export const addRecommendFriendSuccess = (friendId: number) => ({
    type: ADD_RECOMMEND_FRIEND_SUCCESS,
    friendId,
});

export const removeFriendRequest = (friendId: number) => ({
    type: REMOVE_FRIEND_REQUEST,
    friendId,
});

export default reducer;
