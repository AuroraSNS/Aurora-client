/* eslint-disable jsx-a11y/no-autofocus */
import React, { RefObject } from 'react';
import { IOnSubmit, ISetState } from '../../../../interfaces/data';
import { IMe } from '../../../../interfaces/data/user';
import { IconSun, IconCloud, IconRain, IconMoon, IconGallery, IconImageAdd, IconClear } from '../../../common/Icon';
import Modal from '../../../common/Modal';
import { AttachBtnWrapper, DropBox, DropBoxMsg, Form, ImageUpload, PreviewImage, User, WeatherTab } from './style';

type Props = {
    onClose: () => void;
    me: IMe;
    onClickWeather: (e: any) => void;
    onSubmit: IOnSubmit;
    onChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onOpenDropBox: () => void;
    dropBox: boolean;
    images: File[] | null;
    imageUpload: () => void;
    imageInput: RefObject<HTMLInputElement>;
    onChangeImages: ISetState;
    onClickClear: () => void;
};

const PostRegisterModalPresenter = ({
    onClose,
    me,
    onClickWeather,
    onSubmit,
    onChangeContent,
    onOpenDropBox,
    dropBox,
    images,
    imageUpload,
    imageInput,
    onChangeImages,
    onClickClear,
}: Props) => (
    <Modal onClose={onClose}>
        <Form onSubmit={onSubmit} encType="multipart/form-data">
            <User>
                <img src="/images/defaultProfile.png" alt="avatar" />
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
    </Modal>
);
export default PostRegisterModalPresenter;
