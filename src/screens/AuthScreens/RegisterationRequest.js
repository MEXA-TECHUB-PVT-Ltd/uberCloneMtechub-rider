import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../components/Header/CustomHeader';
import PersonalDetail from '../../components/Register Request/PersonalDetail';
import VehicleDetail from '../../components/Register Request/VehicleDetail';

//////////////////ICONS/////////////////
import Icon from 'react-native-vector-icons/Ionicons';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////colors/////////////
import Colors from '../../utils/Colors';

//////////app fonts///////
import {fontFamily} from '../../constants/fonts';

////////////////////redux////////////
import {useSelector, useDispatch} from 'react-redux';

const RegistrationRequest = ({navigation}) => {
  ////////////////redux/////////////////
  const dispatch = useDispatch();
  const {personal, vehicle, links, profile_Image, cover_Image} = useSelector(
    state => state.createProfile,
  );
  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: wp(8)}]}>
      <CustomHeader
        headerlabel={'Registration Request'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={[
            styles.circleview,
            {
              backgroundColor:
                personal === true  || vehicle === true ? Colors.Appthemecolor : '#EFEFF4',
            },
          ]}></View>
        <View
          style={[
            styles.lineview,
            {
              backgroundColor:
              vehicle === true ? Colors.Appthemecolor : '#EFEFF4',
            },
          ]}></View>
        <View
          style={[
            styles.circleview,
            {
              backgroundColor:
              vehicle === true ? Colors.Appthemecolor : '#EFEFF4',
            },
          ]}></View>
        <View
          style={[
            styles.lineview,
            {
              backgroundColor:
                links === true ? Colors.Appthemecolor : '#EFEFF4',
            },
          ]}></View>
        <View
          style={[
            styles.circleview,
            {
              backgroundColor:
                links === true ? Colors.Appthemecolor : '#EFEFF4',
            },
          ]}></View>
        <View
          style={[
            styles.lineview,
            {
              backgroundColor:
                links === true ? Colors.Appthemecolor : '#EFEFF4',
            },
          ]}></View>
        <View
          style={[
            styles.circleview,
            {
              backgroundColor:
                links === true ? Colors.Appthemecolor : '#EFEFF4',
            },
          ]}></View>
      </View>

      {personal === true? (
        <PersonalDetail />
      ) : vehicle === true ? (
        <VehicleDetail />
      ) : null}
    </SafeAreaView>
  );
};

export default RegistrationRequest;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(8),
  },
  //////////////////signin//////////////////
  forgettextview: {
    alignItems: 'flex-end',
    width: wp(40),
  },
  forgettext: {
    color: '#000',
    fontSize: hp(1.5),
    fontFamily: fontFamily.Nunito_Bold,
  },
  remembermetext: {
    color: '#979797',
    fontSize: hp(1.4),
    fontFamily: fontFamily.Nunito_SemiBold,
  },
  circleview: {
    width: wp(6.5),
    height: hp(3),
    borderRadius: wp(20),
    backgroundColor: Colors.Appthemecolor,
  },
  lineview: {
    width: wp(19.6),
    height: hp(0.7),
    backgroundColor: Colors.Appthemecolor,
  },
});
