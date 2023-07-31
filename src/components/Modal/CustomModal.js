import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';

import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../utils/Colors';

const CustomModal = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.CloseModal}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, {alignItems: 'center',width:wp(80)}]}>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: hp(4),
              marginTop: hp(2),
              alignSelf: 'center',
            }}>
            <Text style={styles.modaltext} >
              {props.text}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: hp(2.5),
              alignSelf: 'center',
            }}>
            <Text style={styles.modalsubtext}>
              {props.subtext}
            </Text>
          </View>
          <TouchableOpacity 
          style={{backgroundColor:Colors.Appthemecolor,width:wp(60),height:hp(5),borderRadius:wp(3),marginTop:hp(2),marginBottom:hp(4),alignItems:'center',justifyContent:'center'}}
          onPress={props.onPress}>
              <Text style={styles.leftbtntext}>{props.btn_text}</Text>
            </TouchableOpacity>
    
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
