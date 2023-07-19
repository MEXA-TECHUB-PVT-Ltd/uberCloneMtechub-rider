// Navigation.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

///////////////redux
import {Provider} from 'react-redux';
import {Store} from '../redux/store';

///////////////////navigation prop///////////////
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import AuthNav from './AuthNav/AuthNav';

const Navigation = ({isAuthenticated}) => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AuthNav />
        {/* <DashboardNav/>
 <ProfileNav/> */}
        {/* {isAuthenticated ? <Drawerroute /> : <AuthNav />} */}
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
