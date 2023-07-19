// Navigation.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

///////////////redux 
import { Provider } from 'react-redux';
import { Store } from '../redux/store';

///////////////////navigation prop///////////////
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import AuthNav from './AuthNav/AuthNav';
import Drawerroute from './Drawer/Drawer';

const Navigation = ({isAuthenticated}) => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
 
 <AuthNav />
      {/* {isAuthenticated ? <Drawerroute /> : <AuthNav />} */}
    </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
