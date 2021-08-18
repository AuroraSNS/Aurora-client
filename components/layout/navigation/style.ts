import styled from 'styled-components';

export const Tap = styled.a<{ selected: string; name: string }>`
    /* border: 1px solid gray; */
    margin: auto;
    width: 110px;
    display: flex;
    align-items: center;
    span {
        ${({ theme }) => theme.textStyles.H16}
        color: ${({ selected, name, theme }) => selected === name && theme.colors.moon};
    }
    svg {
        padding: 8px 6px;
        border-radius: 10px;
        margin-right: 22px;
        background: ${({ selected, name, theme }) => (selected === name ? theme.colors.gradient : '#f0f2f5')};
        path {
            fill: ${({ selected, name, theme }) => selected === name && theme.colors.white};
        }
    }
    &:hover {
        span {
            color: #d3bafc;
        }
        svg {
            background: ${({ theme }) => theme.colors.gradient};
            path {
                fill: white;
            }
        }
    }
`;

export const Navbar = styled.nav`
    /* border: 1px solid black; */
    flex: none;
    width: 200px;
    align-items: center;
    position: fixed;
    margin-top: 50px;
    ul {
        display: flex;
        flex-direction: column;
        li:not(:last-child) a {
            margin-bottom: 37px;
        }
    }
    @media screen and (max-width: 768px) {
        bottom: 0;
        width: 100%;
        z-index: 10;
        background-color: white;
        ul {
            ${({ theme }) => theme.flexCenter}
            width: 100%;
            justify-content: space-evenly;
            ${Tap} {
                margin-bottom: 0px !important;
                height: 70px;
                width: 40px;
                span {
                    display: none;
                }
                svg {
                    margin: 0;
                }
            }
        }
    }
`;
