import { END } from 'redux-saga';
import nookies from 'nookies';
import ChatContainer from '../components/chat/ChatContainer';
import wrapper from '../redux/create';

import { loadRoomsRequest } from '../redux/modules/chat';
import { loadProfileRequest } from '../redux/modules/user';
import { loadAllStatisticsRequest } from '../redux/modules/post';

const Chat = () => <ChatContainer />;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookies = nookies.get(context);
    if (cookies.accessToken) {
        context.store.dispatch(loadProfileRequest(cookies.accessToken));
        context.store.dispatch(loadRoomsRequest(cookies.accessToken));
    }
    context.store.dispatch(loadAllStatisticsRequest());
    context.store.dispatch(END);
    await context.store.sagaTask?.toPromise();
});

export default Chat;
