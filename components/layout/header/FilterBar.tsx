import styled from 'styled-components';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FILTER_WEATHER } from '../../../actions/post';
import { IconCloud, IconMoon, IconRain, IconSun } from '../../Icon';

const FilterBar = () => {
    const dispatch = useDispatch();

    const [selectWeather, setSelectWeather] = useState<Array<string>>([]);

    const onClick = useCallback(
        (e: any) => {
            if (e.target.name === 'weather') {
                if (selectWeather.includes(e.target.value)) {
                    const newSelectWeather = selectWeather.filter((v) => v !== e.target.value);
                    setSelectWeather(newSelectWeather);
                } else {
                    setSelectWeather((prev) => [...prev, e.target.value]);
                }
            }
        },
        [selectWeather],
    );
    console.log(selectWeather);

    return (
        <Wrapper>
            <div>보고싶은 날씨를 선택해보세요</div>
            <WeatherContainer onClick={onClick}>
                <input type="checkbox" name="weather" id="sun" value="sun" />
                <label htmlFor="sun">
                    <IconSun />
                </label>
                <input type="checkbox" name="weather" id="cloud" value="cloud" />
                <label htmlFor="cloud">
                    <IconCloud />
                </label>
                <input type="checkbox" name="weather" id="rain" value="rain" />
                <label htmlFor="rain">
                    <IconRain />
                </label>
                <input type="checkbox" name="weather" id="moon" value="moon" />
                <label htmlFor="moon">
                    <IconMoon />
                </label>
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
    @media screen and (max-width: 1240px) {
        display: none;
    }
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
        * {
            stroke: #e9e9e9;
        }
        &:hover * {
            stroke: #ed9a9a;
        }
    }
    input#sun:checked + label * {
        stroke: #ed9a9a;
    }
    .cloud {
        * {
            stroke: #e9e9e9;
        }
        &:hover * {
            stroke: #b1b0b0;
        }
    }
    input#cloud:checked + label * {
        stroke: #b1b0b0;
    }
    .rain {
        * {
            stroke: #e9e9e9;
        }
        &:hover * {
            stroke: #9ac6f0;
        }
    }
    input#rain:checked + label * {
        stroke: #9ac6f0;
    }
    .moon {
        * {
            stroke: #e9e9e9;
            fill: '#e9e9e9';
        }
        &:hover * {
            stroke: #ac8de0;
            fill: '#AC8DE0';
        }
    }
    input#moon:checked + label * {
        stroke: #ac8de0;
        fill: '#AC8DE0';
    }
`;

export default FilterBar;
