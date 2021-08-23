import React from 'react';
import { IPost } from '../../../../interfaces/data/post';
import { IconSun, IconCloud, IconRain, IconMoon, IconGallery, IconImageAdd, IconClear } from '../../../common/Icon';
import Modal from '../../../common/Modal';
import { AttachBtnWrapper, DropBox, DropBoxMsg, Form, ImageUpload, PreviewImage, User, WeatherTab } from './style';

type Props = {
    post: IPost;
};

const PostModifyModalPresenter = ({ post }: Props) => (
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
            <button type="submit">수정</button>
        </Form>
    </Modal>
);

export default PostModifyModalPresenter;
