import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

/////////////app icons/////////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';

//////////////////app styles//////////////////
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//////////////app images/////////
import {appImages} from '../../constants/images';

import { Avatar } from 'react-native-paper';
import { fontFamily } from '../../constants/fonts';

const MyWalletCard = ({
  username,
  labelPress,
  total_amount,
  after_deduction,
  date,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={labelPress} style={[styles.mainview]}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(0),
            width: wp(65),
            alignItems:'center'
          }}>
            <Avatar.Icon size={hp(5.5)} style={{backgroundColor:"#E7E7E7"}} 
             //source={appImages.GoogleLogo}
             />
          <View style={{marginLeft: wp(3), justifyContent: 'center'}}>
          <Text style={styles.notimaintext}>{username}</Text>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.notisubtext}>Total Amount:</Text>
            <Text style={styles.notimaintext}>{total_amount}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.notisubtext}>After Deduction:</Text>
            <Text style={styles.notimaintext}>{after_deduction}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.datetext}>{date}</Text>
      </TouchableOpacity>

    </View>
  );
};

export default MyWalletCard;
