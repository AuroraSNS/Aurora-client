import { useRouter } from 'next/dist/client/router';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import PostRegisterBarPresenter from './PostRegisterBarPresenter';

const PostRegisterBarContainer = () => {
    const router = useRouter();
    const { me } = useSelector((state: RootState) => state.user);
    const { addPostDone } = useSelector((state: RootState) => state.post);
    const [modal, setModal] = useState(false);

    const openPostCardModal = useCallback(() => {
        // if (me) {
        setModal(true);
        // } else {
        //     router.push('/login');
        // }
    }, []);

    const closePostCardModal = useCallback(() => {
        setModal(false);
    }, []);

    useEffect(() => {
        if (addPostDone) {
            setModal(false);
        }
    }, [addPostDone]);

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
