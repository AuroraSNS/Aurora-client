/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { IMe } from '../../../interfaces/data/user';
import Avatar from '../../common/Avatar';
import { Wrapper } from './style';

type Props = {
    me: IMe;
    msgTheme: string;
};

const MainChatPresenter = ({ me, msgTheme }: Props) => (
    <Wrapper msgTheme={msgTheme}>
        <div className="chat__timestamp">Tuesday, June 30, 2020</div>
        <div className="message-row">
            <Avatar url={me.avatar} size={36} />
            <div className="message-row__content">
                <div className="message__info">
                    <div className="message__bubble">
                        <span>Hi ~</span>
                    </div>
                    <span className="message__time">20:08</span>
                </div>
                <div className="message__info">
                    <div className="message__bubble">
                        <span>Hi ~ 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</span>
                    </div>
                    <span className="message__time">20:08</span>
                </div>
            </div>
        </div>
        <div className="message-row message-row__own">
            <Avatar url={me.avatar} size={36} />
            <div className="message-row__content">
                <div className="message__info">
                    <div className="message__bubble">
                        <span>Hi ~ How r u?</span>
                    </div>
                    <span className="message__time">20:08</span>
                </div>
            </div>
        </div>
    </Wrapper>
);

export default MainChatPresenter;
