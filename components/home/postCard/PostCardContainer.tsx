/* eslint-disable no-param-reassign */
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePostRequest } from '../../../actions/post';
import useToggle from '../../../hooks/useToggle';
import { IPost } from '../../../interfaces/data/post';
import { RootState } from '../../../reducers';
import PostCardPresentert from './PostCardPresentert';

type Props = {
    post: IPost;
};

const PostCardContainer = ({ post }: Props) => {
    const dispatch = useDispatch();

    const { me } = useSelector((state: RootState) => state.user);
    const { modifyPostDone } = useSelector((state: RootState) => state.post);

    const [commentBox, onChangeCommentBox] = useToggle(false);
    const [showModal, showModalToggle] = useToggle(false);
    const [showMoreOptions, showMoreOptionsToggle] = useToggle(false);
    const [showModifyModal, showModifyModalToggle, setShowModifyModal] = useToggle(false);
    const [showRemoveModal, showRemoveModalToggle] = useToggle(false);

    const removeOk = useCallback(
        (id: number) => {
            dispatch(removePostRequest(id));
            showRemoveModalToggle();
            showMoreOptionsToggle();
        },
        [dispatch],
    );

    useEffect(() => {
        if (modifyPostDone) {
            setShowModifyModal(false);
        }
    }, [modifyPostDone]);

    useEffect(() => {
        function scrollTo(element: HTMLElement, to: number, duration: number) {
            let start = element.scrollTop;
            let change = to - start;
            let currentTime = 0;
            let increment = 20;

            const animateScroll = () => {
                currentTime += increment;
                let val = easeInOutQuad(currentTime, start, change, duration);
                element.scrollTop = val;
                if (currentTime < duration) {
                    setTimeout(animateScroll, increment);
                }
            };
            animateScroll();
        }

        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        function easeInOutQuad(t: number, b: number, c: number, d: number) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t -= 1;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        const toTopEl = document.querySelector('#to-top');
        toTopEl?.addEventListener('click', () => {
            scrollTo(document.documentElement, 0, 1250);
        });
    }, []);

    return (
        <PostCardPresentert
            isMe={me?.id === post.auth.id}
            post={post}
            commentBox={commentBox}
            onChangeCommentBox={onChangeCommentBox}
            showModal={showModal}
            showModalToggle={showModalToggle}
            showMoreOptions={showMoreOptions}
            showMoreOptionsToggle={showMoreOptionsToggle}
            showModifyModal={showModifyModal}
            showModifyModalToggle={showModifyModalToggle}
            showRemoveModal={showRemoveModal}
            showRemoveModalToggle={showRemoveModalToggle}
            removeOk={removeOk}
        />
    );
};
export default PostCardContainer;
