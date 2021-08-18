import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IconCloud, IconMoon, IconRain, IconSun } from '../../../common/Icon';
import { WeatherContainer, Wrapper } from './style';

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

export default FilterBar;
