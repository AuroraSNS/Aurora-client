import { IComment } from '../../../../interfaces/data/comment';
import { IPost } from '../../../../interfaces/data/post';
import PostCardModalPresenter from './PostCardModalPresenter';

type Props = {
    post: IPost;
    comments: IComment[];
    onClose: () => void;
};

const PostCardModalContainer = ({ post, comments, onClose }: Props) => (
    <PostCardModalPresenter onClose={onClose} post={post} comments={comments} />
);
export default PostCardModalContainer;
