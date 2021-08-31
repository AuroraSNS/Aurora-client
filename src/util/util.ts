/* eslint-disable no-useless-escape */
import { keyframes } from 'styled-components';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { getToken } from '../redux/sagas';

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

const sockJS = new SockJS('https://api.aurora.center/ws-stomp');
const stompClient: Stomp.Client = Stomp.over(sockJS);
stompClient.debug = (str: string) => {
    console.log(str);
};
const headers = {
    Authorization: getToken() as string,
};
export const getSocket = () => ({
    socket: stompClient,
    headers,
});

export const convertWeatherIcon = (icon: string): number => {
    const iconNumber = Number(icon.substring(0, 2));
    if (iconNumber === 1) return 0;
    if (iconNumber === 2) return 1;
    if (iconNumber === 9 || iconNumber === 10) return 3;
    if (iconNumber === 11) return 4;
    if (iconNumber === 13) return 5;
    return 2;
};

export const upWeatherStick = (h: number) => keyframes`
    from {
        height: 0;
    }
    to {
        height: ${h}%;
    }
`;

export const getUrlParameter = (key: string) => {
    let name = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp(`[\\?&]${name}=([^&#]*)`);

    let results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
