import HomeContainer from '../components/home/HomeContainer';

const Home = () => <HomeContainer />;

// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//     context.store.dispatch(loadProfileRequest('ddd'));
//     context.store.dispatch(loadFirstPostsRequest());
//     context.store.dispatch(END);
//     await context.store.sagaTask?.toPromise();
// });

export default Home;
