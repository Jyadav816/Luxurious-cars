import thunk from 'redux-thunk';
import { carStore} from './store/carStore'
import { alretStore} from './store/alretStore'
import { createStore,applyMiddleware,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    
});
const rootReducer = combineReducers({
    alretStore,
    carStore
})

const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
     
    )
  );

  export default store