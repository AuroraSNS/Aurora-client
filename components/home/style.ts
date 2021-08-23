import styled from 'styled-components';

export const PostCardList = styled.section`
    /* border: 1px solid gray; */
    width: 100%;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: auto;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
    margin-top: 25px;
    overflow: visible;
    @media screen and (max-width: 768px) {
        margin-top: 100px;
    }
    & > button {
        position: fixed;
        top: -30px;
        transition: top 0.5s;
        /* bottom: 0;s */
    }
    #to-top {
        cursor: pointer;
        width: 42px;
        height: 42px;
        background: #333;
        border-radius: 10px;
        position: fixed;
        right: 3vw;
        top: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            transform: rotate(90deg);
            * {
                fill: #fff;
            }
        }
    }
`;
