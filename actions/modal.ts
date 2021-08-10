// 액션 상수
export const POST_REGISTER_MODAL_OPEN = 'POST_REGISTER_MODAL_OPEN' as const;
export const POST_REGISTER_MODAL_CLOSE = 'POST_REGISTER_MODAL_CLOSE' as const;

// 액션 크리에이터
export const postRegisterModalOpen = () => ({
    type: POST_REGISTER_MODAL_OPEN,
});

export const postRegisterModalClose = () => ({
    type: POST_REGISTER_MODAL_CLOSE,
});
