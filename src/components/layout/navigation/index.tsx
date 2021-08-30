import Link from 'next/link';
import React from 'react';
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
                    </Tap>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <Tap name="Friend" selected={page}>
                        <div className="icon">
                            <div className="friend" />
                        </div>
                        친구
                    </Tap>
                </Link>
            </li>
        </ul>
    </Navbar>
);

export default Navigation;
