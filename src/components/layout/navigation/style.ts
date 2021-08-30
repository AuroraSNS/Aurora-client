import styled from 'styled-components';

export const Tap = styled.a<{ selected: string; name: string }>`
    /* border: 1px solid gray; */
    margin-left: 50px;
    display: flex;
    align-items: center;
    ${({ theme }) => theme.textStyles.H16}
    color: ${({ selected, name, theme }) => selected === name && theme.colors.moon};
    .icon {
        ${({ theme }) => theme.flexCenter};
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin-right: 22px;
        background: #f0f2f5;
        div {
            background-image: url('/images/aurora_icon.png');
            background-repeat: no-repeat;
        }
    }
    .home {
        width: 28px;
        height: 24px;
        background-position: -151px -63px;
    }
    .chat {
        width: 27px;
        height: 20px;
        background-position: -189px -66px;
    }
    .noti {
        width: 23px;
        height: 26px;
        background-position: -226px -64px;
    }
    .friend {
        width: 27px;
        height: 24px;
        background-position: -256px -64px;
    }
    &:hover {
        color: ${({ theme }) => theme.colors.moon};
        .icon {
            background: ${({ theme }) => theme.colors.gradient};
        }
        .home {
            background-position: -11px -63px;
        }
        .chat {
            background-position: -48px -68px;
        }
        .noti {
            background-position: -84px -64px;
        }
        .friend {
            background-position: -114px -66px;
        }
    }
`;

export const Navbar = styled.nav`
    /* border: 1px solid black; */
    width: 200px;
    position: fixed;
    top: 130px;
    ul {
        display: flex;
        flex-direction: column;
        li:not(:last-child) a {
            margin-bottom: 37px;
        }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 70px;
        top: unset;
        bottom: 0;
        z-index: 10;
        background: #fff;
        padding: 20px 50px;
        ul {
            ${({ theme }) => theme.flexCenter}
            flex-direction: row;
            width: inherit;
            justify-content: space-between;
            ${Tap} {
                margin-bottom: 0px !important;
                color: transparent;
            }
        }
    }
`;
