/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useToggle from '../../../../hooks/useToggle';

import { RootState } from '../../../../redux/modules/reducer';
import { logOutRequest } from '../../../../redux/modules/user';
import Avatar from '../../../common/Avatar';
import { IconMore } from '../../../common/Icon';
import ProfileEditModalContainer from '../../../user/userProfile/profileEditModal/ProfileEditModalContainer';
import { Wrapper } from './style';

const UserInfo = () => {
    const dispatch = useDispatch();
    const { me, modifyProfileDone } = useSelector((state: RootState) => state.user);

    const [more, onChangeMore] = useToggle(false);
    const [showProfileModal, showProfileModalToggle, setShowProfileModal] = useToggle(false);
    const logout = useCallback(() => {
        dispatch(logOutRequest());
    }, [dispatch]);

    useEffect(() => {
        if (modifyProfileDone) {
            setShowProfileModal(false);
        }
    }, [modifyProfileDone]);

    return (
        <Wrapper>
            <Link href={`/user/${me?.id}`}>
                <a>
                    <Avatar url={me?.avatar} size={54} />
                </a>
            </Link>
            <span>{me && me.name}</span>
            <button type="button" onClick={onChangeMore}>
                <IconMore />
            </button>
            {more && (
                <>
                    <div className="more-overlay" onClick={onChangeMore} />
                    <ul className="more">
                        <li>
                            <button onClick={showProfileModalToggle} type="button">
                                회원정보 수정
                            </button>
                        </li>
                        <li>
                            <button onClick={logout} type="button">
                                LogOut
                            </button>
                        </li>
                    </ul>
                </>
            )}
            {showProfileModal && <ProfileEditModalContainer onClose={showProfileModalToggle} />}
        </Wrapper>
    );
};

export default UserInfo;
