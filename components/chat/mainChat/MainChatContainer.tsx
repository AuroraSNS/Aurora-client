import React from 'react';
import { useSelector } from 'react-redux';
import { IMessage } from '../../../interfaces/data';
import { RootState } from '../../../reducers';
import MainChatPresenter from './MainChatPresenter';

type Props = {
    contents: IMessage[];
    msgTheme: string;
};

const MainChatContainer = ({ contents, msgTheme }: Props) => {
    const { me } = useSelector((state: RootState) => state.user);

    return <MainChatPresenter me={me} msgTheme={msgTheme} contents={contents} />;
};

export default MainChatContainer;
