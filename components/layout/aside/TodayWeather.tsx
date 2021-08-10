/* eslint-disable radix */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ITodayWeather } from '../../../interfaces/data';

const COORDS = 'coords';
const API_KEY = 'f5c65fa374871d6140493543f92cb9c6';

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
        const { latitude } = position.coords;
        const { longitude } = position.coords;
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

    const getWeather = (lat, lon) => {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                const tmp: ITodayWeather = {
                    icon: data.weather[0].icon,
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
                    <Title>오늘의 날씨</Title>
                    <Container>
                        {/* <img src={`http://openweathermap.org/img/wn/${weatherInfo?.icon}@2x.png`} alt="weatherIcon" /> */}
                        <svg width="57" height="67" viewBox="0 0 57 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M55.2422 46.4375L47.7188 42.7344L54.9141 40.3906C55.5046 40.1886 55.9907 39.7603 56.2654 39.1999C56.5401 38.6395 56.5809 37.9929 56.3789 37.4023C56.1769 36.8118 55.7486 36.3257 55.1882 36.051C54.6277 35.7763 53.9812 35.7355 53.3906 35.9375L41.6719 39.8984L35.5313 36.7344V30.2656L41.7656 27.1953L53.4844 31.1562C54.0749 31.3583 54.7215 31.3174 55.2819 31.0427C55.8423 30.768 56.2706 30.2819 56.4727 29.6914C56.6747 29.1009 56.6338 28.4543 56.3591 27.8939C56.0844 27.3335 55.5983 26.9051 55.0078 26.7031L47.8125 24.3594L55.3359 20.6563C55.613 20.5208 55.8606 20.3322 56.0647 20.101C56.2688 19.8699 56.4253 19.6009 56.5255 19.3092C56.6256 19.0176 56.6673 18.7091 56.6481 18.4013C56.629 18.0936 56.5495 17.7926 56.4141 17.5156C56.2786 17.2386 56.09 16.991 55.8589 16.7869C55.6277 16.5828 55.3587 16.4262 55.067 16.3261C54.7754 16.226 54.4669 16.1843 54.1592 16.2034C53.8514 16.2225 53.5504 16.3021 53.2734 16.4375L45.7266 20.1641L48.0703 12.9687C48.2464 12.3882 48.1905 11.7619 47.9144 11.2217C47.6383 10.6815 47.1634 10.2694 46.5897 10.0721C46.016 9.87482 45.3881 9.90766 44.8381 10.1638C44.2881 10.4199 43.8589 10.8792 43.6406 11.4453L39.6797 23.1641L33.1875 26.1875L30.8438 25.0156V17.9844L39.5391 9.3125C39.7576 9.09397 39.9309 8.83454 40.0492 8.54902C40.1675 8.2635 40.2283 7.95748 40.2283 7.64844C40.2283 7.33939 40.1675 7.03337 40.0492 6.74785C39.9309 6.46233 39.7576 6.2029 39.5391 5.98438C39.3205 5.76585 39.0611 5.5925 38.7756 5.47424C38.4901 5.35597 38.1841 5.2951 37.875 5.2951C37.2509 5.2951 36.6523 5.54304 36.2109 5.98438L30.8438 11.4453V3.03125C30.8438 2.40965 30.5968 1.81351 30.1573 1.37397C29.7178 0.93443 29.1216 0.6875 28.5 0.6875C27.8784 0.6875 27.2823 0.93443 26.8427 1.37397C26.4032 1.81351 26.1563 2.40965 26.1563 3.03125V11.4453L20.7891 6.05469C20.3477 5.61335 19.7491 5.36541 19.125 5.36541C18.5009 5.36541 17.9023 5.61335 17.4609 6.05469C17.0196 6.49602 16.7717 7.09461 16.7717 7.71875C16.7717 8.34289 17.0196 8.94148 17.4609 9.38281L26.1563 18.0547V25.0859L23.8125 26.2578L17.3203 23.0703L13.3594 11.3516C13.2679 11.0501 13.1167 10.7701 12.9146 10.5285C12.7125 10.2868 12.4638 10.0883 12.1833 9.94493C11.9028 9.80154 11.5962 9.71618 11.282 9.69394C10.9677 9.67171 10.6522 9.71305 10.3543 9.81551C10.0564 9.91796 9.78219 10.0794 9.54809 10.2902C9.314 10.5011 9.12481 10.7569 8.99182 11.0425C8.85884 11.3281 8.7848 11.6376 8.77413 11.9524C8.76345 12.2673 8.81636 12.5811 8.92969 12.875L11.2734 20.0703L3.82032 16.3438C3.54331 16.2083 3.24234 16.1288 2.9346 16.1097C2.62685 16.0906 2.31835 16.1323 2.02672 16.2324C1.73508 16.3325 1.46602 16.4891 1.2349 16.6932C1.00378 16.8972 0.815118 17.1449 0.679693 17.4219C0.544267 17.6989 0.464727 17.9999 0.445616 18.3076C0.426505 18.6153 0.468197 18.9238 0.56831 19.2155C0.668424 19.5071 0.824998 19.7762 1.02909 20.0073C1.23319 20.2384 1.48081 20.4271 1.75782 20.5625L9.28125 24.2656L2.08594 26.6094C1.78739 26.7094 1.51146 26.8673 1.27392 27.0739C1.03637 27.2806 0.841857 27.532 0.701481 27.8139C0.417979 28.3831 0.372203 29.0416 0.574224 29.6445C0.776244 30.2475 1.20951 30.7455 1.77871 31.029C2.34792 31.3125 3.00643 31.3583 3.60938 31.1562L15.3281 27.1953L21.4688 30.2656V36.7344L15.2344 39.8047L3.60938 35.8438C3.01886 35.6417 2.37227 35.6826 1.81186 35.9573C1.25145 36.232 0.823119 36.7181 0.621099 37.3086C0.419078 37.8991 0.459916 38.5457 0.734628 39.1061C1.00934 39.6665 1.49542 40.0949 2.08594 40.2969L9.28125 42.6406L1.75782 46.4375C1.19838 46.711 0.770498 47.1955 0.56831 47.7845C0.366123 48.3735 0.406188 49.0187 0.679693 49.5781C0.953197 50.1376 1.43774 50.5654 2.02672 50.7676C2.6157 50.9698 3.26088 50.9298 3.82032 50.6562L11.3672 46.9297L9.02344 54.125C8.84735 54.7056 8.90324 55.3318 9.17937 55.872C9.4555 56.4122 9.93035 56.8243 10.5041 57.0216C11.0778 57.2189 11.7056 57.1861 12.2556 56.93C12.8056 56.6739 13.2349 56.2145 13.4531 55.6484L17.4141 43.9297L23.8125 40.8125L26.1563 41.9844V49.0156L17.4609 57.6875C17.0196 58.1288 16.7717 58.7274 16.7717 59.3516C16.7717 59.9757 17.0196 60.5743 17.4609 61.0156C17.9023 61.457 18.5009 61.7049 19.125 61.7049C19.7491 61.7049 20.3477 61.457 20.7891 61.0156L26.1563 55.5547V63.9688C26.1563 64.5904 26.4032 65.1865 26.8427 65.626C27.2823 66.0656 27.8784 66.3125 28.5 66.3125C29.1216 66.3125 29.7178 66.0656 30.1573 65.626C30.5968 65.1865 30.8438 64.5904 30.8438 63.9688V55.5547L36.2109 60.9453C36.6523 61.3866 37.2509 61.6346 37.875 61.6346C38.4991 61.6346 39.0977 61.3866 39.5391 60.9453C39.9804 60.504 40.2283 59.9054 40.2283 59.2812C40.2283 58.6571 39.9804 58.0585 39.5391 57.6172L30.8438 48.9453V41.9141L33.1875 40.7422L39.6797 43.9297L43.6406 55.6484C43.8589 56.2145 44.2881 56.6739 44.8381 56.93C45.3881 57.1861 46.016 57.2189 46.5897 57.0216C47.1634 56.8243 47.6383 56.4122 47.9144 55.872C48.1905 55.3318 48.2464 54.7056 48.0703 54.125L45.7266 46.9297L53.2734 50.6562C53.8329 50.9298 54.4781 50.9698 55.067 50.7676C55.656 50.5654 56.1406 50.1376 56.4141 49.5781C56.6876 49.0187 56.7276 48.3735 56.5255 47.7845C56.3233 47.1955 55.8954 46.711 55.3359 46.4375H55.2422Z"
                                fill="#B9D8F6"
                            />
                        </svg>

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

const Wrapper = styled.section`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 135px;
    margin-top: 70px;
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 27px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    img {
        /* width: 60px; */
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    div:first-child {
        margin-bottom: 4px;
    }
    span {
        font-size: 12px;
        line-height: 15px;
    }
    span:first-child {
        color: #9ac6f0;
    }
    span:nth-child(2) {
        margin: 0 2px;
    }
    span:last-child {
        color: #ed9a9a;
    }
`;

export default TodayWeather;
