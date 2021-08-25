import React from 'react';
import { IMessage, IOnSubmit, ISetState } from '../../interfaces/data';
import { IMe } from '../../interfaces/data/user';
import Avatar from '../common/Avatar';
import { IconMsg, IconSend } from '../common/Icon';
import AppLayout from '../layout/AppLayout';
import ChatRoomContainer from './chatroom/ChatRoomContainer';
import MainChatContainer from './mainChat/MainChatContainer';
import { ChatList, MainChat, ThemeBox, Wrapper } from './style';

type Props = {
    me: IMe;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    msgTheme: string;
    contents: IMessage[];
    message: string;
    onChangeMessage: ISetState;
    onSubmit: IOnSubmit;
};

const ChatPresenter = ({ me, onClick, msgTheme, contents, message, onChangeMessage, onSubmit }: Props) => (
    <AppLayout title="Chat" filter={false}>
        <Wrapper>
            <MainChat>
                <div className="user">
                    <Avatar url={me.avatar} size={36} />
                    <span>{me.name}</span>
                </div>
                <ThemeBox onClick={onClick}>
                    {['sun', 'rain', 'cloud', 'gradient3'].map((themename: string) => (
                        <>
                            <input type="radio" name="theme" id={`theme-${themename}`} value={themename} />
                            <label htmlFor={`theme-${themename}`} />
                        </>
                    ))}
                </ThemeBox>
                <MainChatContainer msgTheme={msgTheme} contents={contents} />
                <form onSubmit={onSubmit}>
                    <input type="text" value={message} onChange={onChangeMessage} />
                    <button type="submit">
                        <IconSend />
                    </button>
                </form>
            </MainChat>
            <ChatList>
                <div className="user">
                    <Avatar url={me.avatar} size={36} />
                    <span>{me.name}</span>
                    <IconMsg />
                </div>
                <div className="chat-list">
                    <ChatRoomContainer />
                    <ChatRoomContainer />
                    <ChatRoomContainer />
                    <ChatRoomContainer />
                </div>
            </ChatList>
        </Wrapper>
    </AppLayout>
);

export default ChatPresenter;
