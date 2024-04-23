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

export const authReducer = (currentState=initialState, action: any) => {

    if(action.type === 'SET_AUTH') {
        //TODO: return new state
    }
    return currentState;
}
