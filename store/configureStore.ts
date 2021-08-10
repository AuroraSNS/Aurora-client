import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
import { UserState } from '../interfaces/data/user';
import { PostState } from '../interfaces/data/post';
import rootSaga from '../sagas';

export interface CombinedState {
    index: string;
    user: UserState;
    post: PostState;
}

const configureStore: MakeStore<CombinedState> = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer =
        process.env.NEXT_PUBLIC_NODE_ENV === 'production'
            ? compose(applyMiddleware(...middlewares))
            : composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper<CombinedState>(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;
