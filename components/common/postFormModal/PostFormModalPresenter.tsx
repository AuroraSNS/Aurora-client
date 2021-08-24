/* eslint-disable jsx-a11y/no-autofocus */
import React, { RefObject } from 'react';
import { IOnSubmit, ISetState } from '../../../interfaces/data';
import { IPost } from '../../../interfaces/data/post';
import { IMe } from '../../../interfaces/data/user';
import Avatar from '../Avatar';
import { IconClear, IconCloud, IconGallery, IconImageAdd, IconMoon, IconRain, IconSun } from '../Icon';
import Loading from '../Loading';
import Modal from '../Modal';
import { AttachBtnWrapper, DropBox, DropBoxMsg, Form, ImageUpload, PreviewImage, WeatherTab } from './style';

type Props = {
    me: IMe;
    onClose: () => void;
    onClickWeather: (e: any) => void;
    content: string;
    onChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    showDropBox: boolean;
    showDropBoxToggle: () => void;
    images: File[] | null;
    imageUpload: () => void;
    imageInput: RefObject<HTMLInputElement>;
    onChangeImages: ISetState;
    onClickClear: () => void;
    onSubmit: IOnSubmit;
    loading: boolean;
    post: IPost | null | undefined;
};

const PostFormModalPresenter = ({
    onClose,
    me,
    onClickWeather,
    content,
    onChangeContent,
    showDropBox,
    showDropBoxToggle,
    images,
    imageUpload,
    imageInput,
    onChangeImages,
    onClickClear,
    onSubmit,
    loading,
    post,
}: Props) => (
    <Modal onClose={onClose}>
        <Form onSubmit={onSubmit} encType="multipart/form-data">
            <div className="userInfo">
                <Avatar url={me?.avatar} size={44} />
                <span>{me?.name}</span>
            </div>
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
            <textarea
                rows={3}
                placeholder={post?.content || '오늘 당신의 날씨는 어떤가요?'}
                value={content}
                onChange={onChangeContent}
                autoFocus
            />
            <AttachBtnWrapper>
                <button type="button" onClick={showDropBoxToggle}>
                    <IconGallery />
                </button>
            </AttachBtnWrapper>
            {showDropBox && (
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
            <button type="submit">{post ? '수정' : '공유'}</button>
            {loading && <Loading />}
        </Form>
    </Modal>
);

export default PostFormModalPresenter;
