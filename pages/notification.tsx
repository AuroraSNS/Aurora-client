import Head from 'next/head';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import AppLayout from '../layout/AppLayout';
import { RootState } from '../reducers';

const Notification = () => {
    const router = useRouter();

    const { isLoggedIn } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/user/signin');
        }
    }, [router, isLoggedIn]);

    return (
        <>
            {isLoggedIn && (
                <>
                    <Head>
                        <title>알림 | Aurora</title>
                    </Head>
                    <AppLayout>
                        <NotificationMsg>알림이 없습니다 :(</NotificationMsg>
                    </AppLayout>
                </>
            )}
        </>
    );
};

const NotificationMsg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28rem;
    height: 4rem;
    border: 1px solid #f0f0f0;
    border-radius: 0.4rem;
    box-shadow: 0 0.2rem 0.3rem 0.2rem rgba(85, 85, 85, 0.25);
    position: relative;
    bottom: 10rem;
    font-size: 1rem;
    color: #555;
`;

export default Notification;
