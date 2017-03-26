import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import allSagas from '../sagas';

function configureStoreProd(initialState) {
  const saga = createSagaMiddleware();
  const middlewares = [
    saga,
  ];

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
  saga.run(function * () {
    yield allSagas;
  }); 
  return store;
}


function configureStoreDev(initialState) {
  const saga = createSagaMiddleware();
  const middlewares = [
    reduxImmutableStateInvariant(),
    saga,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  saga.run(function * () {
    yield allSagas;
  }); 
  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;