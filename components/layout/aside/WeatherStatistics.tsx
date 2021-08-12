import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { IconCloud, IconMoon, IconRain, IconSun } from '../../Icon';
import ToolTip from '../../ToolTip';
import { upWeatherStick } from '../../../util/util';

type Props = {
    isMain?: boolean;
};
const SampleStatistics = { sun: 67, cloud: 23, rain: 53, moon: 46 };
const WeatherStatistics = ({ isMain }: Props) => {
    const { Statistics } = useSelector((state: RootState) => state.post);

    return (
        <Wrapper>
            <Title>My Firends Weather</Title>
            <Container
                sun={SampleStatistics.sun}
                cloud={SampleStatistics.cloud}
                rain={SampleStatistics.rain}
                moon={SampleStatistics.moon}
            >
                <ToolTip message={`${SampleStatistics.sun}%`} wh={25}>
                    <div>
                        <div className="stick">
                            <span className="stick-sun" />
                        </div>
                        <IconSun />
                    </div>
                </ToolTip>
                <ToolTip message={`${SampleStatistics.cloud}%`} wh={25}>
                    <div>
                        <div className="stick">
                            <span className="stick-cloud" />
                        </div>
                        <IconCloud />
                    </div>
                </ToolTip>
                <ToolTip message={`${SampleStatistics.rain}%`} wh={25}>
                    <div>
                        <div className="stick">
                            <span className="stick-rain" />
                        </div>
                        <IconRain />
                    </div>
                </ToolTip>
                <ToolTip message={`${SampleStatistics.moon}%`} wh={25}>
                    <div>
                        <div className="stick">
                            <span className="stick-moon" />
                        </div>
                        <IconMoon />
                    </div>
                </ToolTip>
            </Container>
        </Wrapper>
    );
};
WeatherStatistics.defaultProps = {
    isMain: false,
};

const Wrapper = styled.section`
    /* border: 1px solid gray; */
    width: 190px;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`;

const Title = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
`;

const Container = styled.div<{
    sun: number;
    cloud: number;
    rain: number;
    moon: number;
}>`
    display: flex;
    justify-content: space-between;
    div {
        /* border: 1px solid gray; */
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }
    .stick {
        /* border: 1px solid gray; */
        width: 16px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-bottom: 13px;
        span {
            display: block;
            width: 16px;
            background-color: #f8cbcb;
            border-radius: 30px;
        }
        .stick-sun {
            background-color: #f8cbcb;
            animation: ${(props) => upWeatherStick(props.sun)} 1s linear forwards;
        }
        .stick-cloud {
            background-color: #efefef;
            animation: ${(props) => upWeatherStick(props.cloud)} 1s linear forwards;
        }
        .stick-rain {
            background-color: #b9d8f6;
            animation: ${(props) => upWeatherStick(props.rain)} 1s linear forwards;
        }
        .stick-moon {
            background-color: #d3bafc;
            animation: ${(props) => upWeatherStick(props.moon)} 1s linear forwards;
        }
    }
`;

export default WeatherStatistics;
