import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { topRatingsMiddleware } from './middlewares';

const initMiddleware = createSagaMiddleware();

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(
        applyMiddleware(initMiddleware, topRatingsMiddleware)
    )
);

initMiddleware.run(rootSaga);

export default store;
