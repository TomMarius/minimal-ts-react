import { configureStore } from '@reduxjs/toolkit';
import {
    type TypedUseSelectorHook,
    useDispatch as originalUseDispatch,
    useSelector as originalUseSelector,
} from 'react-redux';

import { authReducer } from './auth';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export type State = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;

export const useDispatch = () => originalUseDispatch<Dispatch>();

export const useSelector: TypedUseSelectorHook<State> = originalUseSelector;
