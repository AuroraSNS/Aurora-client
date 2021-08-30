import { loadRoomsFailure, loadRoomsRequest, loadRoomsSuccess } from '../../redux/modules/chat';

export type IChatAction =
    | ReturnType<typeof loadRoomsRequest>
    | ReturnType<typeof loadRoomsSuccess>
    | ReturnType<typeof loadRoomsFailure>;
