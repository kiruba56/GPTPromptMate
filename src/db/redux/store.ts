import { combineReducers, Middleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/auth.slice';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const middlewares:Middleware[] = [];
 
// only to log redux actions in dev env
if (process.env.NODE_ENV === `development`) {
   const { logger } = require('redux-logger');
   middlewares.push(logger);
};


const reducers = combineReducers({
    auth:authSlice,
});
 

const persistConfig = {
    key: 'prompt_mate_root',
    version:1,
    // blacklist:['temp'],
    // whitelist:[],
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware:middlewares
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
