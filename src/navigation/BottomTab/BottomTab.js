import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//////app colors/////////
import Colors from '../../utils/Colors';

//////////////////app styles///////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

///////////app fonts////////////
import {fontFamily} from '../../constants/fonts';

const Tab = createBottomTabNavigator();

//screeens
import DashboardNav from '../DashboardNav/DashboardNav';
import ProfileNav from '../ProfileNav/ProfileNav';

import Home from '../../screens/BottomTabScreens/Home';
import RidesHistory from '../../screens/BottomTabScreens/RidesHistory';
import Profile from '../../screens/BottomTabScreens/Profile';

/////////////redux////////////
import {useDispatch, useSelector} from 'react-redux';

///////svgs//////////////
import HomeIcon from '../../assets/svgs/BottomTab/Home.svg';
import ClockIcon from '../../assets/svgs/BottomTab/Clock.svg';
import UserIcon from '../../assets/svgs/BottomTab/User.svg';
import ActiveIcon from '../../assets/svgs/BottomTab/activedot.svg';

function BottomTab() {
  ///////////redux variable/////////////
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      labeled={false}
      activeColor={Colors.Appthemecolor}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: Colors.Appthemecolor,
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          height: hp(8),
          backgroundColor: Colors.Appthemecolor,
          borderTopRightRadius: wp(8),
          borderTopLeftRadius: wp(8),
          shadowColor: '#000',
          shadowOffset: {
            width: 10,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: ({color, focused}) => (
            <View style={style.maintabview}>
              <View style={[style.tab]}>
                <HomeIcon width={wp(6)} height={hp(5)} />
                {focused ? <ActiveIcon width={wp(3)} height={hp(1)} /> : null}
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="RidesHistory"
        component={RidesHistory}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View style={style.maintabview}>
              <View style={[style.tab]}>
                <View
                  style={[
                    style.tabview,
                    focused ? style.selectedtabview : null,
                  ]}>
                  <ClockIcon width={wp(6)} height={hp(6)} />
                  {focused ? <ActiveIcon width={wp(3)} height={hp(1)} /> : null}
                </View>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View style={style.maintabview}>
              <View style={[style.tab]}>
                <UserIcon width={wp(5)} height={hp(5)} />
                {focused ? <ActiveIcon width={wp(3)} height={hp(1)} /> : null}
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const style = StyleSheet.create({
  maintabview: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  tab: {
    width: wp(15),
    height: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedtabview: {
    width: wp(14),
    height: hp(4.5),
    borderColor: Colors.Appthemecolor,
    borderWidth: wp(0.3),
    borderRadius: wp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabtextcolor: {
    color: 'grey',
    fontSize: hp(1.4),
    fontFamily: fontFamily.Poppins_Extra_Light,
    width: wp(19),
    textAlign: 'center',
  },
});
export default BottomTab;
