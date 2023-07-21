import {combineReducers, configureStore} from '@reduxjs/toolkit';

/////////reducer/////////////
import CreateProfileReducer from './CreateProfileSlice';
import UpdateProfileReducer from './UpdateProfileSlice';
import ImagePathReducer from './ImagePathSlice'

export const Store = configureStore({
  reducer: {
    createProfile: CreateProfileReducer,
    updateProfile: UpdateProfileReducer,
    image:ImagePathReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
