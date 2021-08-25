import { FormEvent } from 'react';

export interface IMessage {
    roomId: number;
    sender: string;
    message: string;
    timeStamp: string;
}
export interface IOnSubmit {
    (e: FormEvent<HTMLFormElement>): void;
}

export interface ISetState {
    (e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface ITodayWeather {
    icon: number;
    temp: number;
    tempMin: number;
    tempMax: number;
}
