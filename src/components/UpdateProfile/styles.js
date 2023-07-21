import React from 'react';
import {StyleSheet} from 'react-native';

///////////////colors////////
import Colors from '../../utils/Colors';

////////height and width///////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fontFamily} from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: hp(5),
  },
  btntext: {
    color: 'black',
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_Medium,
    // fontWeight: '500',
  },
  balancetext: {
    color: '#7A7C87',
    fontFamily: fontFamily.Nunito_Medium,
    fontSize: hp(1.8),
  },
  pricetext: {
    color: '#000',
    fontFamily: fontFamily.Nunito_SemiBold,
    fontSize: hp(2),
  },

  ////////////////vehicle detail////////
  uploadiew: {
    width: wp(84),
    height: hp(20),
    borderColor: '#E2E9EC',
    borderWidth: wp(0.3),
    marginTop: hp(4),
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: wp(3),
  },
  uploadviewtext: {
    color: '#000000',
    width: wp(55),
    textAlign: 'center',
    fontFamily: fontFamily.Nunito_SemiBold,
    fontSize: hp(1.6),
    marginTop: hp(1),
  },
  imageview: {
    height: hp(19),
    width: wp(84),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagestyle: {
    height: hp(21.5),
    width: wp(84.6),
    borderRadius:wp(2),
    alignItems: 'center',
  },
  textview: {alignItems: 'center', justifyContent: 'center', marginTop: hp(1)},
  changebtntext: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: fontFamily.Nunito_Medium,
    fontSize: hp(1.6),
  },
  changebtn: {
    position: 'absolute',
    backgroundColor: Colors.Appthemecolor,
    right: wp(1),
    top: hp(0.1),
    width: wp(27),
    height: hp(4),
    borderRadius: wp(2.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
