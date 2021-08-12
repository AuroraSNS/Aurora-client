import { IAuth } from './user';

export interface IComment {
    id: string;
    auth: IAuth;
    content: string;
}
