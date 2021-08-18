import React from 'react';
import { useSelector } from 'react-redux';

import ToolTip from '../../../common/ToolTip';
import { Container, Wrapper } from './style';
import { RootState } from '../../../../reducers';
import { IconCloud, IconMoon, IconRain, IconSun } from '../../../common/Icon';

type Props = {
    isMain?: boolean;
};
const SampleStatistics = { sun: 67, cloud: 23, rain: 53, moon: 46 };
const WeatherStatistics = ({ isMain }: Props) => {
    const { Statistics } = useSelector((state: RootState) => state.post);

    return (
        <Wrapper>
            <div className="title">My Firends Weather</div>
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

export default WeatherStatistics;
