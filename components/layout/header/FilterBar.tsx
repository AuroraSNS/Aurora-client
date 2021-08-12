import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

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
    flex: 1;
    max-width: 610px;
    margin-right: 10px;
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
    @media screen and (max-width: 768px) {
        background-image: none;
        div:first-child {
            display: none;
        }
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
            fill: #e9e9e9;
        }
        &:hover * {
            fill: #ac8de0;
        }
    }
    input#moon:checked + label * {
        fill: #ac8de0;
    }
    @media screen and (max-width: 768px) {
        margin-left: 10px;
        width: 100%;
        justify-content: space-evenly;
    }
`;

export default FilterBar;
