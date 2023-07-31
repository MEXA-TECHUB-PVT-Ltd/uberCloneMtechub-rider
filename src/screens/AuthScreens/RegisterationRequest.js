import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../components/Header/CustomHeader';
import PersonalDetail from '../../components/Register Request/PersonalDetail';
import VehicleDetail from '../../components/Register Request/VehicleDetail';
import CNICDetail from '../../components/Register Request/CNICDetail';
import VehicleDocs from '../../components/Register Request/VehicleDocs';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////colors/////////////
import Colors from '../../utils/Colors';

//////////app fonts///////
import {fontFamily} from '../../constants/fonts';

//////////////////firebase////////////////
import firestore from '@react-native-firebase/firestore';

const RegistrationRequest = ({navigation}) => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   handleForwardCount
  // });

  const handleForwardCount = () => {
    console.log('count here', count);
    count === 3 ? setCount(0) : setCount(count + 1);
  };

  const handleBackwardCount = () => {
    count === 0 ? navigation.goBack() : setCount(count - 1);
  };

  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: wp(8)}]}>
      <CustomHeader
        headerlabel={'Registration Request'}
        iconPress={() => {
          handleBackwardCount();
        }}
        icon={'chevron-back'}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={[
            styles.circleview,
            {
              backgroundColor:
                count === 0 || count === 1 || count === 2 || count === 3
                  ? Colors.Appthemecolor
                  : '#EFEFF4',
            },
          ]}></View>
        <View
          style={[
            styles.lineview,
            {
              backgroundColor:
                count === 1 || count === 2 || count === 3
                  ? Colors.Appthemecolor
                  : '#EFEFF4',
            },
          ]}></View>
        <View
          style={[
            styles.circleview,
            {
              backgroundColor:
                count === 1 || count === 2 || count === 3
                  ? Colors.Appthemecolor
                  : '#EFEFF4',
            },
          ]}></View>
        <View
          style={[
            styles.lineview,
            {
              backgroundColor:
                count === 2 || count === 3 ? Colors.Appthemecolor : '#EFEFF4',
            },
          ]}></View>
        <View
          style={[
            styles.circleview,
            {
              backgroundColor:
                count === 2 || count === 3 ? Colors.Appthemecolor : '#EFEFF4',
            },
          ]}></View>
        <View
          style={[
            styles.lineview,
            {
              backgroundColor: count === 3 ? Colors.Appthemecolor : '#EFEFF4',
            },
          ]}></View>
        <View
          style={[
            styles.circleview,
            {
              backgroundColor: count === 3 ? Colors.Appthemecolor : '#EFEFF4',
            },
          ]}></View>
      </View>

      {count === 0 ? (
        <PersonalDetail onpress={() => handleForwardCount()} />
      ) : count === 1 ? (
        <VehicleDetail onpress={() => handleForwardCount()} />
      ) : count === 2 ? (
        <CNICDetail onpress={() => handleForwardCount()} />
      ) : count === 3 ? (
        <VehicleDocs onpress={handleForwardCount} />
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
