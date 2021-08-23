import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 720px;
    height: 96px;
    background: #ffffff;
    box-shadow: 5px 5px 15px rgba(156, 156, 156, 0.25);
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 28px 46px 30px 38px;
    margin-top: 50px;
    span {
        ${({ theme }) => theme.textStyles.P14}
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 575px;
        height: 38px;
        background: #f0f2f5;
        border-radius: 30px;
        padding-left: 24px;
    }
    &:hover {
        background-color: rgba(128, 128, 128, 0.2);
    }
    @media screen and (max-width: 768px) {
        position: fixed;
        top: 30px;
        box-shadow: none;
        border-radius: 0;
        z-index: 10;
    }
`;

export const Avatar = styled.img`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 16px;
`;
