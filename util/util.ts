/* eslint-disable no-useless-escape */
import { keyframes } from 'styled-components';

export const convertWeatherIcon = (icon: string): number => {
    const iconNumber = Number(icon.substring(0, 2));
    if (iconNumber === 1) return 0;
    if (iconNumber === 2) return 1;
    if (iconNumber === 9 || iconNumber === 10) return 3;
    if (iconNumber === 11) return 4;
    if (iconNumber === 13) return 5;
    return 2;
};

export const upWeatherStick = (h: number) => keyframes`
    from {
        height: 0;
    }
    to {
        height: ${h}%;
    }
`;

export const getUrlParameter = (key: string) => {
    let name = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp(`[\\?&]${name}=([^&#]*)`);

    let results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
