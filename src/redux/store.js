import {combineReducers, configureStore} from '@reduxjs/toolkit';

/////////reducer/////////////
import CreateProfileReducer from './CreateProfileSlice';
import UpdateProfileReducer from './UpdateProfileSlice';

export const Store = configureStore({
  reducer: {
    createProfile: CreateProfileReducer,
    updateProfile: UpdateProfileReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
