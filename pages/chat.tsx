import { END } from 'redux-saga';
import nookies from 'nookies';
import ChatContainer from '../components/chat/ChatContainer';
import wrapper from '../store/configureStore';
import { loadProfileRequest } from '../actions/user';
import { loadAllStatisticsRequest } from '../actions/post';

const Chat = () => <ChatContainer />;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookies = nookies.get(context);
    if (cookies.accessToken) {
        context.store.dispatch(loadProfileRequest(cookies.accessToken));
    }
    context.store.dispatch(loadAllStatisticsRequest());
    context.store.dispatch(END);
    await context.store.sagaTask?.toPromise();
});

export default Chat;
