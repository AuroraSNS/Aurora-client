import React, { useCallback, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import ChatPresenter from './ChatPresenter';

const ChatContainer = () => {
    const { me } = useSelector((state: RootState) => state.user);
    const [msgTheme, setMsgTheme] = useState('sun');
    const onClick = useCallback(
        (e: any) => {
            if (e.target.name === 'theme') {
                setMsgTheme(e.target.value);
            }
        },
        [msgTheme],
    );

    return <ChatPresenter me={me} onClick={onClick} msgTheme={msgTheme} />;
};

export default ChatContainer;
