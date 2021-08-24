import Link from 'next/link';
import React from 'react';

import { IconFriend, IconHome, IconMessage, IconNotification } from '../../common/Icon';
import { Navbar, Tap } from './style';

type Props = {
    page: string;
};

const Navigation = ({ page }: Props) => (
    <Navbar>
        <ul>
            <li>
                <Link href="/">
                    <Tap name="Home" selected={page}>
                        <IconHome />
                        <span>피드</span>
                    </Tap>
                </Link>
            </li>
            <li>
                <Link href="/chat">
                    <Tap name="Chat" selected={page}>
                        <IconMessage />
                        <span>메시지</span>
                    </Tap>
                </Link>
            </li>
            <li>
                <Link href="/notification">
                    <Tap name="Notification" selected={page}>
                        <IconNotification />
                        <span>알림</span>
                    </Tap>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <Tap name="Friend" selected={page}>
                        <IconFriend />
                        <span>친구</span>
                    </Tap>
                </Link>
            </li>
        </ul>
    </Navbar>
);

export default Navigation;
