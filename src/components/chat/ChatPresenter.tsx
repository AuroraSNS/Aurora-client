import React from 'react';
import { IOnSubmit, ISetState } from '../../interfaces';
import { IContent, IRoom } from '../../interfaces/chat';
import { IMe } from '../../interfaces/user';
import Avatar from '../common/Avatar';
import AppLayout from '../layout/AppLayout';
import MainChatContainer from './mainChat/MainChatContainer';
import { ChatList, ChatRoom, MainChat, ThemeBox, Wrapper } from './style';

type Props = {
    me: IMe;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    msgTheme: string;
    rooms: IRoom[];
    onChangeRoom: (v: IRoom) => void;
    contents: IContent[];
    message: string;
    onChangeMessage: ISetState;
    sendMessage: IOnSubmit;
};

const ChatPresenter = ({
    me,
    onClick,
    msgTheme,
    rooms,
    onChangeRoom,
    contents,
    message,
    onChangeMessage,
    sendMessage,
}: Props) => (
    <AppLayout title="Chat" filter={false}>
        <Wrapper>
            <MainChat>
                <div className="user">
                    <Avatar url={me?.avatar} size={36} />
                    <span>{me?.name || '로그인이 필요합니다.'}</span>
                </div>
                <ThemeBox onClick={onClick}>
                    {['sun', 'rain', 'cloud', 'moon', 'gradient3'].map((themename: string) => (
                        <div key={themename}>
                            <input type="radio" name="theme" id={`theme-${themename}`} value={themename} />
                            <label htmlFor={`theme-${themename}`} />
                        </div>
                    ))}
                </ThemeBox>
                <MainChatContainer msgTheme={msgTheme} contents={contents} />
                <form onSubmit={sendMessage}>
                    <input type="text" value={message} onChange={onChangeMessage} />
                    <button type="submit">
                        <div />
                    </button>
                </form>
            </MainChat>
            <ChatList>
                <div className="user">
                    <Avatar url={me?.avatar} size={36} />
                    <span>{me?.name || '로그인이 필요합니다.'}</span>
                    <div className="msgIcon">msgIcon</div>
                </div>
                <div className="chat-list">
                    {rooms &&
                        rooms.map((room) => (
                            <ChatRoom
                                key={room.roomId}
                                onClick={() => {
                                    onChangeRoom(room);
                                }}
                            >
                                <Avatar url={room.user.avatar} size={36} />
                                <div className="room-info">
                                    <span>{room.user.name}</span>
                                    <div>
                                        <span>
                                            {room.lastMessage.length > 12
                                                ? `${room.lastMessage.slice(0, 12)}...`
                                                : room.lastMessage}
                                        </span>
                                        <span>{room.lastTimeStamp}</span>
                                    </div>
                                </div>
                            </ChatRoom>
                        ))}
                </div>
            </ChatList>
        </Wrapper>
    </AppLayout>
);

export default ChatPresenter;
