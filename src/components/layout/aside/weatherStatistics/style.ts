import styled from 'styled-components';
import { upWeatherStick } from '../../../../util/util';

export const Wrapper = styled.section`
    /* border: 1px solid gray; */
    width: 190px;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    .title {
        ${({ theme }) => theme.textStyles.H6};
        text-align: center;
        margin-bottom: 30px;
    }
`;

export const Container = styled.div<{
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
            border-radius: 30px;
        }
        .stick-sun {
            background: ${({ theme }) => theme.colors.sun};
            animation: ${(props) => upWeatherStick(props.sun)} 1s linear forwards;
        }
        .stick-cloud {
            background: ${({ theme }) => theme.colors.cloud};
            animation: ${(props) => upWeatherStick(props.cloud)} 1s linear forwards;
        }
        .stick-rain {
            background: ${({ theme }) => theme.colors.rain};
            animation: ${(props) => upWeatherStick(props.rain)} 1s linear forwards;
        }
        .stick-moon {
            background: ${({ theme }) => theme.colors.moon};
            animation: ${(props) => upWeatherStick(props.moon)} 1s linear forwards;
        }
    }
    .icon {
        ${({ theme }) => theme.flexCenter};
        width: 30px;
        height: 30px;
        .sun {
            background: url('images/aurora_icon.png') no-repeat -11px -110px;
            width: 28px;
            height: 28px;
        }
        .cloud {
            background: url('images/aurora_icon.png') no-repeat -52px -114px;
            width: 29px;
            height: 19px;
        }
        .rain {
            background: url('images/aurora_icon.png') no-repeat -94px -112px;
            width: 29px;
            height: 25px;
        }
        .moon {
            background: url('images/aurora_icon.png') no-repeat -136px -112px;
            width: 25px;
            height: 25px;
        }
    }
`;
