import { END } from 'redux-saga';
import nookies from 'nookies';
import NotificationContainer from '../components/notification/NotificationContainer';
import { loadProfileRequest } from '../actions/user';
import wrapper from '../store/configureStore';
import { loadAllStatisticsRequest } from '../actions/post';

const Notification = () => <NotificationContainer />;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookies = nookies.get(context);
    if (cookies.accessToken) {
        context.store.dispatch(loadProfileRequest(cookies.accessToken));
    }
    context.store.dispatch(loadAllStatisticsRequest());
    context.store.dispatch(END);
    await context.store.sagaTask?.toPromise();
});

export default Notification;
