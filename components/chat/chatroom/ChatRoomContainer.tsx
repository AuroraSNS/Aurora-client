import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import ChatRoomPresenter from './ChatRoomPresenter';

const ChatRoomContainer = () => {
    const { me } = useSelector((state: RootState) => state.user);
    return <ChatRoomPresenter me={me} />;
};

export default ChatRoomContainer;
