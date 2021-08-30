import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const onClick = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, []);

    return (
        <Wrapper onClick={onClick} visible={visible}>
            <div />
        </Wrapper>
    );
};

const Wrapper = styled.div<{ visible: boolean }>`
    display: ${({ visible }) => (visible ? `flex` : `none`)};
    cursor: pointer;
    width: 42px;
    height: 42px;
    background: #33333328;
    border-radius: 10px;
    position: fixed;
    right: 3vw;
    top: 20vh;
    justify-content: center;
    align-items: center;
    z-index: 9;
    div {
        background: url('images/aurora_icon.png') no-repeat -338px -168px;
        width: 11px;
        height: 20px;
        transform: rotate(90deg);
    }
    opacity: 0;
    animation: fade-in 2s forwards;
    &:hover {
        transform: translateY(-5px);
    }
`;

export default ScrollToTop;
