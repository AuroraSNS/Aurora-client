import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { IFriendRequestList, ISendNoti } from '../../interfaces/notification';
import { IAuth } from '../../interfaces/user';
import { addFriendRequest, removeFriendRequest } from '../../redux/modules/friend';
import { readNotificationRequest } from '../../redux/modules/notification';
import { RootState } from '../../redux/modules/reducer';
import { getSocket } from '../../util/util';
import AppLayout from '../layout/AppLayout';
import FriendCard from './friendCard';

const FriendContainer = () => {
    const dispatch = useDispatch();
    const { friendRequestList } = useSelector((state: RootState) => state.notification);
    const { friendList } = useSelector((state: RootState) => state.friend);
    const { me } = useSelector((state: RootState) => state.user);

    const { socket, headers } = getSocket();

    const addFriend = useCallback(
        (id: number, user: IAuth) => {
            dispatch(addFriendRequest(user.id));
            const newNoti: ISendNoti = {
                type: 'FRIEND_ACCEPT',
                from: me.id,
                to: user.id,
                targetId: id,
                message: `${user.name}님이 친구요청을 수락하셨습니다.`,
            };
            socket.send('/pub/notification', headers, JSON.stringify(newNoti));
            dispatch(readNotificationRequest('FRIEND_REQUEST', id));
        },
        [me],
    );

    const removeFriend = useCallback((friendId: number) => {
        dispatch(removeFriendRequest(friendId));
    }, []);
    return (
        <AppLayout title="Friend" filter={false}>
            <Wrapper>
                <FriendList>
                    <div className="top">
                        <h2>친구목록</h2>
                    </div>
                    <div className="box">
                        {friendList &&
                            friendList.map((friend: IAuth) => (
                                <FriendCard key={friend.id} user={friend} onClick={removeFriend} text="친구 끊기" />
                            ))}
                    </div>
                </FriendList>
                <FriendList>
                    <div className="top">
                        <h2>친구요청목록</h2>
                    </div>
                    <div className="box">
                        {friendRequestList &&
                            friendRequestList.map((friend: IFriendRequestList) => (
                                <FriendCard
                                    key={friend.id}
                                    id={friend.id}
                                    user={friend.sender}
                                    onClick={addFriend}
                                    text="친구 수락"
                                />
                            ))}
                    </div>
                </FriendList>
            </Wrapper>
        </AppLayout>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 0 30px 30px;
`;

const FriendList = styled.section`
    ${({ theme }) => theme.bgFilter}
    position: relative;
    width: 100%;
    max-width: 720px;
    height: 500px;
    background: white;
    border-radius: 20px;
    padding: 42px 20px 0 20px;
    margin-top: 30px;
    .top {
        display: flex;
        justify-content: space-between;
        h2 {
            display: inline-block;
            ${({ theme }) => theme.textStyles.H16}
            margin-left: 40px;
        }
    }
    .box {
        ${({ theme }) => theme.scroll};
        margin-top: 10px;
        width: 100%;
        height: 86%;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
    }
`;

export default FriendContainer;
