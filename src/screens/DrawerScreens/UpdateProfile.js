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
import UpdatePersonalDetail from '../../components/UpdateProfile/UpdatePersonalDetail';
import UpdateVehicleDetail from '../../components/UpdateProfile/UpdateVehicleDetail';
import UpdateCNICDetail from '../../components/UpdateProfile/UpdateCNIC';
import UpdateVehicleDocs from '../../components/UpdateProfile/UpdateVehicleDocs';

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

const UpdateProfile = ({navigation}) => {
  ////////////////redux/////////////////
  const dispatch = useDispatch();
  const {update_personal, update_vehicle, update_CNIC, update_personalDoc} =
    useSelector(state => state.updateProfile);

      //////////////menu counter/////////////
  const [count, setCount] = useState(0);

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
        headerlabel={'Update Profile'}
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
        <UpdatePersonalDetail 
        onpress={() => handleForwardCount()}
        />
      ) : count === 1 ? (
        <UpdateVehicleDetail onpress={() => handleForwardCount()} />
      ) : count === 2 ? (
        <UpdateCNICDetail  onpress={() => handleForwardCount()} />
      ) :count ===  3 ? (
        <UpdateVehicleDocs  onpress={handleForwardCount} />
      ) : null}
    </SafeAreaView>
  );
};

export default UpdateProfile;

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
    width: wp(5.5),
    height: hp(2.6),
    borderRadius: wp(20),
    backgroundColor: Colors.Appthemecolor,
  },
  lineview: {
    width: wp(20.8),
    height: hp(0.5),
    backgroundColor: Colors.Appthemecolor,
  },
});
