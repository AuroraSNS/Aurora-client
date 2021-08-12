/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from 'styled-components';
import React, { useCallback, useState, useRef, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../hooks/useInput';
import { RootState } from '../../../reducers';
import { IconSun, IconCloud, IconRain, IconMoon, IconGallery, IconClear, IconImageAdd } from '../../Icon';
import { addPostRequest } from '../../../actions/post';

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

const DropBoxMsg = styled.span`
    margin-top: 5px;
    font-size: 12px;
    color: #707070;
    align-self: center;
`;

const PreviewImage = styled.div`
    position: relative;
    height: 100%;
    div {
        height: 100%;
        position: relative;
        img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            object-fit: cover;
        }
        overflow: hidden;
    }

    span {
        position: absolute;
        top: 50px;
        left: 100px;
        font-size: 40px;
    }
    &.plus {
        opacity: 0.7;
    }
`;

const ImageUpload = styled.div`
    background-color: rgba(128, 128, 128, 0.1);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        background-color: rgba(128, 128, 128, 0.3);
    }
`;

const DropBox = styled.div`
    border: 1px solid rgba(128, 128, 128, 0.3);
    border-radius: 20px;
    padding: 10px;
    height: 266px;
    position: relative;
    button {
        border: 1px solid gray;
        position: absolute;
        top: 15px;
        right: 15px;
        height: 18px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            background: rgba(128, 128, 128, 0.15);
        }
    }
`;

const AttachBtnWrapper = styled.div`
    display: flex;
    padding: 0 15px;
    & > button {
        width: 29px;
        height: 29px;
        background: #f0f2f5;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    margin: 12px 0;
`;

const User = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    & > img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        margin-bottom: 5px;
    }
    margin-top: 10px;
    margin-bottom: 14px;
`;

const WeatherTab = styled.div`
    /* border: 1px solid gray; */
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    svg {
        cursor: pointer;
    }
    & > input {
        display: none;
    }
    & > label {
        width: 72px;
        height: 40px;
        display: flex;
        justify-content: center;
    }
    & > input#register-sun:checked + label {
        border-bottom: 2px solid #ed9a9a;
    }
    & > input#register-cloud:checked + label {
        border-bottom: 2px solid #b1b0b0;
    }
    & > input#register-rain:checked + label {
        border-bottom: 2px solid #9ac6f0;
    }
    & > input#register-moon:checked + label {
        border-bottom: 2px solid #ac8de0;
    }
`;

const Form = styled.form`
    width: 286px;
    background: #ffffff;
    box-shadow: 0px 0px 30px 5px rgba(82, 82, 82, 0.15);
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    & > textarea {
        padding: 1rem;
        width: 100%;
        resize: none;
        &::placeholder {
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
        }
    }
    & > button {
        color: #ffffff;
        font-weight: 600;
        font-size: 12px;
        width: 268px;
        height: 33px;
        background: linear-gradient(106.76deg, #d3bafc 3.84%, #b9d8f6 89.38%);
        border-radius: 50px;
        margin-top: 20px;
    }
`;

export default PostRegisterForm;
