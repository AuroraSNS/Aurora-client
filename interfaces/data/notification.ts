import { IAuth } from './user';

export interface INotification {
    id: number;
    auth: IAuth;
    content: string;
    time: string;
}
