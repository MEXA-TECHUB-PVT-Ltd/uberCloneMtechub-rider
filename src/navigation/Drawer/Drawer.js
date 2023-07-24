import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//Screens
import {DrawerContent} from './CustomDrawer';

/////////////drawer screens////////
import MyWallet from '../../screens/DrawerScreens/MyWallet';
import UpdateProfile from '../../screens/DrawerScreens/UpdateProfile';
import UpdatePassword from '../../screens/DrawerScreens/UpdatePassword';
import ChatList from '../../screens/DrawerScreens/ChatList/ChatList';
import AccountInforamtion from '../../screens/DrawerScreens/AcountInformation';
//import ChatScreen from '../../screens/DrawerScreens/Chat/ChatScreen';

/////////stack navigations///////////
import StackNav from '../StackNav/StackNav';

const Drawer = createDrawerNavigator();

export default function Drawerroute() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="StackNav"
        component={StackNav}
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
        name="ChatList"
        component={ChatList}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="AccountInforamtion"
        component={AccountInforamtion}
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
