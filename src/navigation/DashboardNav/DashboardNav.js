import * as React from 'react';

///////////////////navigation prop///////////////
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Home from '../../screens/BottomTabScreens/Home';
import Notification from '../../screens/StackScreens/Dashboard/Notification';
import OnGoingTrip from '../../screens/StackScreens/Dashboard/OnGoingTrip';

const Stack = createNativeStackNavigator();
function DashboardNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen      
        name="Home" 
        component={Home}
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
    </Stack.Navigator>
  );
}

export default DashboardNav;
