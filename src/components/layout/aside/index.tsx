import React from 'react';
import RecommendFriend from './recommendFriend';
import SearchBar from '../../common/searchBar';
import { Wrapper } from './style';
import TodayWeather from './todayWeather';
import WeatherStatistics from './weatherStatistics';

type Props = {
    isMain: boolean;
};

const RightSideBar = ({ isMain }: Props) => (
    <Wrapper>
        <SearchBar />
        <WeatherStatistics isMain={isMain} />
        <RecommendFriend />
        <TodayWeather />
    </Wrapper>
);

export default RightSideBar;
