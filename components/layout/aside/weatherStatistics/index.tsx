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
    const { allStatistics } = useSelector((state: RootState) => state.post);

    return (
        <Wrapper>
            <div className="title">My Firends Weather</div>
            <Container
                sun={allStatistics.sun}
                cloud={allStatistics.cloud}
                rain={allStatistics.rain}
                moon={allStatistics.moon}
            >
                <ToolTip message={`${allStatistics.sun}%`} wh={31}>
                    <div>
                        <div className="stick">
                            <span className="stick-sun" />
                        </div>
                        <IconSun />
                    </div>
                </ToolTip>
                <ToolTip message={`${allStatistics.cloud}%`} wh={25}>
                    <div>
                        <div className="stick">
                            <span className="stick-cloud" />
                        </div>
                        <IconCloud />
                    </div>
                </ToolTip>
                <ToolTip message={`${allStatistics.rain}%`} wh={25}>
                    <div>
                        <div className="stick">
                            <span className="stick-rain" />
                        </div>
                        <IconRain />
                    </div>
                </ToolTip>
                <ToolTip message={`${allStatistics.moon}%`} wh={25}>
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
