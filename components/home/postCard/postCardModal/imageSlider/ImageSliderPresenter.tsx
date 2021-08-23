/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { IconLeft, IconRight } from '../../../../common/Icon';
import { Container, Wrapper } from './style';

type Props = {
    idx: number;
    prev: () => void;
    next: () => void;
    images: string[];
};

const ImageSliderPresenter = ({ idx, prev, next, images }: Props) => (
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
export default ImageSliderPresenter;
