import styled from 'styled-components';
import React, { ReactChild } from 'react';
import Head from 'next/head';
import Header from './header/Header';
import RightSideBar from './aside/RightSideBar';
import Global from '../../styles/Global';
import Navigation from './Navigation';

type Props = {
    children: Array<ReactChild>;
    title: string;
    filter?: boolean;
    isMain?: boolean;
};

const AppLayout = ({ children, title, filter, isMain }: Props) => (
    <>
        <Global />
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header filter={filter} />
        <Container>
            <Navigation page={title} />
            <main>
                <MainComponent>{children}</MainComponent>
                <RightSideBar isMain={isMain} />
            </main>
        </Container>
    </>
);

AppLayout.defaultProps = {
    filter: true,
    isMain: false,
};

const Container = styled.div`
    display: flex;
    height: 100%;
    padding-top: 80px;
    main {
        flex: 1;
        display: flex;
        padding-left: 230px;
        padding-right: 295px;
        height: 300vh;
        justify-content: center;
    }
    @media screen and (max-width: 1240px) {
        main {
            padding-right: 0;
        }
    }
    @media screen and (max-width: 768px) {
        main {
            padding-left: 0;
        }
    }
`;

const MainComponent = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
    padding: 0 30px;
`;

export default AppLayout;
