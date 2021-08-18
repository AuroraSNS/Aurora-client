import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => theme.textStyles.P14}
    ${({ theme }) => theme.flexCenter}
    flex: 1;
    max-width: 610px;
    margin-right: 10px;
    height: 55px;

    justify-content: space-evenly;
    border-radius: 3.125em;

    ${({ theme }) => theme.borderGradient}
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #ffbebe, #b6d8f8, #a18afc);

    @media screen and (max-width: 768px) {
        background-image: none;
        div:first-child {
            display: none;
        }
    }
`;

export const WeatherContainer = styled.div`
    /* border: 1px solid gray; */
    ${({ theme }) => theme.flexCenter}
    justify-content: space-between;
    width: 200px;
    input {
        display: none;
    }
    svg {
        cursor: pointer;
        * {
            stroke: #e9e9e9;
        }
    }
    #moon-icon path {
        fill: #e9e9e9;
    }

    #sun-icon:hover * {
        stroke: #ed9a9a;
    }
    #cloud-icon:hover * {
        stroke: #b1b0b0;
    }
    #cloud-rain:hover * {
        stroke: #9ac6f0;
    }
    #cloud-moon:hover * {
        fill: #ac8de0;
    }
    input#sun:checked + label * {
        stroke: #ed9a9a;
    }
    input#cloud:checked + label * {
        stroke: #b1b0b0;
    }
    input#rain:checked + label * {
        stroke: #9ac6f0;
    }
    input#moon:checked + label * {
        fill: #ac8de0;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: space-evenly;
    }
`;
