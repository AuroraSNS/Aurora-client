import { postRegisterModalClose, postRegisterModalOpen } from '../../actions/modal';

export type ModalAction = ReturnType<typeof postRegisterModalOpen> | ReturnType<typeof postRegisterModalClose>;
