import { combineReducers} from 'redux';
import { authReducer } from './authReducer';
import {configureStore} from '@reduxjs/toolkit'


//create reducer=> multiple reducers => root reducer
const rootReducer = combineReducers({
    auth: authReducer,
});

//create store
// export const store = createStore(
//                                 rootReducer, 
//                                 (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());


export const store = configureStore({
    reducer: rootReducer,
    devTools: true
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;