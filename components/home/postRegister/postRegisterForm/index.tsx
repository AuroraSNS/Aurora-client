/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useCallback, useRef, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostRequest } from '../../../../actions/post';
import useInput from '../../../../hooks/useInput';
import { RootState } from '../../../../reducers';
import { IconClear, IconCloud, IconGallery, IconImageAdd, IconMoon, IconRain, IconSun } from '../../../common/Icon';
import { AttachBtnWrapper, DropBox, DropBoxMsg, Form, ImageUpload, PreviewImage, User, WeatherTab } from './style';

const PostRegisterForm = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state: RootState) => state.user);
    const { addPostLoading, addPostDone } = useSelector((state: RootState) => state.post);

    const [mood, setMood] = useState('');
    const [content, onChangeContent] = useInput('');
    const [images, setImages] = useState<Array<File> | null>(null);

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
        <Form onSubmit={onSubmit} encType="multipart/form-data">
            <User>
                <img src="images/profile-thumbnail.jpg" alt="avatar" />
                <span>{me.name}</span>
            </User>
            <WeatherTab onClick={onClickWeather}>
                <input type="radio" name="weather" id="register-sun" value="sun" />
                <label htmlFor="register-sun">
                    <IconSun />
                </label>
                <input type="radio" name="weather" id="register-cloud" value="cloud" />
                <label htmlFor="register-cloud">
                    <IconCloud />
                </label>
                <input type="radio" name="weather" id="register-rain" value="rain" />
                <label htmlFor="register-rain">
                    <IconRain />
                </label>
                <input type="radio" name="weather" id="register-moon" value="moon" />
                <label htmlFor="register-moon">
                    <IconMoon />
                </label>
            </WeatherTab>
            <textarea rows={3} placeholder="오늘 당신의 날씨는 어떤가요?" onChange={onChangeContent} autoFocus />
            <AttachBtnWrapper>
                <button type="button" onClick={onOpenDropBox}>
                    <IconGallery />
                </button>
            </AttachBtnWrapper>
            {dropBox && (
                <>
                    <DropBox>
                        {images ? (
                            <PreviewImage className={images.length > 1 ? 'plus' : ''}>
                                <div>
                                    <img src={URL.createObjectURL(images[0])} alt="preview" />
                                    {images[1] && <span>+{images.length - 1}</span>}
                                </div>
                            </PreviewImage>
                        ) : (
                            <ImageUpload onClick={imageUpload}>
                                <IconImageAdd />
                                {/* <span>또는 드래그 앤 드롭</span> */}
                                <span>이미지 첨부</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    hidden
                                    ref={imageInput}
                                    onChange={onChangeImages}
                                />
                            </ImageUpload>
                        )}
                        <button type="button" onClick={onClickClear}>
                            <IconClear />
                        </button>
                    </DropBox>
                    {images && <DropBoxMsg>619x619 사이즈 권장 / 정사각형으로 보입니다</DropBoxMsg>}
                </>
            )}
            <button type="submit">공유</button>
        </Form>
    );
};

export default PostRegisterForm;
