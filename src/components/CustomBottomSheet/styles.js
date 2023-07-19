import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

/////////////colors//////////////
import Colors from '../../utils/Colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

///////////////////app fonts//////////////////
import {fontFamily} from '../../constants/fonts';

const styles = StyleSheet.create({
  bottomtext: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: hp(3),
  },
  maintext: {
    fontSize: hp(2),
    color: '#000',
    fontFamily: fontFamily.Nunito_Bold,
  },
  subtext: {
    fontSize: hp(1.6),
    color: '#404040',
    fontFamily: fontFamily.Nunito_SemiBold,
  },

  modaltextview: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp(90),
    borderRadius: 25,
    backgroundColor: 'white',
    paddingHorizontal: wp(15),
  },
  btnView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(8),
    marginTop: hp(5),
    marginBottom: hp(5),
  },
  btn: {
    height: hp(5.5),
    width: wp(70),
    borderRadius: wp(8),
    backgroundColor: Colors.Appthemecolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: hp(1.8),
    fontFamily: fontFamily.Poppins_Regular,
    color: 'white',
  },

  ////////////ratting///////////
  Ratting_maintext: {
    fontSize: hp(2),
    color: 'white',
    fontFamily: fontFamily.Poppins_Regular,
  },
  usertext: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: hp(3),
    color: 'black',
    marginLeft: wp(3),
  },
  star: {
    color: '#707070',
    padding: wp(3),
    margin: wp(3),
    //'#EBD300'
  },
});
export default styles;
