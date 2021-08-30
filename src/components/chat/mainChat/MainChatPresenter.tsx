/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { IContent } from '../../../interfaces/data/chat';
import { IMe } from '../../../interfaces/data/user';
import Avatar from '../../common/Avatar';
import { Wrapper } from './style';

type Props = {
    me: IMe;
    contents: IContent[];
    msgTheme: string;
};

const MainChatPresenter = ({ me, contents, msgTheme }: Props) => (
    <Wrapper msgTheme={msgTheme}>
        <div className="chat__timestamp">Tuesday, June 30, 2020</div>
        {contents &&
            contents.map((content: IContent) => (
                <div key={content.id} className={`message-row ${content.sender.id === me.id && 'message-row__own'}`}>
                    <Avatar url={me.avatar} size={36} />
                    <div className="message-row__content">
                        <div className="message__info">
                            <div className="message__bubble">
                                <span>{content.message}</span>
                            </div>
                            <span className="message__time">{content.timeStamp}</span>
                        </div>
                    </div>
                </div>
            ))}
    </Wrapper>
);

export default MainChatPresenter;
