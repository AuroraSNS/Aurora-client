import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterWeather, loadAllPostsRequest } from '../../../../actions/post';
import { RootState } from '../../../../reducers';

import { IconCloud, IconMoon, IconRain, IconSun } from '../../../common/Icon';
import { WeatherContainer, Wrapper } from './style';

const FilterBar = () => {
    const dispatch = useDispatch();
    const { filterList } = useSelector((state: RootState) => state.post);

    const onClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if ((e.target as HTMLInputElement).name === 'weather') {
                if (filterList.includes((e.target as HTMLInputElement).value)) {
                    const newSelectWeather = filterList.filter((v) => v !== (e.target as HTMLInputElement).value);
                    dispatch(filterWeather(newSelectWeather));
                } else {
                    dispatch(filterWeather([...filterList, (e.target as HTMLInputElement).value]));
                }
            }
        },
        [filterList],
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
