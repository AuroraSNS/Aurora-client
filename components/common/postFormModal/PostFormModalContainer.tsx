import React, { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostRequest, modifyPostRequest } from '../../../actions/post';
import useInput from '../../../hooks/useInput';
import useToggle from '../../../hooks/useToggle';
import { IPost } from '../../../interfaces/data/post';
import { RootState } from '../../../reducers';
import PostFormModalPresenter from './PostFormModalPresenter';

type Props = {
    onClose: () => void;
    isFirst?: boolean;
    post?: IPost;
};

const PostFormModalContainer = ({ isFirst, onClose, post }: Props) => {
    const dispatch = useDispatch();
    const { me } = useSelector((state: RootState) => state.user);
    const { addPostLoading, modifyPostLoading } = useSelector((state: RootState) => state.post);

    const [mood, setMood] = useState(post?.mood || '');
    const [content, onChangeContent] = useInput(post?.content || '');
    const [images, setImages] = useState<File[] | null>(null);

    const [showDropBox, showDropBoxToggle] = useToggle(false);

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

    const onClickClear = useCallback(() => {
        if (images) {
            setImages(null);
        } else {
            showDropBoxToggle();
        }
    }, [images]);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const bodyFormData = new FormData();
            bodyFormData.append('mood', mood);
            bodyFormData.append('content', content);
            images?.forEach((image) => {
                bodyFormData.append('images', image);
            });
            if (isFirst) {
                dispatch(addPostRequest(bodyFormData));
            } else {
                dispatch(modifyPostRequest((post as IPost).id, bodyFormData));
            }
        },
        [dispatch, mood, content, images],
    );

    useEffect(() => {
        if (post) {
            const input = document.getElementById(`register-${post.mood}`);
            input?.click();
        }
    }, []);

    return (
        <PostFormModalPresenter
            me={me}
            onClose={onClose}
            onClickWeather={onClickWeather}
            content={content}
            onChangeContent={onChangeContent}
            showDropBox={showDropBox}
            showDropBoxToggle={showDropBoxToggle}
            images={images}
            imageUpload={imageUpload}
            imageInput={imageInput}
            onChangeImages={onChangeImages}
            onClickClear={onClickClear}
            onSubmit={onSubmit}
            loading={post ? addPostLoading : modifyPostLoading}
            post={post}
        />
    );
};

PostFormModalContainer.defaultProps = {
    isFirst: false,
    post: null,
};

export default PostFormModalContainer;
