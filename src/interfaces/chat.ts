import { IAuth } from './user';
import { loadRoomsFailure, loadRoomsRequest, loadRoomsSuccess } from '../redux/modules/chat';

export interface IRoom {
    roomId: number;
    user: IAuth;
    lastMessage: string;
    lastTimeStamp: string;
}

export interface IContent {
    id: number;
    sender: IAuth;
    message: string;
    timeStamp: string;
}
export interface ISendMsg {
    roomId: number;
    message: string;
}
export interface IRecvMsg {
    id: number;
    sender: IAuth;
    message: string;
    timeStamp: string;
}

export interface IChatState {
    rooms: null | IRoom[];
    loadRoomsLoading: boolean;
    loadRoomsDone: boolean;
    loadRoomsError: null | string;
}

export type IChatAction =
    | ReturnType<typeof loadRoomsRequest>
    | ReturnType<typeof loadRoomsSuccess>
    | ReturnType<typeof loadRoomsFailure>;
