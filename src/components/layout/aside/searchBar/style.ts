import styled from 'styled-components';

export const Wrapper = styled.div`
    /* border: 1px solid gray; */
    width: 186px;
    height: 30px;
    position: relative;
    margin-top: 50px;
    .search {
        background: url('/images/aurora_icon.png') no-repeat -19px -170px;
        color: transparent;
        width: 10px;
        height: 12px;
    }
    .searchList {
        position: absolute;
        background: white;
        width: 100%;
        top: 0px;
        left: 0;
        padding: 40px 20px 10px 20px;
        z-index: 2;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(117, 117, 117, 0.25);
        & > div {
            display: flex;
            align-items: center;
            span {
                ${({ theme }) => theme.textStyles.H12};
                margin-left: 10px;
            }
            margin-bottom: 10px;
        }
        .user {
            cursor: pointer;
            & :hover {
                background: rgba(128, 128, 128, 0.1);
            }
        }

        div {
            ${({ theme }) => theme.textStyles.P12};
        }
        .icon-wrapper {
            width: 36px;
            height: 36px;
            background: ${({ theme }) => theme.colors.gradient};
            border-radius: 50%;
            ${({ theme }) => theme.flexCenter};
        }
        .search-big {
            background: url('/images/aurora_icon.png') no-repeat -383px -169px;
            width: 15px;
            height: 17px;
        }
    }
    .searchBar {
        position: absolute;
        z-index: 3;
        height: 100%;
        display: flex;
        align-items: center;
        background-color: #f0f2f5;
        border-radius: 20px;
        padding: 0 16px;
    }
    input {
        ${({ theme }) => theme.textStyles.P12}
        width: 100%;
        height: 30px;
        padding: 7px;
        background-color: transparent;
    }
`;
