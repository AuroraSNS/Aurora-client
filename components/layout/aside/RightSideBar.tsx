import React from 'react';
import styled from 'styled-components';
import RecommendFriend from './RecommendFriend';
import SearchBar from './SearchBar';

import TodayWeather from './TodayWeather';
import WeatherStatistics from './WeatherStatistics';

const RightSideBar = ({ isMain }) => (
    <Wrapper>
        <SearchBar />
        <WeatherStatistics isMain />
        <RecommendFriend />
        <TodayWeather />
    </Wrapper>
);

const Wrapper = styled.div`
    flex: none;
    width: 295px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    right: 0;
    @media screen and (max-width: 1240px) {
        display: none;
    }
`;

export default RightSideBar;
