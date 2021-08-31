/* eslint-disable import/no-unresolved */
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Stomp from 'stompjs';
import useInput from '../../hooks/useInput';
import { RootState } from '../../redux/modules/reducer';
import { getToken } from '../../redux/sagas';
import ChatPresenter from './ChatPresenter';
import { IContent, IRecvMsg, IRoom, ISendMsg } from '../../interfaces/chat';
import { getSocket } from '../../util/util';
import { ISendNoti } from '../../interfaces/notification';

const ChatContainer = () => {
    const { me } = useSelector((state: RootState) => state.user);

    // 채팅방 테마 변경
    const [msgTheme, setMsgTheme] = useState('sun');
    const onClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if ((e.target as HTMLInputElement).name === 'theme') {
                setMsgTheme((e.target as HTMLInputElement).value);
            }
        },
        [msgTheme],
    );

    // 채팅방 소켓
    const { socket, headers } = getSocket();
    const { rooms } = useSelector((state: RootState) => state.chat);
    const [room, setRoom] = useState<IRoom | null>(null);
    const [contents, setContents] = useState<IContent[]>([]);
    const [message, onChangeMessage, setMessage] = useInput('');

    const onChangeRoom = useCallback((newRoom: IRoom) => {
        setRoom(newRoom);
    }, []);

    // 룸 선택시 그 룸의 대화 정보 불러옴
    useEffect(() => {
        if (room) {
            loadContents(room.roomId);
        }
    }, [room]);

    const loadContents = useCallback(async (roomId) => {
        const res = await axios.get(`/chat/room/${roomId}`, { headers: { Authorization: `Bearer ${getToken()}` } });
        setContents(res.data.messages);
    }, []);
    // 모든 룸 구독
    useEffect(() => {
        if (rooms) {
            socket.connect(headers, () => {
                rooms.forEach((ele: IRoom) => {
                    socket.subscribe(`/sub/chat/room/${ele.roomId}`, onReceive);
                });
            });
        }
    }, [rooms]);

    const onReceive = useCallback((frame: Stomp.Frame) => {
        const { id, sender, message, timeStamp } = JSON.parse(frame.body);
        const newMessage: IRecvMsg = {
            id,
            sender,
            message,
            timeStamp,
        };
        setContents((prev) => [...prev, newMessage]);
    }, []);

    const sendMessage = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const newMessage: ISendMsg = {
                roomId: (room as IRoom).roomId,
                message,
            };
            const newNoti: ISendNoti = {
                type: 'CHATTING',
                from: me.id,
                to: (room as IRoom).user.id,
                targetId: (room as IRoom).roomId,
                message: `${me.name}님이 메시지를 보냈습니다.`,
            };
            socket.send('/pub/chat/message', headers, JSON.stringify(newMessage));
            socket.send('/pub/notifcation', headers, JSON.stringify(newNoti));
            setMessage('');
        },
        [message],
    );

    return (
        <ChatPresenter
            me={me}
            onClick={onClick}
            msgTheme={msgTheme}
            rooms={rooms}
            onChangeRoom={onChangeRoom}
            contents={contents}
            message={message}
            onChangeMessage={onChangeMessage}
            sendMessage={sendMessage}
        />
    );
};

export default ChatContainer;
