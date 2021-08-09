import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import wrapper from '../store/configureStore';

const Aurora = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>Aurora</title>
        </Head>
        <Component />
    </>
);

export default wrapper.withRedux(Aurora);
