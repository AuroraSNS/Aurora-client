import { IRoom } from '../interfaces/data/chat';

export const LOAD_ROOMS_REQUEST = 'LOAD_ROOMS_REQUEST' as const;
export const LOAD_ROOMS_SUCCESS = 'LOAD_ROOMS_SUCCESS' as const;
export const LOAD_ROOMS_FAILURE = 'LOAD_ROOMS_FAILURE' as const;

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
