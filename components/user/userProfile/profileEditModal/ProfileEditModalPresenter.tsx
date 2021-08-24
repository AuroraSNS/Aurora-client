import React from 'react';
import { IOnSubmit, ISetState } from '../../../../interfaces/data';
import { IMe } from '../../../../interfaces/data/user';
import Avatar from '../../../common/Avatar';
import { IconClear, IconGallery } from '../../../common/Icon';
import Loading from '../../../common/Loading';
import Modal from '../../../common/Modal';
import { Form, ImageWrapper, InputWrapper } from './style';

type Props = {
    onClose: () => void;
    me: IMe;
    name: string;
    onChangeName: ISetState;
    bio: string;
    onChangeBio: ISetState;
    image: File | null;
    currentImage: string;
    imageInput: React.RefObject<HTMLInputElement>;
    onChangeImages: ISetState;
    imageUpload: () => void;
    removeImage: () => void;
    isChange: boolean;
    onSubmit: IOnSubmit;
    loading: boolean;
};

const ProfileEditModalPresenter = ({
    onClose,
    me,
    name,
    onChangeName,
    bio,
    onChangeBio,
    image,
    currentImage,
    imageInput,
    onChangeImages,
    imageUpload,
    removeImage,
    isChange,
    onSubmit,
    loading,
}: Props) => (
    <Modal onClose={onClose}>
        <Form onSubmit={onSubmit}>
            <ImageWrapper>
                {image ? (
                    <img className="user-image" src={URL.createObjectURL(image as File)} alt="" />
                ) : (
                    <Avatar size={160} url={currentImage} />
                )}

                <input type="file" accept="image/*" multiple hidden ref={imageInput} onChange={onChangeImages} />
                {image ? (
                    <button type="button" onClick={removeImage}>
                        <IconClear />
                    </button>
                ) : (
                    <button type="button" onClick={imageUpload}>
                        <IconGallery />
                    </button>
                )}
            </ImageWrapper>
            <InputWrapper>
                <label>이메일</label>
                <span>{me.email}</span>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="name">닉네임</label>
                <input
                    type="tel"
                    name="name"
                    value={name}
                    onChange={onChangeName}
                    placeholder="닉네임을 입력해주세요"
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="bio">한줄소개</label>
                <input name="bio" value={bio} onChange={onChangeBio} placeholder={`안녕하세요 ${me.name}입니다`} />
            </InputWrapper>
            {isChange && <button type="submit">수정완료</button>}
            {/* {modifyProfileError && <ErrorMessage message="회원정보 수정에 실패하였습니다." />} */}
            {loading && <Loading />}
        </Form>
    </Modal>
);

export default ProfileEditModalPresenter;
