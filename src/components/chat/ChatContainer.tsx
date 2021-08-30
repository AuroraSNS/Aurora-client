/* eslint-disable import/no-unresolved */
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import axios from 'axios';
import useInput from '../../hooks/useInput';
import { RootState } from '../../redux/modules/reducer';
import { getToken } from '../../redux/sagas';
import ChatPresenter from './ChatPresenter';
import { IContent, IRecvMsg, IRoom, ISendMsg } from '../../interfaces/data/chat';

// 메시지 구독 및 수신
// const subscription = stompClient.subscribe('/queue/test', onReceive);

// 여러 대상을 구독하려면 동일한 콜백을 사용하여 모든 메시지를 수신
// stompClient.subscribe("queue/another", onReceive);

// 구독 취소
// subscription.unsubscribe();

// 메시지 전송
// stompClient.send('/queue/test', { priority: 9 }, 'Hello, STOMP');
// stompClient.send(destination, headers, body); 헤더 없으면 빈 객체 전송
// **destination**
// - app: WebSocket으로의 앱으로 접속을 위한 포인트가 되며 메시지를 실제로 보낼 때 사용된다
// - topic: 일 대 다수의 커넥션에서 메시지를 전송한다
// - queue: 일 대 일의 커넥션에서 메시지를 전송한다
// - user: 메시지를 보내기 위한 사용자를 특정한다

// STOMP Client 생성
let sockJS = new SockJS('https://api.aurora.center/ws-stomp');
let stompClient: Stomp.Client = Stomp.over(sockJS);
stompClient.debug = (str: string) => {
    console.log(str);
};

const headers = {
    Authorization: getToken() as string,
};

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
            stompClient.connect(headers, () => {
                rooms.forEach((ele: IRoom) => {
                    stompClient.subscribe(`/sub/chat/room/${ele.roomId}`, onReceive);
                });
            });
        }
    }, [rooms]);

    const onReceive = (frame: Stomp.Frame) => {
        let recv = JSON.parse(frame.body);
        const newMessage: IRecvMsg = {
            id: recv.id,
            sender: recv.sender,
            message: recv.message,
            timeStamp: recv.timeStamp,
        };
        setContents((prev) => [...prev, newMessage]);
    };

    const sendMessage = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const newMessage: ISendMsg = {
                roomId: (room as IRoom).roomId,
                message,
            };
            stompClient.send('/pub/chat/message', headers, JSON.stringify(newMessage));
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
