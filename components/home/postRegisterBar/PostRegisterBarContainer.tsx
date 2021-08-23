import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import PostRegisterBarPresenter from './PostRegisterBarPresenter';

const PostRegisterBarContainer = () => {
    const router = useRouter();
    const { me } = useSelector((state: RootState) => state.user);
    const [modal, setModal] = useState(false);

    const openPostCardModal = () => {
        if (me) {
            setModal(true);
        } else {
            router.push('/login');
        }
    };
    const closePostCardModal = () => {
        console.log('close');
        setModal(false);
    };
    return (
        <PostRegisterBarPresenter
            openPostCardModal={openPostCardModal}
            closePostCardModal={closePostCardModal}
            me={me}
            modal={modal}
        />
    );
};
export default PostRegisterBarContainer;
