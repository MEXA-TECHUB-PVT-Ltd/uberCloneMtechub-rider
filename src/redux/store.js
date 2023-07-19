import {combineReducers, configureStore} from '@reduxjs/toolkit';

/////////reducer/////////////
import CreateProfileReducer from './CreateProfileSlice'


export const Store = configureStore({
  reducer: {
    createProfile:CreateProfileReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
});
