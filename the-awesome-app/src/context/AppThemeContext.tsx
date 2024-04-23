import React, { useReducer } from "react";

type ThemeState  ={
    mode: string;
    dispatch?: (action: any) => void
}

export const initState: ThemeState = {
    mode: 'dark'
    
}

//create context
export const AppThemeContext = React.createContext(initState);

type AppThemeContextProviderProps = {
    children: any;

}

const reducer = (state: ThemeState, action: any) => {

    if(action.type === 'SET_DARK') {
        return {
            ...state,
            mode: 'dark'
        }
    }
    if(action.type === 'SET_LIGHT') {
        return {
            ...state,
            mode: 'light'
        }
    }
    return state;;
}

export const AppThemeContextProvider: React.FC<AppThemeContextProviderProps> = (props) => {

    //useState or useReducer
    const [state, dispatch] = useReducer(reducer, initState);


    return (
        <AppThemeContext.Provider value={{mode: state.mode, dispatch: dispatch}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}