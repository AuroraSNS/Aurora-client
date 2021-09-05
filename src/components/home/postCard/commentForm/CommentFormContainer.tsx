import { useRouter } from 'next/router';
import React, { FormEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { ISendNoti } from '../../../../interfaces/notification';
import { IPost } from '../../../../interfaces/post';
import { addCommentRequest } from '../../../../redux/modules/comment';
import { RootState } from '../../../../redux/modules/reducer';
import { getSocket } from '../../../../util/util';
import CommentFormPresenter from './CommentFormPresenter';

type Props = {
    postId: number;
};

const CommentFormContainer = ({ postId }: Props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { addCommentDone } = useSelector((state: RootState) => state.comment);
    const [content, onChangeContent, setContent] = useInput('');

    useEffect(() => {
        if (addCommentDone) {
            setContent('');
        }
    }, [addCommentDone]);

    const { socket, headers } = getSocket();

    const { me } = useSelector((state: RootState) => state.user);
    const { Posts } = useSelector((state: RootState) => state.post);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (me) {
                dispatch(addCommentRequest(postId, content));

                const you = Posts.find((post: IPost) => post.id === postId).auth;

                const newNoti: ISendNoti = {
                    type: 'POST',
                    from: me.id,
                    to: you.id,
                    targetId: postId,
                    message: `${me.name}님이 ${you.name}님 게시물에 댓글을 달았습니다.`,
                };
                socket.send('/pub/notification', headers, JSON.stringify(newNoti));
            } else {
                router.push('/login');
            }
        },
        [content],
    );
    return <CommentFormPresenter content={content} onChangeContent={onChangeContent} onSubmit={onSubmit} />;
};

export default CommentFormContainer;
