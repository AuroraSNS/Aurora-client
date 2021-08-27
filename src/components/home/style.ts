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
`;
