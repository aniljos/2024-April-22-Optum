import React from "react";

type ThemeState  ={
    mode: string;
}

export const initState: ThemeState = {
    mode: 'dark'
}

//create context
export const AppThemeContext = React.createContext(initState);