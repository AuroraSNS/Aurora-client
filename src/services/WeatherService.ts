/* eslint-disable radix */
import { ITodayWeather } from '../interfaces';
import { convertWeatherIcon } from '../util/util';

const API_URL = 'https://api.openweathermap.org/data/2.5';
export const COORDS = 'coords';

export default class WeatherService {
    public static async getWeather(): Promise<ITodayWeather> {
        const [lat, lon] = await WeatherService.loadCoords();
        const response = await fetch(
            `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`,
        );
        const data = await response.json();
        const { main, weather } = data;
        const weatherInfo: ITodayWeather = {
            icon: convertWeatherIcon(weather[0].icon),
            temp: parseInt(main.temp),
            tempMin: parseInt(main.temp_min),
            tempMax: parseInt(main.temp_max),
        };
        return weatherInfo;
    }

    public static loadCoords = (): [string, string] => {
        const loadedCords = localStorage.getItem(COORDS) as string;
        const parsedCoords = JSON.parse(loadedCords);
        return [parsedCoords.latitude, parsedCoords.longitude];
    };
}
