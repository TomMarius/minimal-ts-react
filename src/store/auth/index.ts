import { type Reducer } from '@reduxjs/toolkit';

export interface LoggedInState {
    isLoggedIn: true;
    user: {
        email: string;
    };
}

export interface LoggedOutState {
    isLoggedIn: false;
    user: null;
}

export type AuthState = LoggedInState | LoggedOutState;

export interface LogInAction {
    type: 'LOG_IN';
    payload: {
        email: string;
        password: string;
    };
}

export interface LogOutAction {
    type: 'LOG_OUT';
}

export type AuthAction = LogInAction | LogOutAction;

export const INITIAL_STATE: AuthState = { isLoggedIn: false, user: null };

export const authReducer: Reducer<AuthState, AuthAction> = (
    state = INITIAL_STATE,
    action,
) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };

        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };

        default:
            return state;
    }
};
