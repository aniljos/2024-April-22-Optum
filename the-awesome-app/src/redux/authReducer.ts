import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {

    isAuthenticated: boolean;
    userName: string;
    accessToken: string;
    refreshToken: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    userName: '',
    accessToken: '',
    refreshToken: ''
}

// export const authReducer = (currentState=initialState, action: any) => {

//     if(action.type === 'SET_AUTH') {
//         return action.payload;
//     }
//     return currentState;
// }

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<AuthState>) => {

            //state = action.payload;
            state.userName = action.payload.userName;
            state.isAuthenticated = action.payload.isAuthenticated;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        }
    }
});

export const {setAuth} = authSlice.actions;
export const authReducer = authSlice.reducer;

