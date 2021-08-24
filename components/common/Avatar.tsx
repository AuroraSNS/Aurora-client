import styled from 'styled-components';
import Image from 'next/image';

type Props = {
    url: string;
    size: number;
};

const Avatar = ({ url, size }: Props) => (
    <Wrapper size={size}>
        <Image
            width={size}
            height={size}
            src={url || 'https://aurora-image-bucket.s3.ap-northeast-2.amazonaws.com/aurora/defaultProfile.png'}
            alt="avatar"
        />
    </Wrapper>
);

const Wrapper = styled.div<{ size: number }>`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    img {
        border-radius: 50%;
        object-fit: cover;
    }
`;

export default Avatar;
