import * as React from 'react';
import {View, Text} from 'react-native';

///////////////////navigation prop///////////////
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Screens

////////////////////bottomtab
import BottomTab from '../BottomTab/BottomTab';

//////////////////dashboard////////////////
import Notification from '../../screens/StackScreens/Dashboard/Notification';
import OnGoingTrip from '../../screens/StackScreens/Dashboard/OnGoingTrip';

///////////////Rides History/////
import RidesDetail from '../../screens/StackScreens/RidesHistory/RidesDetail';

////////////////////Profile////////////////
import ChangeLanguage from '../../screens/StackScreens/Profile/ChangeLanguage';
import TermsCondition from '../../screens/StackScreens/Profile/Terms&Conditions';
import PolicyPrivacy from '../../screens/StackScreens/Profile/PolicyPrivacy';
import MyRattings from '../../screens/StackScreens/Profile/MyRattings';
import MyProfile from '../../screens/StackScreens/Profile/MyProfile';

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OnGoingTrip"
        component={OnGoingTrip}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PolicyPrivacy"
        component={PolicyPrivacy}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TermsCondition"
        component={TermsCondition}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangeLanguage"
        component={ChangeLanguage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyRattings"
        component={MyRattings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RidesDetail"
        component={RidesDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNav;
