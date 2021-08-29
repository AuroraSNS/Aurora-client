import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import wrapper from '../redux/create';
import Global from '../styles/GlobalStyle';
import theme from '../styles/theme';

const Aurora = ({ Component, pageProps }: AppProps) => (
    <>
        <Global />
        <Head>
            <title>Aurora</title>
        </Head>
        <ThemeProvider theme={theme}>
            <Component />
        </ThemeProvider>
    </>
);

export default wrapper.withRedux(Aurora);
