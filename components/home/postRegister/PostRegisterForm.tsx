import styled from 'styled-components';
import React, { useCallback, useState, useRef, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from '../../../actions/post';

import useInput from '../../../hooks/useInput';
import { RootState } from '../../../reducers';
import { IconSun, IconCloud, IconRain, IconMoon, IconGallery, IconClear } from '../../Icon';

const PostRegisterForm = () => {
    const dispatch = useDispatch();
    const { accessToken } = useSelector((state: RootState) => state.user);
    const { addPostLoading, addPostDone } = useSelector((state: RootState) => state.post);

    const [mood, setMood] = useState('');
    const [content, onChangeContent] = useInput('');
    const [images, setImages] = useState<Array<File> | null>(null);

    useEffect(() => {
        if (content.length > 0 && addPostDone) {
            window.location.replace('/');
        }
    }, [content.length, addPostDone]);

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
    const removeImage = useCallback(
        (name: string) => {
            console.log(name);
            if (!images) return;
            const newImages = images.filter((v) => v.name !== name);
            setImages(newImages);
        },
        [images],
    );
    const onSubmit = useCallback((e) => {
        e.preventDefault();

        // const bodyFormData = new FormData();
        // bodyFormData.append('content', content);
        // images.forEach((v) => {
        //     bodyFormData.append('images[]', v);
        // });
        // bodyFormData.append('mood', mood);

        // dispatch(addPost(bodyFormData, accessToken));
    }, []);
    console.log(images);
    return (
        <Form onSubmit={onSubmit} encType="multipart/form-data">
            <User>
                <img src="images/profile-thumbnail.jpg" alt="avatar" />
                <span>user1</span>
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
            <textarea placeholder="오늘 당신의 날씨는 어떤가요?" onChange={onChangeContent} />
            <ImagesWrapper>
                {images?.map((image) => (
                    <PreviewImage key={image.name}>
                        <button
                            type="button"
                            onClick={() => {
                                removeImage(image.name);
                            }}
                        >
                            <IconClear />
                        </button>
                        <img src={URL.createObjectURL(image)} alt="preview" />
                    </PreviewImage>
                ))}
            </ImagesWrapper>
            <AttachBtnWrapper>
                <button type="button" onClick={imageUpload}>
                    <input type="file" accept="image/*" multiple hidden ref={imageInput} onChange={onChangeImages} />
                    <IconGallery />
                </button>
            </AttachBtnWrapper>
            <button type="submit">공유</button>
        </Form>
    );
};

const PreviewImage = styled.div`
    /* border: 1px solid gray; */
    position: relative;
    display: flex;
    justify-content: center;
    & > button {
        /* border: 1px solid gray; */
        position: absolute;
        top: 8px;
        right: 8px;
        height: 14px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            background: rgba(255, 255, 255, 0);
        }
    }
    & > img {
        width: 260px;
        height: 202px;
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

const ImagesWrapper = styled.div``;

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
        height: 10rem;
        border: none;
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
    }
`;

export default PostRegisterForm;
