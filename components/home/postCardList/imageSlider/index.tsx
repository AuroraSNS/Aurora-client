/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState } from 'react';
import { IconLeft, IconRight } from '../../../common/Icon';
import { Container, Wrapper } from './style';

type Props = {
    images: string[];
};

const ImageSlider = ({ images }: Props) => {
    const [idx, setIdx] = useState(0);
    const prev = useCallback(() => {
        setIdx((curIdx) => curIdx - 1);
    }, []);
    const next = useCallback(() => {
        setIdx((curIdx) => curIdx + 1);
    }, []);
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

export default ImageSlider;
