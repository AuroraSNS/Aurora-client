/* eslint-disable no-param-reassign */
import produce from 'immer';
import { POST_REGISTER_MODAL_CLOSE, POST_REGISTER_MODAL_OPEN } from '../actions/modal';
import { ModalAction } from '../interfaces/act/modal';
import { ModalState } from '../interfaces/data/modal';

// initial state
export const initialState: ModalState = {
    isPostRegisterModalVisible: false,
};

const reducer = (state = initialState, action: ModalAction) =>
    produce(state, (draft: ModalState) => {
        switch (action.type) {
            case POST_REGISTER_MODAL_OPEN:
                draft.isPostRegisterModalVisible = true;
                break;
            case POST_REGISTER_MODAL_CLOSE:
                draft.isPostRegisterModalVisible = false;
                break;
            default:
                break;
        }
    });

export default reducer;
