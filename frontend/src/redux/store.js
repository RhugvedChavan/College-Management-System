import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; 
import { loadState, saveState } from '../helpers/localstorage';

const persistedState = loadState()

export const store = configureStore({
  reducer: {
    auth: userReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
    saveState({
        auth: store.getState().auth,
    })
})