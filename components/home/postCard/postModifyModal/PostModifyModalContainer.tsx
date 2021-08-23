import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyPostRequest } from '../../../../actions/post';
import useInput from '../../../../hooks/useInput';
import { IPost } from '../../../../interfaces/data/post';
import { RootState } from '../../../../reducers';
import PostModifyModalPresenter from './PostModifyModalPresenter';

type Props = {
    post: IPost;
};

const PostModifyModalContainer = ({ post }: Props) => {
    const dispatch = useDispatch();
    const { me } = useSelector((state: RootState) => state.user);
    const { addPostLoading, addPostDone } = useSelector((state: RootState) => state.post);

    const [mood, setMood] = useState(post.mood);
    const [content, onChangeContent] = useInput(post.content);
    const [images, setImages] = useState<File[] | null>(null);

    const [dropBox, setDropBox] = useState(false);

    const onClickWeather = useCallback((e) => {
        if (e.target.name === 'weather') {
            setMood(e.target.value);
        }
    }, []);

    // const imageInput = useRef<HTMLInputElement>(null);
    // const imageUpload = useCallback(() => {
    //     if (!imageInput.current) return;
    //     imageInput.current.click();
    // }, [imageInput]);

    // const onChangeImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    //     if (!e.target.files) return;
    //     const seletedImages = Array.from(e.target.files);
    //     setImages(seletedImages);
    // }, []);

    // const onOpenDropBox = useCallback(() => {
    //     setDropBox((prev) => !prev);
    // }, []);

    // const onClickClear = useCallback(() => {
    //     if (images) {
    //         setImages(null);
    //     } else {
    //         setDropBox((prev) => !prev);
    //     }
    // }, [images]);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const bodyFormData = new FormData();
            bodyFormData.append('mood', mood);
            bodyFormData.append('content', content);
            // images?.forEach((image) => {
            //     bodyFormData.append('images[]', image);
            // });
            dispatch(modifyPostRequest(bodyFormData));
        },
        [dispatch, mood, content, images],
    );
    return <PostModifyModalPresenter post={post} />;
};

export default PostModifyModalContainer;
