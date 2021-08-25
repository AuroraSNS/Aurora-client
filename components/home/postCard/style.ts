import styled from 'styled-components';

export const Footer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    svg {
        cursor: pointer;
    }
    .like-cnt {
        ${({ theme }) => theme.textStyles.P12}
        margin-left: 5px;
        margin-right: 10px;
    }
    .comment-cnt {
        ${({ theme }) => theme.textStyles.P12}
        color: #707070;
        cursor: pointer;
    }
    .form-wrapper {
        margin: 0 20px;
        flex: 1;
    }

    .more-options {
        display: flex;
        flex-direction: column;
        ${({ theme }) => theme.textStyles.P12}
        position: absolute;
        right: 0;
        bottom: -90px;
        background: #fff;
        box-shadow: 0 0 10px rgba(117, 117, 117, 0.25);
        border-radius: 10px;
        padding: 20px 40px 20px 15px;
        div {
            cursor: pointer;
        }
        div:first-child {
            margin-bottom: 8px;
        }
        z-index: 9;
    }
    @media screen and (max-width: 768px) {
        .comment-cnt {
            font-size: 11px;
        }
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    div.imgBox {
        position: relative;
        width: 100%;
        max-height: 625px;
        img {
            object-fit: contain;
        }
    }
    & > div:not(:last-child) {
        margin-right: 9px;
    }
    .double div {
        width: 45%;
    }
    .more {
        & > div:nth-child(3) {
            width: 20%;
            overflow: hidden;
            & > span {
                top: 35%;
                left: 30%;
                position: absolute;
                font-size: 36px;
                z-index: 1;
            }
        }
    }
`;

export const Wrapper = styled.article<{ mood: string }>`
    /* border: 1px solid gray; */
    width: 100%;
    border-radius: 20px;
    margin: 15px;
    padding: 37px 46px;
    box-shadow: 0 0 30px
        ${(props) => {
            if (props.mood === 'sun') return 'rgba(237, 154, 154, 0.5)';
            if (props.mood === 'cloud') return 'rgba(177, 176, 176, 0.7)';
            if (props.mood === 'rain') return 'rgba(154, 198, 240, 0.5)';
            if (props.mood === 'moon') return 'rgba(172, 141, 224, 0.5)';
        }};
`;

export const Body = styled.div`
    /* border: 1px solid gray; */
    ${({ theme }) => theme.textStyles.P16}
    margin: 30px 0;
`;
