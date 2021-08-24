import { css } from 'styled-components';

const margins = {
    sm: '.5rem',
    base: '1rem',
    lg: '2rem',
    xl: '3rem',
};

const paddings = {
    sm: '.5rem',
    base: '1rem',
    lg: '2rem',
    xl: '3rem',
};

const fonts = {
    family: {
        base: `'Noto Sans KR', sans-serif`,
        title: `'Merriweather', serif`,
    },
    size: {
        sm: '1.4rem',
        base: '1.6rem',
        lg: '2rem',
        xl: '2.5rem',
        title: '6rem',
    },
    weight: {
        light: 100,
        normal: 400,
        bold: 700,
    },
};

const colors = {
    black: '#151d26',
    white: '#ffffff',
    sun: '#f8cbcb',
    cloud: '#b1b0b0',
    rain: '#b9d8f6',
    moon: '#d3bafc',
    gradient: 'linear-gradient(106.76deg, #d3bafc 3.84%, #b9d8f6 89.38%)',
    gradient2: 'linear-gradient(106.83deg, #d3bafc 0%, #f8cbcb 100%)',
};

const size = {
    mobile: '425px',
    tablet: '768px',
    desktop: '1440px',
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
    mobile: `@media only screen and (max-width: ${size.mobile})`,
    tablet: `@media only screen and (max-width: ${size.tablet})`,
    desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

// 테마에 따라 다른 값을 갖는 색상 값입니다
const lightThemeColors = {
    ...colors,
    primary: '#333',
    secondary: '#fff',
    tertiary: '#808080',
};

const darkThemeColors = {
    ...colors,
    primary: '#fff',
    secondary: '#333',
    tertiary: '#d4d0c4',
};

// 테마와 관련없이 공통으로 사용되는 변수들입니다
const defalutTheme = {
    margins,
    paddings,
    fonts,
    device,
};

const borderGradient = css`
    border: solid 1px transparent;
    background-origin: border-box;
    background-clip: content-box, border-box;
`;

const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const scroll = css`
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #f0f2f5;
        border-radius: 20px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

const smbtn = css`
    width: 29px;
    height: 29px;
    background: #f0f2f5;
    border-radius: 10px;
    ${({ theme }) => theme.flexCenter}
`;

const textStyles = {
    H18: css`
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
    `,
    H16: css`
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
    `,
    H14: css`
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    `,
    H12: css`
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
    `,
    P16: css`
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
    `,
    P14: css`
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
    `,
    P12: css`
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
    `,
    P10: css`
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
    `,
    Md: css`
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
    `,
    Sm: css`
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
    `,
};

// 각 테마는 공통 변수와 함께, 각기 다른 색상 값들을 갖습니다.
const darkTheme = {
    ...defalutTheme,
    colors: darkThemeColors,
};

const lightTheme = {
    ...defalutTheme,
    colors: lightThemeColors,
    borderGradient,
};

export default {
    // lightTheme,
    // darkTheme,
    borderGradient,
    flexCenter,
    colors,
    scroll,
    smbtn,
    textStyles,
};
