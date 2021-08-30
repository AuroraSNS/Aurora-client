/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
import React, { useEffect, useState } from 'react';
import { ITodayWeather } from '../../../../interfaces/data';
import { convertWeatherIcon } from '../../../../util/util';
import { Container, IconWeather, Wrapper } from './style';

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

    const handleGeoSucces = (position: any) => {
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
                        <IconWeather index={weatherInfo?.icon as number} />
                        <div className="content">
                            <div>{weatherInfo?.temp}&#8451;</div>
                            <div>
                                <span>{weatherInfo?.tempMin}&#8451;</span>
                                <span>/</span>
                                <span>{weatherInfo?.tempMax}&#8451;</span>
                            </div>
                        </div>
                    </Container>
                </>
            )}
        </Wrapper>
    );
};

export default TodayWeather;
