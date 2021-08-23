/* eslint-disable no-param-reassign */
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removePostRequest } from '../../../actions/post';
import useToggle from '../../../hooks/useToggle';
import { IComment } from '../../../interfaces/data/comment';
import { IPost } from '../../../interfaces/data/post';
import { createSampleComments } from '../../../util/sample';
import PostCardPresentert from './PostCardPresentert';

type Props = {
    post: IPost;
};

const PostCardContainer = ({ post }: Props) => {
    const dispatch = useDispatch();
    const [commentBox, onChangeCommentBox] = useToggle(false);
    const [comments, setComments] = useState<IComment[] | null>(null);
    const [modal, setModal] = useState(false);
    const [moreOptions, setMoreOptions] = useState(false);
    const [removeConfirm, setRemoveConfirm] = useState(false);
    const [modifyModal, setModifyModal] = useState(false);
    // const { me, accessToken } = useSelector((state) => state.user);

    // const [editMode, setEditMode] = useState(false);

    // // 포스트 수정
    // const onClickUpdate = useCallback(() => {
    //     setEditMode(true);
    // }, []);
    // const onCancelUpdate = useCallback(() => {
    //     setEditMode(false);
    // }, []);
    // const onChangePost = useCallback(
    //     (editText) => () => {
    //         const data = new FormData();
    //         data.append('content', editText);
    //         dispatch(updatePost(post._id, data, accessToken));
    //     },
    //     [post],
    // );

    // // 좋아요 기능
    // const onLike = useCallback(() => {
    //     dispatch(likePost(post._id, accessToken));
    // }, []);
    // const onUnlike = useCallback(() => {
    //     dispatch(unlikePost(post._id, accessToken));
    // }, []);

    // // 댓글 기능
    // const [commentFormOpened, setCommentFormOpened] = useState(false);
    // const onToggleComment = useCallback(() => {
    //     setCommentFormOpened((prev) => !prev);
    // }, []);

    useEffect(() => {
        setComments(createSampleComments(post.commentCnt));
    }, [post.commentCnt]);

    const openPostCardModal = useCallback(() => {
        setModal(true);
    }, []);
    const closePostCardModal = useCallback(() => {
        setModal(false);
    }, []);
    const openModifyModal = useCallback(() => {
        setModifyModal(true);
    }, []);
    const closeModifyModal = useCallback(() => {
        setModifyModal(false);
    }, []);

    const moreOptionsToggle = useCallback(() => {
        setMoreOptions((prev) => !prev);
    }, []);

    const openRemoveConfirm = useCallback(() => {
        setRemoveConfirm(true);
    }, []);

    const removeOk = useCallback(
        (id: number) => {
            dispatch(removePostRequest(id));
            setRemoveConfirm(false);
            setMoreOptions(false);
        },
        [dispatch],
    );

    const removeCancel = useCallback(() => {
        setRemoveConfirm(false);
    }, []);

    useEffect(() => {
        function scrollTo(element, to, duration) {
            let start = element.scrollTop;
            let change = to - start;
            let currentTime = 0;
            let increment = 20;

            let animateScroll = function () {
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
        function easeInOutQuad(t, b, c, d) {
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
            post={post}
            commentBox={commentBox}
            onChangeCommentBox={onChangeCommentBox}
            comments={comments as IComment[]}
            modal={modal}
            openPostCardModal={openPostCardModal}
            closePostCardModal={closePostCardModal}
            moreOptions={moreOptions}
            moreOptionsToggle={moreOptionsToggle}
            modifyModal={modifyModal}
            openModifyModal={openModifyModal}
            closeModifyModal={closeModifyModal}
            removeConfirm={removeConfirm}
            openRemoveConfirm={openRemoveConfirm}
            removeOk={removeOk}
            removeCancel={removeCancel}
        />
    );
};
export default PostCardContainer;
