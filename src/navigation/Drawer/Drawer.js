import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//Screens
import {DrawerContent} from './CustomDrawer';

/////////////drawer screens////////
import MyWallet from '../../screens/DrawerScreens/MyWallet';
import History from '../HistoryNav/HistoryNav';
import UpdateProfile from '../../screens/DrawerScreens/UpdateProfile';
import UpdatePassword from '../../screens/DrawerScreens/UpdatePassword';
import ProfileNav from '../ProfileNav/ProfileNav';
import ChatList from '../../screens/DrawerScreens/ChatList/ChatList';

import BottomTab from '../BottomTab/BottomTab';
//rimport ChatScreen from '../../screens/DrawerScreens/Chat/ChatScreen';

const Drawer = createDrawerNavigator();

export default function Drawerroute() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="BottomTab"
        component={BottomTab}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="MyWallet"
        component={MyWallet}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="History"
        component={History}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="UpdateProfile"
        component={UpdateProfile}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="UpdatePassword"
        component={UpdatePassword}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={ProfileNav}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="ChatList"
        component={ChatList}
      />
      {/* <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="ChatScreen"
        component={ChatScreen}
      /> */}
    </Drawer.Navigator>
  );
}
