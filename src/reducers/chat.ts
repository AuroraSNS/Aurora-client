/* eslint-disable no-param-reassign */
import produce from 'immer';
import { LOAD_ROOMS_FAILURE, LOAD_ROOMS_REQUEST, LOAD_ROOMS_SUCCESS } from '../actions/chat';
import { IChatAction } from '../interfaces/act/chat';
import { IChatState } from '../interfaces/data/chat';

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

export default reducer;
