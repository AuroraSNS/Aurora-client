import styled from 'styled-components';
import { IconFacebook } from '../Icon';

const FacebookOAuthBtn = () => (
    <Wrapper>
        <button type="button">
            <IconFacebook />
            <span>페이스북으로 로그인</span>
        </button>
    </Wrapper>
);

const Wrapper = styled.div`
    margin-bottom: 10px;
    border: solid 1px transparent;
    border-radius: 50px;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #a18afc, #b6d8f8, #ffbebe);
    background-origin: border-box;
    background-clip: content-box, border-box;
    display: flex;
    justify-content: center;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 50px;
        font-size: 12px;
        width: 320px;
        height: 45px;
        &:hover {
            font-size: 13px;
        }
        span {
            margin-left: 8px;
        }
    }
`;

export default FacebookOAuthBtn;
