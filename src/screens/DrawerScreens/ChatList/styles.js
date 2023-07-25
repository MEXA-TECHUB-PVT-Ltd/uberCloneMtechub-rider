import React from 'react';
import {StyleSheet} from 'react-native';

/////////colors//////////
import Colors from '../../../utils/Colors';

///////////height and width///////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

///////////////////app fonts///////////
import {fontFamily} from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.AppBckGround_color,
  },
  heading_text: {
    color: '#0F0E0E',
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: hp(2.5),
    marginBottom: hp(4),
    marginTop: hp(2),
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: wp(2),
    padding: hp(1.3),
    width: wp(94),
    alignSelf: 'center',
    borderRadius: wp(3),
  },
  user_name_txt: {
    fontSize: hp(2),
    fontFamily: fontFamily.Nunito_Bold,
    color: 'black',
  },
  detailtxt: {
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_Light,
    width: wp(70),
    marginTop: hp(1),
    color: '#BEC2CE',
    //backgroundColor:'red'
  },
  timetxt: {
    width: wp(20),
    fontSize: hp(1.5),
    fontFamily: fontFamily.Nunito_Medium,
    color: '#343937',
    textAlign: 'right',
    marginTop:hp(1)
  },
  line: {
    borderBottomColor: '#F1F2F6',
    borderBottomWidth:wp(0.3),                                
    width:wp(71),
    marginLeft:wp(23)
    //alignSelf:'flex-end'
  },
});
export default styles;
