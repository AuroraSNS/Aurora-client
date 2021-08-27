import { loadRoomsFailure, loadRoomsRequest, loadRoomsSuccess } from '../../actions/chat';

export type IChatAction =
    | ReturnType<typeof loadRoomsRequest>
    | ReturnType<typeof loadRoomsSuccess>
    | ReturnType<typeof loadRoomsFailure>;
