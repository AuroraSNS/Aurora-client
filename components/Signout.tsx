import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { signoutAction } from '../actions/user.ts';

const Signout = () => {
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(signoutAction());
    };

    return <SignoutButton onClick={handleLogout}>로그아웃</SignoutButton>;
};

const SignoutButton = styled.button`
    margin-left: 0.8rem;
    display: inline;
    font-size: 0.9rem;
    border-style: none;
    border-radius: 1.5rem;
    height: 2.4rem;
    width: 4.8rem;
    background-color: #fff;
    color: #555;
    cursor: pointer;
    &:hover {
        background-color: #a18afc;
        opacity: 0.8;
        color: #fff;
    }
`;

export default Signout;
