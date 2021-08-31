import React from 'react';
import Avatar from '../../../common/Avatar';
import { Container, RecommendFriendCard, Wrapper } from './style';

const Sample = [
    {
        id: 1,
        name: '죠르디',
    },
    {
        id: 2,
        name: '앙몬드',
    },
    {
        id: 3,
        name: '스카피',
    },
];

const RecommendFriend = () => (
    <Wrapper>
        <div className="title">추천 친구</div>
        <Container>
            {Sample.map((ele) => (
                <RecommendFriendCard key={ele.id}>
                    <div>
                        <Avatar url="" size={44} />
                    </div>
                    <span>{ele.name}</span>
                    <button type="button">친구 추가</button>
                </RecommendFriendCard>
            ))}
        </Container>
    </Wrapper>
);

export default RecommendFriend;
