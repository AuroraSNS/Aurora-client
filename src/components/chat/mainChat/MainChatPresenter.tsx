/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MutableRefObject } from 'react';
import { IContent } from '../../../interfaces/chat';
import { IMe } from '../../../interfaces/user';
import Avatar from '../../common/Avatar';
import { Wrapper } from './style';

type Props = {
    time: string;
    me: IMe;
    contents: IContent[];
    msgTheme: string;
    scrollRef: React.RefObject<HTMLDivElement> | null;
};

const MainChatPresenter = ({ time, me, contents, msgTheme, scrollRef }: Props) => (
    <Wrapper msgTheme={msgTheme} ref={scrollRef}>
        <div className="chat__timestamp">{time}</div>
        {contents.length > 0 ? (
            contents.map((content: IContent) => (
                <div key={content.id} className={`message-row ${content.sender.id === me.id && 'message-row__own'}`}>
                    <Avatar url={me.avatar} size={36} />
                    <div className="message-row__content">
                        <div className="message__info">
                            <div className="message__bubble">
                                <span>{content.message}</span>
                            </div>
                            <span className="message__time">{content.timeStamp.slice(11, 16)}</span>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div className="empty">대화방 선택</div>
        )}
    </Wrapper>
);

export default MainChatPresenter;
