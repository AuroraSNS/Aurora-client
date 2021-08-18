import styled from 'styled-components';

export const Wrapper = styled.header`
    box-shadow: 0px 4px 2px rgba(119, 119, 119, 0.25);
    height: 80px;
    ${({ theme }) => theme.flexCenter}
    justify-content: space-between;
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    background: #ffffff;
`;

export const Logo = styled.div`
    /* border: 1px solid gray; */
    margin-left: 37px;
    flex: none;
    img {
        width: 150px;
    }
    @media screen and (max-width: 768px) {
        img {
            width: 100px;
        }
    }
`;
