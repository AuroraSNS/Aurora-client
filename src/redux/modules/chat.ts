/* eslint-disable no-param-reassign */
import produce from 'immer';

import { IChatAction, IChatState, IRoom } from '../../interfaces/chat';

export const LOAD_ROOMS_REQUEST = 'LOAD_ROOMS_REQUEST' as const;
export const LOAD_ROOMS_SUCCESS = 'LOAD_ROOMS_SUCCESS' as const;
export const LOAD_ROOMS_FAILURE = 'LOAD_ROOMS_FAILURE' as const;

export const initialState: IChatState = {
    rooms: null,
    loadRoomsLoading: false,
    loadRoomsDone: false,
    loadRoomsError: null,
};

const reducer = (state = initialState, action: IChatAction) =>
    produce(state, (draft: IChatState) => {
        switch (action.type) {
            case LOAD_ROOMS_REQUEST:
                draft.loadRoomsLoading = true;
                draft.loadRoomsDone = false;
                draft.loadRoomsError = null;
                break;
            case LOAD_ROOMS_SUCCESS:
                draft.loadRoomsLoading = false;
                draft.loadRoomsDone = true;
                draft.rooms = action.data;
                break;
            case LOAD_ROOMS_FAILURE:
                draft.loadRoomsLoading = false;
                draft.loadRoomsError = action.error;
                break;
            default:
                break;
        }
    });

export const loadRoomsRequest = (token: string) => ({
    type: LOAD_ROOMS_REQUEST,
    token,
});

export const loadRoomsSuccess = (data: IRoom[]) => ({
    type: LOAD_ROOMS_SUCCESS,
    data,
});

export const loadRoomsFailure = (error: string) => ({
    type: LOAD_ROOMS_FAILURE,
    error,
});

export default reducer;
