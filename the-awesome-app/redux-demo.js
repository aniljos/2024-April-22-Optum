//import {createStore} from 'redux';

const redux = require('redux');
const createStore = redux.createStore;

// initial data
const initialState = {
  count: 10,
  message: 'Hello Redux'
}

//create reducer
const reducer = (currentState=initialState, action) => {
    //return the new state based on the action type

    if(action.type === "INC_COUNT") {

        return {
            ...currentState,
            count: currentState.count + 1
        }
    }
    if(action.type === "DECR_COUNT") {

        return {
            ...currentState,
            count: currentState.count - 1
        }
    }
    if(action.type === "UPD_COUNT") {

        return {
            ...currentState,
            count: currentState.count + action.value
        }
    }


    return currentState;

}

//Create store
const store = createStore(reducer);
console.log('Store created', store.getState());

//Subscribe to store
store.subscribe(() => {
    console.log('Store updated', store.getState());
})

//Dispatch an action
store.dispatch({type: "INC_COUNT"});
store.dispatch({type: "UPD_COUNT", value: 20});
store.dispatch({type: "DECR_COUNT"});