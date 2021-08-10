import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { IconCloud, IconMoon, IconRain, IconSun } from '../../Icon';

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
                <div>
                    <div className="stick">
                        <span className="stick-sun" />
                    </div>
                    <IconSun />
                </div>
                <div>
                    <div className="stick">
                        <span className="stick-cloud" />
                    </div>
                    <IconCloud />
                </div>
                <div>
                    <div className="stick">
                        <span className="stick-rain" />
                    </div>
                    <IconRain />
                </div>
                <div>
                    <div className="stick">
                        <span className="stick-moon" />
                    </div>
                    <IconMoon />
                </div>
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
            height: ${(props) => `${props.sun}%`};
            background-color: #f8cbcb;
        }
        .stick-cloud {
            height: ${(props) => `${props.cloud}%`};
            background-color: #efefef;
        }
        .stick-rain {
            height: ${(props) => `${props.rain}%`};
            background-color: #b9d8f6;
        }
        .stick-moon {
            height: ${(props) => `${props.moon}%`};
            background-color: #d3bafc;
        }
    }
`;

export default WeatherStatistics;
