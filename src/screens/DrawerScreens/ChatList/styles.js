import React from 'react';
import {
  StyleSheet,
} from 'react-native';

/////////colors//////////
import Colors from '../../../utils/Colors';

///////////height and width///////
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  ///////////////////app fonts///////////
import { fontFamily } from '../../../constants/fonts';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
backgroundColor:Colors.AppBckGround_color
  },
  heading_text:
  {
    color:'#0F0E0E',
    fontFamily:fontFamily.Poppins_Medium,
    fontSize:hp(2.5),
    marginBottom:hp(4),
    marginTop:hp(2)
  },
  card:
  {
   borderColor:'#BDC4CC26',
    borderBottomWidth: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:wp('2%'),
  //marginHorizontal:wp(2),
  paddingHorizontal:wp(1.5),
  width:wp(94),
  alignSelf:'center',
  borderRadius:wp(3)
  //marginBottom:wp('15%')
  },
  user_name_txt:
  {
      fontSize: hp(2),
      fontFamily:fontFamily.Nunito_Bold,
      color: "black",
  },
  detailtxt:{
    fontSize:hp(1.4),
    fontFamily:fontFamily.Nunito_Light,
    width:wp(74),
    marginTop:hp(0),
    color:'rgba(255, 255, 255, 0.70)'
    },
    timetxt:{
      width:wp(20),
      fontSize:hp(1.5),
      fontFamily:fontFamily.Poppins_Regular,
     color:'rgba(255, 255, 255, 0.70)',
     textAlign:'right',
      }
});
export default styles;
