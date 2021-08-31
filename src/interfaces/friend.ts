/* eslint-disable import/namespace */
import { loadFriendListFailure, loadFriendListSuccess } from '../redux/modules/friend';
import { IAuth } from './user';

export interface IFriendState {
    friendList: null | IAuth[];
    loadFriendListError: null | string;
}

export type IFriendAction = ReturnType<typeof loadFriendListSuccess> | ReturnType<typeof loadFriendListFailure>;
