/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconLeft, IconRight } from '../../Icon';

type Props = {
    images: string[];
};

const ImageSlider = ({ images }: Props) => {
    const [idx, setIdx] = useState(0);
    const prev = useCallback(() => {
        setIdx((prev) => prev - 1);
    }, []);
    const next = useCallback(() => {
        setIdx((prev) => prev + 1);
    }, []);
    console.log(idx);
    return (
        <Wrapper>
            {idx > 0 && (
                <span className="prev" onClick={prev}>
                    <IconLeft />
                </span>
            )}
            {idx < images.length - 1 && (
                <span className="next" onClick={next}>
                    <IconRight />
                </span>
            )}
            <Container idx={idx} cnt={images.length}>
                <ul className="slides">
                    {images.map((image, i) => (
                        <li key={i}>
                            <img src={image} alt="" />
                        </li>
                    ))}
                </ul>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    /* border: 1px solid gray; */
    flex: 1;
    position: relative;
    background-color: #f0f2f5;
    border-radius: 20px 0 0 20px;
    span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .prev {
        right: 97%;
    }
    .next {
        left: 97%;
    }
`;

const Container = styled.div<{ idx: number; cnt: number }>`
    width: 90%;
    position: relative;
    overflow: hidden;
    height: 100%;
    /* border: 1px solid gray; */
    margin: 0 auto;
    ul {
        position: absolute;
        left: ${(props) => `-${props.idx * 100}%`};
        top: 50%;
        transform: translateY(-50%);
        width: ${(props) => `${props.cnt * 100}%`};
        display: flex;
        height: 100%;
        transition: left 0.5s ease-out;
    }
    li {
        width: calc(100% / ${(props) => `${props.cnt}`});
        /* border: 1px solid gray; */
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        max-width: 100%;
    }
`;

export default ImageSlider;
