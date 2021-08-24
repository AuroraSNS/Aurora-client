import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import MainChatPresenter from './MainChatPresenter';

type Props = {
    msgTheme: string;
};

const MainChatContainer = ({ msgTheme }: Props) => {
    const { me } = useSelector((state: RootState) => state.user);

    return <MainChatPresenter me={me} msgTheme={msgTheme} />;
};

export default MainChatContainer;
