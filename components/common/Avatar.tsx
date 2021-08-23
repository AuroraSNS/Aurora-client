import styled from 'styled-components';

type Props = {
    url: string;
    size: number;
};

const Avatar = ({ url, size }: Props) => (
    <Wrapper size={size}>
        <img src={url || '/images/defaultProfile.png'} alt="avatar" />
    </Wrapper>
);

const Wrapper = styled.div<{ size: number }>`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    img {
        width: 100%;
        border-radius: 50%;
    }
`;

export default Avatar;
