/* eslint-disable import/no-unresolved */
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import useInput from '../../hooks/useInput';
import { IMessage } from '../../interfaces/data';
import { RootState } from '../../reducers';
import { getToken } from '../../sagas';
import ChatPresenter from './ChatPresenter';

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
let sockJS = new SockJS('http://localhost:8080/webSocket');
let stompClient: Stomp.Client = Stomp.over(sockJS);

stompClient.heartbeat.outgoing = 20000; // client will send heartbeats every 20000ms
stompClient.heartbeat.incoming = 0; // client does not want to receive heartbeats from the server
stompClient.debug = (str: string) => {
    console.log(str);
};

const headers = {
    Authorization: getToken() as string,
};

const ChatContainer = () => {
    const { me } = useSelector((state: RootState) => state.user);
    const [msgTheme, setMsgTheme] = useState('sun');

    const onClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if ((e.target as HTMLInputElement).name === 'theme') {
                setMsgTheme((e.target as HTMLInputElement).value);
            }
        },
        [msgTheme],
    );

    const [roomId, setRoomId] = useState(0);
    const [contents, setContents] = useState<IMessage[]>([]);
    const [message, onChangeMessage, setMessage] = useInput('');
    const onReceive = (frame: Stomp.Frame) => {
        // called when the client receives a STOMP message from the server
        let recv = JSON.parse(frame.body);
        const newMessage = {
            roomId: recv.roomId,
            sender: recv.sender,
            message: recv.message,
            timeStamp: recv.timeStamp,
        };
        setContents((prev) => [...prev, newMessage]);
    };

    const sendMessage = () => {
        stompClient.send('/pub/chat/message', headers, JSON.stringify({ roomId, message }));
        setMessage('');
    };

    const onConnect = (frame: Stomp.Frame) => {
        stompClient.subscribe(`/sub/chat/room/${roomId}`, onReceive);
        sendMessage();
    };

    const onError = (frame: Stomp.Frame) => {
        console.log(frame);
        console.log('Error!!');
        console.log(`Broker reported error: ${frame.headers}`);
        console.log(`Additional details: ${frame.body}`);
        // location.href = '/chat/room';
    };

    useEffect(() => {
        // 유저
        // axios 요청
        // 첫 진입시 - 룸id []
        // 방선택시 - 룸id, 참여자 {id, 이름, 아바타} IMessage[]
        // stomp 메시지 송수신
        // 메시지 보낼때
        // const roomId = localStorage.getItem('wschat.roomId');
        // axios.get(`/chat/room/${roomId}`).then((res) => {
        //     stompClient.connect(headers, onConnect, onError);
        // });
    }, []);

    useEffect(() => {
        stompClient.connect({}, () => {
            stompClient.subscribe('/topic/roomId', (data) => {
                const newMessage: IMessage = JSON.parse(data.body) as IMessage;
                addMessage(newMessage);
            });
        });
    }, [contents]);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const newMessage: IMessage = { roomId, sender: me.id, message, timeStamp: new Date().toLocaleString() };
            stompClient.send('/hello', {}, JSON.stringify(newMessage));
            setMessage('');
        },
        [message],
    );

    const addMessage = useCallback((newMessage: IMessage) => {
        setContents((prev) => [...prev, newMessage]);
    }, []);

    return (
        <ChatPresenter
            me={me}
            onClick={onClick}
            msgTheme={msgTheme}
            contents={contents}
            message={message}
            onChangeMessage={onChangeMessage}
            onSubmit={onSubmit}
        />
    );
};

export default ChatContainer;
