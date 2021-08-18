import styled from 'styled-components';
import React, { ReactChild } from 'react';
import Head from 'next/head';
import Header from './header';
import RightSideBar from './aside';
import Navigation from './navigation';

type Props = {
    children: ReactChild | ReactChild[];
    title: string;
    filter?: boolean;
    isMain?: boolean;
};

const AppLayout = ({ children, title, filter, isMain }: Props) => (
    <>
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
                <RightSideBar isMain={isMain as boolean} />
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
        padding-left: 200px;
        padding-right: 305px;
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
