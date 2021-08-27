import styled, { keyframes } from 'styled-components';

const Loading = () => (
    <Overlay>
        <LoadingAnimation />
    </Overlay>
);

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.6);
    ${({ theme }) => theme.flexCenter}
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingAnimation = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid black;
    background: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;

export default Loading;
