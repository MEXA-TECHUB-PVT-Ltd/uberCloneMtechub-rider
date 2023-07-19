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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
  },
  uploadviewtext: {
    color: '#A7A9AC',
    width: wp(50),
    textAlign: 'center',
    fontFamily:fontFamily.Nunito_Medium,
    fontSize:hp(1.6),
    marginTop:hp(1)
  },
});
export default styles;
