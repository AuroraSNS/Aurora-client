import React from 'react';
import Avatar from '../../../common/Avatar';
import { Container, FriendCard, Wrapper } from './style';

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
                <FriendCard key={ele.id}>
                    <Avatar url="" size={58} />
                    <span>{ele.name}</span>
                    <button type="button">친구 추가</button>
                </FriendCard>
            ))}
        </Container>
    </Wrapper>
);

export default RecommendFriend;
