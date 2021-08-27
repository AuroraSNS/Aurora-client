import { useState, useCallback } from 'react';
import ImageSliderPresenter from './ImageSliderPresenter';

type Props = {
    images: string[];
};

const ImageSliderContainer = ({ images }: Props) => {
    const [idx, setIdx] = useState(0);
    const prev = useCallback(() => {
        setIdx((curIdx) => curIdx - 1);
    }, []);
    const next = useCallback(() => {
        setIdx((curIdx) => curIdx + 1);
    }, []);
    return <ImageSliderPresenter idx={idx} prev={prev} next={next} images={images} />;
};
export default ImageSliderContainer;
