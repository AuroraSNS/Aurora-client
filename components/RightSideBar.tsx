import styled from 'styled-components';

import Weather from './weather.tsx';
import WeatherStatistics from './WeatherStatistics';

const RightSideBar = ({ isMain }) => (
    <Wrapper>
        <WeatherStatistics isMain={isMain} />
        <Weather />
    </Wrapper>
);

const Wrapper = styled.div`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export default RightSideBar;
