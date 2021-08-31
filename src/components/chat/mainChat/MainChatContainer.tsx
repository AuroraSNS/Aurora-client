import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { IContent } from '../../../interfaces/chat';
import { RootState } from '../../../redux/modules/reducer';
import MainChatPresenter from './MainChatPresenter';

type Props = {
    contents: IContent[];
    msgTheme: string;
};

const MainChatContainer = ({ contents, msgTheme }: Props) => {
    const { me } = useSelector((state: RootState) => state.user);

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (scrollRef.current) {
            const { scrollHeight, clientHeight } = scrollRef.current;
            scrollRef.current.scrollTop = scrollHeight - clientHeight;
        }
    };

    const time = useRef<string>(`${new Date().getFullYear()} ${new Date().getMonth() + 1} ${new Date().getDate()}`);

    useEffect(() => {
        if (contents) {
            scrollToBottom();
        }
    }, [contents]);

    return (
        <MainChatPresenter time={time.current} me={me} msgTheme={msgTheme} contents={contents} scrollRef={scrollRef} />
    );
};

export default MainChatContainer;
