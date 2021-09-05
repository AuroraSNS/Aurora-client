import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ISendNoti } from '../../../../interfaces/notification';
import { IAuth } from '../../../../interfaces/user';
import { addFriendRequest } from '../../../../redux/modules/friend';
import { RootState } from '../../../../redux/modules/reducer';
import { getSocket } from '../../../../util/util';
import Avatar from '../../../common/Avatar';
import { Container, RecommendFriendCard, Wrapper } from './style';

const RecommendFriend = () => {
    const router = useRouter();
    const { me } = useSelector((state: RootState) => state.user);
    const { recommendFriendList } = useSelector((state: RootState) => state.friend);

    const onClickBtn = useCallback((userId: number) => {
        if (me) {
            friendRequest(userId);
        } else {
            router.push('/login');
        }
    }, []);

    const dispatch = useDispatch();
    const { socket, headers } = getSocket();

    const friendRequest = useCallback((userId: number) => {
        const newNoti: ISendNoti = {
            type: 'FRIEND_REQUEST',
            from: me.id,
            to: userId,
            message: '',
        };
        socket.send('/pub/notification', headers, JSON.stringify(newNoti));
        dispatch(addFriendRequest(userId));
    }, []);

    return (
        <Wrapper>
            <div className="title">추천 친구</div>
            <Container>
                {recommendFriendList.map(({ id, name, avatar }: IAuth) => (
                    <RecommendFriendCard key={id}>
                        <div>
                            <Avatar url={avatar} size={44} />
                        </div>
                        <span>{name}</span>
                        <button
                            type="button"
                            onClick={() => {
                                onClickBtn(id);
                            }}
                        >
                            친구 추가
                        </button>
                    </RecommendFriendCard>
                ))}
            </Container>
        </Wrapper>
    );
};

export default RecommendFriend;
