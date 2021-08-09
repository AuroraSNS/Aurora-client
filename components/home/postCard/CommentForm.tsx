import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useInput from '../../../hooks/useInput';
import { addComment } from '../../../actions/post';
import { RootState } from '../../../reducers';

const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const { addCommentDone, addCommentLoading } = useSelector((state: RootState) => state.post);
    const { accessToken } = useSelector((state: RootState) => state.user);

    const [commentText, onChangeCommentText, setCommentText] = useInput('');

    useEffect(() => {
        if (addCommentDone) {
            setCommentText('');
        }
    }, [setCommentText, addCommentDone]);

    const onSubmitComment = useCallback(() => {
        const data = {
            content: commentText,
        };
        dispatch(addComment(post._id, data, accessToken));
    }, [commentText, post, dispatch, accessToken]);

    return (
        <Form onFinish={onSubmitComment}>
            <FormItem>
                <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                <SubmitBtn
                    type="primary"
                    htmlType="submit"
                    loading={addCommentLoading}
                    disabled={commentText.length === 0}
                >
                    댓글 작성
                </SubmitBtn>
            </FormItem>
        </Form>
    );
};

const FormItem = styled(Form.Item)`
    position: relative;
    margin: 0;
`;

const SubmitBtn = styled(Button)`
    position: absolute;
    right: 0;
    bottom: -40;
    z-index: 1;
`;

export default CommentForm;
