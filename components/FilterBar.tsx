import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FILTER_WEATHER } from '../actions/post';

const FilterBar = () => {
    const dispatch = useDispatch();

    const selectWeather = useCallback((e) => {
        if (e.target.name === 'weather') {
            console.log(e.target.id);
        }
    }, []);

    return (
        <Wrapper>
            <div>보고싶은 날씨를 선택해보세요</div>
            <WeatherContainer onClick={selectWeather}>
                <label htmlFor="sun">
                    <svg
                        className="sun"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="14" cy="14" r="6" stroke="#E9E9E9" strokeWidth="2" />
                        <line x1="14" y1="1" x2="14" y2="4" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" />
                        <line x1="14" y1="24" x2="14" y2="27" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" />
                        <line x1="27" y1="14" x2="24" y2="14" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" />
                        <line x1="4" y1="14" x2="1" y2="14" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" />
                        <line
                            x1="6.12131"
                            y1="6.53564"
                            x2="3.99999"
                            y2="4.41432"
                            stroke="#E9E9E9"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path d="M24.1213 23.1213L22 21" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" />
                        <path d="M22.0001 7.12132L24.1214 5" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4.00003 24.1213L6.12135 22" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </label>
                <input type="checkbox" name="weather" id="sun" />
                <label htmlFor="cloud">
                    <svg
                        className="cloud"
                        width="29"
                        height="19"
                        viewBox="0 0 29 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.1594 9.38344C24.7597 0.0625692 10.3578 -2.13066 7.6908 6.09365C-1.91046 6.09365 0.223177 18 5.37278 18H24.7597C29.5602 18 29.0268 9.38344 23.1594 9.38344Z"
                            stroke="#E9E9E9"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </label>
                <input type="checkbox" name="weather" id="cloud" />
                <label htmlFor="rain">
                    <svg
                        className="rain"
                        width="29"
                        height="25"
                        viewBox="0 0 29 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.27815 6.86483C12.2406 -4.13514 23.2406 2.36484 23.2406 9.86483C28.2406 9.86482 28.7406 16.3648 25.2781 17.9243H6.27815C-0.759357 16.3648 -0.759399 7.36484 6.27815 6.86483ZM6.27815 6.86483C8.7406 6.68988 10.7406 8.36482 11.2406 9.86483"
                            stroke="#E9E9E9"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <line
                            x1="10.2458"
                            y1="14.766"
                            x2="6.48342"
                            y2="21.2388"
                            stroke="#E9E9E9"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <line
                            x1="15.4094"
                            y1="14.3537"
                            x2="10.3537"
                            y2="23.7926"
                            stroke="#E9E9E9"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <line
                            x1="20.1294"
                            y1="15.3671"
                            x2="16.3671"
                            y2="21.8399"
                            stroke="#E9E9E9"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </label>
                <input type="checkbox" name="weather" id="rain" />
                <label htmlFor="moon">
                    <svg
                        className="moon"
                        width="25"
                        height="26"
                        viewBox="0 0 25 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.1404 12.3353C24.1517 12.5493 24.1574 12.7648 24.1574 12.9816C24.1574 19.6524 18.7496 25.0603 12.0787 25.0603C5.40782 25.0603 0 19.6524 0 12.9816C0 6.83211 4.59543 1.756 10.5395 1C10.0169 1.69243 9.59348 2.46398 9.2905 3.29349C5.08038 4.50294 2 8.38251 2 12.9816C2 18.5479 6.51239 23.0603 12.0787 23.0603C17.3091 23.0603 21.609 19.076 22.1089 13.9769C22.8652 13.5316 23.5495 12.9772 24.1404 12.3353Z"
                            fill="#EFEFEF"
                        />
                        <path
                            d="M10.9708 1.90283C7.64717 7.99612 11.5247 17.413 23.1573 12.4276"
                            stroke="#EFEFEF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </label>
                <input type="checkbox" name="weather" id="moon" />
            </WeatherContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    flex: none;
    width: 610px;
    height: 55px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.85rem;
    // 테두리 그라이데이션
    border: double 0.08rem transparent;
    border-radius: 3.125em;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #ffbebe, #b6d8f8, #a18afc);
    background-origin: border-box;
    background-clip: content-box, border-box;
`;

const WeatherContainer = styled.div`
    /* flex: none; */
    /* border: 1px solid gray; */
    display: flex;
    align-items: center;
    width: 200px;
    input {
        display: none;
    }
    label {
        margin-right: 30px;
    }
    svg {
        cursor: pointer;
    }
    .sun {
        &:hover * {
            stroke: #ed9a9a;
        }
    }
    .cloud {
        &:hover * {
            stroke: #b1b0b0;
        }
    }
    .rain {
        &:hover * {
            stroke: #9ac6f0;
        }
    }
    .moon {
        &:hover * {
            stroke: #ac8de0;
            fill: '#AC8DE0';
        }
    }
`;

export default FilterBar;
