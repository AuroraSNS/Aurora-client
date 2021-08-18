/* eslint-disable radix */
import React, { useEffect, useState } from 'react';
import { ITodayWeather } from '../../../../interfaces/data';
import { convertWeatherIcon } from '../../../../util/util';
import {
    IconWeather0,
    IconWeather1,
    IconWeather2,
    IconWeather3,
    IconWeather4,
    IconWeather5,
} from '../../../common/Icon';
import { Container, Content, Wrapper } from './style';

const COORDS = 'coords';

const TodayWeather = () => {
    const [init, setInit] = useState(false);
    const [weatherInfo, setWeatherInfo] = useState<null | ITodayWeather>(null);

    useEffect(() => {
        loadCoords();
    }, []);

    const loadCoords = () => {
        const loadedCords = localStorage.getItem(COORDS);
        if (loadedCords === null) {
            renderWeatherData();
        } else {
            const parsedCoords = JSON.parse(loadedCords);
            getWeather(parsedCoords.latitude, parsedCoords.longitude);
        }
    };

    const handleGeoSucces = (position) => {
        const { latitude, longitude } = position.coords;
        const coordsObj = {
            latitude,
            longitude,
        };
        localStorage.setItem(COORDS, JSON.stringify(coordsObj));
        getWeather(latitude, longitude);
    };

    const handleGeoError = () => {
        console.log('Cant access geo location');
    };

    const renderWeatherData = () => {
        navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    };

    const getWeather = (lat: string, lon: string) => {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`;
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                const tmp: ITodayWeather = {
                    icon: convertWeatherIcon(data.weather[0].icon),
                    temp: parseInt(data.main.temp),
                    tempMin: parseInt(data.main.temp_min),
                    tempMax: parseInt(data.main.temp_max),
                };
                setWeatherInfo(tmp);
                setInit(true);
            });
    };

    return (
        <Wrapper>
            {init && (
                <>
                    <div className="title">오늘의 날씨</div>
                    <Container>
                        {weatherInfo?.icon === 0 && <IconWeather0 />}
                        {weatherInfo?.icon === 1 && <IconWeather1 />}
                        {weatherInfo?.icon === 2 && <IconWeather2 />}
                        {weatherInfo?.icon === 3 && <IconWeather3 />}
                        {weatherInfo?.icon === 4 && <IconWeather4 />}
                        {weatherInfo?.icon === 5 && <IconWeather5 />}
                        <Content>
                            <div>{weatherInfo?.temp}&#8451;</div>
                            <div>
                                <span>{weatherInfo?.tempMin}&#8451;</span>
                                <span>/</span>
                                <span>{weatherInfo?.tempMax}&#8451;</span>
                            </div>
                        </Content>
                    </Container>
                </>
            )}
        </Wrapper>
    );
};

export default TodayWeather;
