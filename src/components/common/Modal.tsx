import styled from 'styled-components';

type Props = {
    onClose: () => void;
    children: React.ReactNode;
};
const Modal = ({ onClose, children }: Props) => (
    <StyledModalOverlay>
        <StyledModal>
            <StyledModalCloseBtn onClick={onClose}>&times;</StyledModalCloseBtn>
            {children}
        </StyledModal>
    </StyledModalOverlay>
);

const StyledModalCloseBtn = styled.button`
    position: absolute;
    top: 14px;
    right: 14px;
    ${({ theme }) => theme.smbtn}
    font-weight: 800;
    color: #999;
    &:hover {
        color: #505050;
    }
`;

const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.7);
    animation: overlay-show 0.3s;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    @keyframes overlay-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    z-index: 999;
`;

const StyledModal = styled.div`
    margin: auto 0;
    position: relative;
    animation: modal-show 0.3s;
    @keyframes modal-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export default Modal;
