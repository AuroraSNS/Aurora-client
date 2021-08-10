import Link from 'next/link';
import styled from 'styled-components';
import { IconFriend, IconHome, IconMessage, IconNotification } from '../Icon';

type Props = {
    page: string;
};

const Navigation = ({ page }: Props) => (
    <Navbar>
        <ul>
            <li>
                <Link href="/">
                    <Tap name="Home" selected={page}>
                        <IconHome />
                        <span>피드</span>
                    </Tap>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <Tap name="Message" selected={page}>
                        <IconMessage />
                        <span>메시지</span>
                    </Tap>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <Tap name="Notification" selected={page}>
                        <IconNotification />
                        <span>알림</span>
                    </Tap>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <Tap name="Friend" selected={page}>
                        <IconFriend />
                        <span>친구</span>
                    </Tap>
                </Link>
            </li>
        </ul>
    </Navbar>
);

const Navbar = styled.nav`
    /* border: 1px solid black; */
    flex: none;
    width: 230px;
    align-items: center;
    position: fixed;
    margin-top: 50px;
    ul {
        display: flex;
        flex-direction: column;
    }
    @media screen and (max-width: 768px) {
        bottom: 0;
        width: 100%;
        ul {
            flex-direction: row;
            width: 100%;
            justify-content: space-evenly;
        }
        span {
            display: none;
        }
    }
`;

const Tap = styled.a<{ selected: string; name: string }>`
    /* border: 1px solid gray; */
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 37px;
    display: flex;
    align-items: center;
    color: ${(props) => props.selected === props.name && '#d3bafc'};
    svg {
        width: 40px;
        height: 40px;
        padding: 8px 6px;
        border-radius: 10px;
        margin-right: 22px;
        background: ${(props) =>
            props.selected === props.name ? 'linear-gradient(106.76deg, #d3bafc 3.84%, #b9d8f6 89.38%);' : '#f0f2f5'};
    }
    svg path {
        fill: ${(props) => props.selected === props.name && 'white'};
    }
    &:hover {
        span {
            color: #d3bafc;
        }
        svg {
            background: linear-gradient(106.76deg, #d3bafc 3.84%, #b9d8f6 89.38%);
        }
        svg path {
            fill: white;
        }
    }
`;

export default Navigation;
