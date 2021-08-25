import { IAuth } from './user';

export interface IRoom {
    id: number;
    user: IAuth;
    lastMessage: string;
    lastTimeStamp: string;
}

export interface IContent {
    roomId: number;
    sender: number;
    message: string;
    timeStamp: string;
}

export interface IChatState {
    rooms: null | IRoom[];
    loadRoomsLoading: boolean;
    loadRoomsDone: boolean;
    loadRoomsError: null | string;
}
