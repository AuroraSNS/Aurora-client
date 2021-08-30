/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
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
            <button type="button" className="prev" onClick={prev}>
                <div />
            </button>
        )}
        {idx < images.length - 1 && (
            <button type="button" className="next" onClick={next}>
                <div />
            </button>
        )}
        <Container idx={idx} cnt={images.length}>
            <ul className="slides">
                {images.map((image) => (
                    <li key={image}>
                        <img src={image} alt="" />
                    </li>
                ))}
            </ul>
        </Container>
    </Wrapper>
);
export default ImageSliderPresenter;
