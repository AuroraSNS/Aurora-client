import { END } from 'redux-saga';
import nookies from 'nookies';
import HomeContainer from '../components/home/HomeContainer';
import wrapper from '../redux/create';
import { loadAllPostsRequest, loadAllStatisticsRequest } from '../redux/modules/post';
import { loadProfileRequest } from '../redux/modules/user';

const Home = () => <HomeContainer />;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookies = nookies.get(context);
    if (cookies.accessToken) {
        context.store.dispatch(loadProfileRequest(cookies.accessToken));
    }
    context.store.dispatch(loadAllStatisticsRequest());
    context.store.dispatch(loadAllPostsRequest(0, []));
    context.store.dispatch(END);
    await context.store.sagaTask?.toPromise();
});

export default Home;
