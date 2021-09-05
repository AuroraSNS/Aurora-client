/* eslint-disable import/namespace */
import {
    addRecommendFriendSuccess,
    loadFriendListFailure,
    loadFriendListSuccess,
    loadRecommendFriendSuccess,
} from '../redux/modules/friend';
import { IAuth } from './user';

export interface IFriendState {
    friendList: null | IAuth[];
    recommendFriendList: null | IAuth[];
    loadFriendListError: null | string;
}

export type IFriendAction =
    | ReturnType<typeof loadFriendListSuccess>
    | ReturnType<typeof loadFriendListFailure>
    | ReturnType<typeof loadRecommendFriendSuccess>
    | ReturnType<typeof addRecommendFriendSuccess>;
