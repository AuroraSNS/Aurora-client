import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Stomp from 'stompjs';
import { RootState } from '../../../redux/modules/reducer';
import { getSocket } from '../../../util/util';
import { Navbar, Tap } from './style';

type Props = {
    page: string;
};

const Navigation = ({ page }: Props) => {
    const { allNotification } = useSelector((state: RootState) => state.notification);

    const [chatting, setChatting] = useState(0);
    const [normal, setNormal] = useState(0);
    const [friend, setFriend] = useState(0);

    const { socket, headers } = getSocket();
    const { me } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (allNotification) {
            setChatting(allNotification.chatting);
            setNormal(allNotification.normal);
            setFriend(allNotification.friend);
        }
    }, [allNotification]);

    useEffect(() => {
        if (me) {
            socket.connect(headers, () => {
                socket.subscribe(`/sub/notification/${me.id}`, onReceive);
            });
        }
    }, []);

    const onReceive = useCallback((frame: Stomp.Frame) => {
        const { type } = JSON.parse(frame.body);
        if (type === 'CHATTING') {
            setChatting((prev: number) => prev + 1);
        } else if (type === 'FRIEND_REQUEST') {
            setFriend((prev: number) => prev + 1);
        } else {
            setNormal((prev: number) => prev + 1);
        }
    }, []);

    return (
        <Navbar>
            <ul>
                <li>
                    <Link href="/">
                        <Tap name="Home" selected={page}>
                            <div className="icon">
                                <div className="home" />
                            </div>
                            피드
                        </Tap>
                    </Link>
                </li>
                <li>
                    <Link href="/chat">
                        <Tap name="Chat" selected={page}>
                            <div className="icon">
                                <div className="chat" />
                            </div>
                            메시지
                            {chatting > 0 && <span>{chatting}</span>}
                        </Tap>
                    </Link>
                </li>
                <li>
                    <Link href="/notification">
                        <Tap name="Notification" selected={page}>
                            <div className="icon">
                                <div className="noti" />
                            </div>
                            알림
                            {normal > 0 && <span>{normal}</span>}
                        </Tap>
                    </Link>
                </li>
                <li>
                    <Link href="/friend">
                        <Tap name="Friend" selected={page}>
                            <div className="icon">
                                <div className="friend" />
                            </div>
                            친구
                            {friend > 0 && <span>{friend}</span>}
                        </Tap>
                    </Link>
                </li>
            </ul>
        </Navbar>
    );
};

export default Navigation;
