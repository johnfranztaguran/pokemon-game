import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleware = [thunk];

export default function configureStore(cb) {
  const store = createStore(
    reducers,
    applyMiddleware(...middleware)
  );

  return { store };
}
