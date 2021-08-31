/* eslint-disable no-param-reassign */
import produce from 'immer';

import { IFriendAction, IFriendState } from '../../interfaces/friend';
import { IAuth } from '../../interfaces/user';

export const LOAD_FRIEND_LIST_REQUEST = 'LOAD_FRIEND_LIST_REQUEST' as const;
export const LOAD_FRIEND_LIST_SUCCESS = 'LOAD_FRIEND_LIST_SUCCESS' as const;
export const LOAD_FRIEND_LIST_FAILURE = 'LOAD_FRIEND_LIST_FAILURE' as const;

export const ADD_FRIEND_REQUEST = 'ADD_FRIEND_REQUEST' as const;

export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST' as const;

export const initialState: IFriendState = {
    friendList: null,
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

export const addFriendRequest = (friendId: number) => ({
    type: ADD_FRIEND_REQUEST,
    friendId,
});

export const removeFriendRequest = (friendId: number) => ({
    type: REMOVE_FRIEND_REQUEST,
    friendId,
});

export default reducer;
