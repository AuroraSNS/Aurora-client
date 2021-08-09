import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

export interface CombinedState {
    index: string;
    user: UserState;
    post: PostState;
}

const configureStore: MakeStore<CombinedState> = () => {
    const middlewares = [thunk];
    const enhancer =
        process.env.NEXT_PUBLIC_NODE_ENV === 'production'
            ? compose(applyMiddleware(...middlewares))
            : composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, enhancer);
    return store;
};

const wrapper = createWrapper<CombinedState>(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;
