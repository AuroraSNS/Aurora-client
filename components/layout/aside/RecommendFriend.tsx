import styled from 'styled-components';

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
        <Title>추천 친구</Title>
        <Container>
            {Sample.map((ele) => (
                <FriendCard key={ele.id}>
                    <div>
                        <img src="/images/profile-thumbnail.jpg" alt="friendAvatar" />
                    </div>
                    <span>{ele.name}</span>
                    <button type="button">친구 추가</button>
                </FriendCard>
            ))}
        </Container>
    </Wrapper>
);

const Wrapper = styled.section`
    /* border: 1px solid gray; */
    width: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 69px;
`;

const Title = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 26px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const FriendCard = styled.div`
    width: 63px;
    height: 111px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    div {
        width: 58px;
        height: 58px;
        background: #f0f2f5;
        border-radius: 10px;
        padding: 10px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    span {
        font-size: 12px;
    }
    button {
        color: #ffffff;
        font-size: 10px;
        background: linear-gradient(106.76deg, #d3bafc 3.84%, #b9d8f6 89.38%);
        border-radius: 30px;
    }
`;

export default RecommendFriend;
