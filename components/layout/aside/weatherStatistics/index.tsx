import React from 'react';
import { useSelector } from 'react-redux';

import ToolTip from '../../../common/ToolTip';
import { Container, Wrapper } from './style';
import { RootState } from '../../../../reducers';
import { IconCloud, IconMoon, IconRain, IconSun } from '../../../common/Icon';

type Props = {
    isMain?: boolean;
};
const WeatherStatistics = ({ isMain }: Props) => {
    const { statistics } = useSelector((state: RootState) => state.post);

    return (
        <Wrapper>
            <div className="title">My Firends Weather</div>
            <Container sun={statistics.sun} cloud={statistics.cloud} rain={statistics.rain} moon={statistics.moon}>
                <ToolTip message={`${statistics.sun}%`} wh={31}>
                    <div>
                        <div className="stick">
                            <span className="stick-sun" />
                        </div>
                        <IconSun />
                    </div>
                </ToolTip>
                <ToolTip message={`${statistics.cloud}%`} wh={31}>
                    <div>
                        <div className="stick">
                            <span className="stick-cloud" />
                        </div>
                        <IconCloud />
                    </div>
                </ToolTip>
                <ToolTip message={`${statistics.rain}%`} wh={31}>
                    <div>
                        <div className="stick">
                            <span className="stick-rain" />
                        </div>
                        <IconRain />
                    </div>
                </ToolTip>
                <ToolTip message={`${statistics.moon}%`} wh={31}>
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
