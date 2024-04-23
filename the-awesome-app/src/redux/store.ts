import {createStore, combineReducers} from 'redux';
import { authReducer } from './authReducer';


//create reducer=> multiple reducers => root reducer
const rootReducer = combineReducers({
    auth: authReducer,
});

//create store
export const store = createStore(
                                rootReducer, 
                                (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());