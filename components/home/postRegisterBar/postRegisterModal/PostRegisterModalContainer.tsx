import { useState, useCallback, useRef, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostRequest } from '../../../../actions/post';
import useInput from '../../../../hooks/useInput';
import { RootState } from '../../../../reducers';
import PostRegisterModalPresenter from './PostRegisterModalPresenter';

type Props = {
    onClose: () => void;
};

const PostRegisterModalContainer = ({ onClose }: Props) => {
    const dispatch = useDispatch();
    const { me } = useSelector((state: RootState) => state.user);
    const { addPostLoading, addPostDone } = useSelector((state: RootState) => state.post);

    const [mood, setMood] = useState('');
    const [content, onChangeContent] = useInput('');
    const [images, setImages] = useState<File[] | null>(null);

    const [dropBox, setDropBox] = useState(false);

    const onClickWeather = useCallback((e) => {
        if (e.target.name === 'weather') {
            setMood(e.target.value);
        }
    }, []);

    const imageInput = useRef<HTMLInputElement>(null);
    const imageUpload = useCallback(() => {
        if (!imageInput.current) return;
        imageInput.current.click();
    }, [imageInput]);

    const onChangeImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const seletedImages = Array.from(e.target.files);
        setImages(seletedImages);
    }, []);

    const onOpenDropBox = useCallback(() => {
        setDropBox((prev) => !prev);
    }, []);

    const onClickClear = useCallback(() => {
        if (images) {
            setImages(null);
        } else {
            setDropBox((prev) => !prev);
        }
    }, [images]);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const bodyFormData = new FormData();
            bodyFormData.append('mood', mood);
            bodyFormData.append('content', content);
            images?.forEach((image) => {
                bodyFormData.append('images[]', image);
            });
            dispatch(addPostRequest(bodyFormData));
        },
        [dispatch, mood, content, images],
    );
    return (
        <PostRegisterModalPresenter
            onClose={onClose}
            me={me}
            onClickWeather={onClickWeather}
            onSubmit={onSubmit}
            onChangeContent={onChangeContent}
            onOpenDropBox={onOpenDropBox}
            dropBox={dropBox}
            images={images}
            imageUpload={imageUpload}
            imageInput={imageInput}
            onChangeImages={onChangeImages}
            onClickClear={onClickClear}
        />
    );
};
export default PostRegisterModalContainer;
