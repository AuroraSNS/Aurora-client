import styled from 'styled-components';
import React, { ReactChild } from 'react';
import Head from 'next/head';
import Header from './header';
import RightSideBar from './aside';
import Navigation from './navigation';

type Props = {
    children: React.ReactNode;
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
            <div className="inner">
                <Navigation page={title} />
                <MainComponent>{children}</MainComponent>
                <RightSideBar isMain={isMain as boolean} />
            </div>
        </Container>
    </>
);

AppLayout.defaultProps = {
    filter: true,
    isMain: false,
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 80px;
    .inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

const MainComponent = styled.div`
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
    margin-left: 200px;
    padding: 0 20px;
    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`;

export default AppLayout;
