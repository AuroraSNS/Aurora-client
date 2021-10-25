/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
import React, { useEffect, useState } from 'react';
import { ITodayWeather } from '../../../../interfaces';
import WeatherService, { COORDS } from '../../../../services/WeatherService';
import { Container, IconWeather, Wrapper } from './style';

const TodayWeather = () => {
    const [weatherInfo, setWeatherInfo] = useState<null | ITodayWeather>(null);

    const getWeather = async () => {
        const data = await WeatherService.getWeather();
        setWeatherInfo(data);
    };

    useEffect(() => {
        function handleGeoSucces(position: any) {
            const { latitude, longitude } = position.coords;
            localStorage.setItem(COORDS, JSON.stringify({ latitude, longitude }));
            getWeather();
        }
        if (!localStorage.getItem(COORDS)) {
            navigator.geolocation.getCurrentPosition(handleGeoSucces);
        } else {
            getWeather();
        }
    }, []);

    if (!weatherInfo) return <div>날씨 불러오는 중...</div>;
    return (
        <Wrapper>
            <div className="title">오늘의 날씨</div>
            <Container>
                <IconWeather index={weatherInfo.icon} />
                <div className="content">
                    <div>{weatherInfo.temp}&#8451;</div>
                    <div>
                        <span>{weatherInfo.tempMin}&#8451;</span>
                        <span>/</span>
                        <span>{weatherInfo.tempMax}&#8451;</span>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default TodayWeather;
