import React, { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyProfileRequest } from '../../../../actions/user';
import useInput from '../../../../hooks/useInput';
import { RootState } from '../../../../reducers';
import ProfileEditModalPresenter from './ProfileEditModalPresenter';

type Props = {
    onClose: () => void;
};

const ProfileEditModalContainer = ({ onClose }: Props) => {
    const dispatch = useDispatch();

    const { me, modifyProfileLoading } = useSelector((state: RootState) => state.user);

    const [currentImage, setCurrentImage] = useState(me.avatar);
    const [image, setImage] = useState<File | null>(null);
    const [name, onChangeName] = useInput(me.name);
    const [bio, onChangeBio] = useInput(me.bio);
    const [isDefaultImage, setIsDefaultImage] = useState('N');
    const [isChange, setIsChange] = useState(false);

    const imageInput = useRef<HTMLInputElement>(null);
    const imageUpload = useCallback(() => {
        if (!imageInput.current) return;
        imageInput.current.click();
    }, [imageInput]);
    const onChangeImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setImage(e.target.files[0]);
        setIsDefaultImage('N');
        setIsChange(true);
    }, []);
    const removeImage = useCallback(() => {
        if (currentImage) {
            setCurrentImage(null);
        } else {
            setImage(null);
        }
        setIsDefaultImage('Y');
    }, [currentImage]);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (isChange) {
                const data = new FormData();
                if (image) data.append('image', image);
                if (name) data.append('name', name);
                if (bio) data.append('bio', bio);
                data.append('isDefaultImage', isDefaultImage);
                dispatch(modifyProfileRequest(data));
            }
        },
        [dispatch, image, name, bio, isDefaultImage, isChange],
    );

    useEffect(() => {
        if (name === me.name && currentImage === me.imageUrl && !image && bio === me.bio) {
            setIsChange(false);
        } else {
            setIsChange(true);
        }
    }, [currentImage, image, name, bio, me]);

    return (
        <ProfileEditModalPresenter
            onClose={onClose}
            me={me}
            name={name}
            onChangeName={onChangeName}
            bio={bio}
            onChangeBio={onChangeBio}
            image={image}
            currentImage={currentImage}
            imageInput={imageInput}
            onChangeImages={onChangeImages}
            imageUpload={imageUpload}
            removeImage={removeImage}
            isChange={isChange}
            onSubmit={onSubmit}
            loading={modifyProfileLoading}
        />
    );
};

export default ProfileEditModalContainer;
