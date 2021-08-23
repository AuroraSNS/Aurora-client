import styled from 'styled-components';

export const Wrapper = styled.div`
    /* border: 1px solid gray; */
    flex: 1;
    position: relative;
    background-color: #f0f2f5;
    border-radius: 20px 0 0 20px;
    span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .prev {
        right: 97%;
    }
    .next {
        left: 97%;
    }
`;

export const Container = styled.div<{ idx: number; cnt: number }>`
    width: 90%;
    position: relative;
    overflow: hidden;
    height: 100%;
    /* border: 1px solid gray; */
    margin: 0 auto;
    ul {
        position: absolute;
        left: ${(props) => `-${props.idx * 100}%`};
        top: 50%;
        transform: translateY(-50%);
        width: ${(props) => `${props.cnt * 100}%`};
        display: flex;
        height: 100%;
        transition: left 0.5s ease-out;
    }
    li {
        width: calc(100% / ${(props) => `${props.cnt}`});
        /* border: 1px solid gray; */
        height: 100%;
        ${({ theme }) => theme.flexCenter}
    }
    img {
        max-width: 100%;
    }
`;
