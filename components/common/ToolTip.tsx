import { ReactChild } from 'react';
import styled from 'styled-components';

type Props = {
    message: string;
    wh?: number;
    children: ReactChild;
};

const ToolTip = ({ message, wh, children }: Props) => (
    <Wrapper message={message} wh={wh as number}>
        {children}
    </Wrapper>
);

ToolTip.defaultProps = {
    wh: 75,
};

const Wrapper = styled.div<{ message: string; wh: number }>`
    &:hover {
        position: relative;
    }

    &:after {
        -webkit-transition: bottom 0.3s ease-in-out, opacity 0.3s ease-in-out;
        -moz-transition: bottom 0.3s ease-in-out, opacity 0.3s ease-in-out;
        transition: bottom 0.3s ease-in-out, opacity 0.3s ease-in-out;

        background-color: rgba(0, 0, 0, 0.8);

        -webkit-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);
        -moz-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);
        box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);

        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;

        color: #ffffff;
        font-size: 12px;
        margin-bottom: 10px;
        padding: 7px 12px;
        position: absolute;
        width: ${(props) => `${props.wh}px`};
        word-wrap: break-word;

        z-index: 9999;

        opacity: 0;
        left: -9999px;
        top: 90%;
        content: '${(props) => `${props.message}`}';
    }

    &:hover:after {
        top: 110%;
        left: 0;
        opacity: 1;
    }
`;

export default ToolTip;
