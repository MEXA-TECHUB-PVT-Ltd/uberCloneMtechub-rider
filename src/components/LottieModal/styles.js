import React from 'react';
import {StyleSheet} from 'react-native';

//////////colros//////
import Colors from '../../utils/Colors';

/////height and width/////////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fontFamily} from '../../constants/fonts';

const styles = StyleSheet.create({
  centeredView: {
    zIndex: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    width: wp(80),
    //paddingTop:wp('10%'),
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modaltext: {
    fontFamily: fontFamily.Nunito_Bold,
    fontSize: hp(1.8),
    color: 'black',
    textAlign: 'center',
  },

  animatedIcon: {
    width: wp(65),
    height: hp(20),

    // position: 'absolute',
    // top: -36,
    marginBottom: hp(0),
  },
});
export default styles;
