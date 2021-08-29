import React from 'react';
import { useSelector } from 'react-redux';
import { IContent } from '../../../interfaces/data/chat';
import { RootState } from '../../../redux/modules/reducer';
import MainChatPresenter from './MainChatPresenter';

type Props = {
    contents: IContent[];
    msgTheme: string;
};

const MainChatContainer = ({ contents, msgTheme }: Props) => {
    const { me } = useSelector((state: RootState) => state.user);

    return <MainChatPresenter me={me} msgTheme={msgTheme} contents={contents} />;
};

export default MainChatContainer;
