import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

///////paper////////////
import {RadioButton} from 'react-native-paper';

//////////////////ICONS/////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';
import SearchTextInput from '../../../components/TextInput/SearchInput';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////colors/////////////
import Colors from '../../../utils/Colors';

///////////////////svgs//////////////
import Search from '../../../assets/svgs/LanguageSearch.svg';

///////app fonts//////////////
import {fontFamily} from '../../../constants/fonts';

const MyProfile = ({navigation}) => {
  ////////////radio button/////////////
  const [email, setEmail] = useState('Example@gmail.com');
  const [phoneNo, setPhoneNo] = useState('0000 0000000');
  const [vehicle_type, setVehicle_type] = useState('Car');
  const [cnic, setCNIC] = useState('0000-0000000-0');
  const [vehicle_brand, setvehicle_Brand] = useState('Toyota');
  const [vehicle_model, setvehicle_Model] = useState('Prius');
  const [vehicle_color, setvehicle_Color] = useState('Black');

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        headerlabel={'My Profile'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />

      <View style={{alignItems: 'center',marginTop:hp(2)}}>
        <View
          style={{
            width: wp(24),
            height: hp(11),
            borderColor: '#DADADA',
            borderWidth: wp(0.5),
            borderRadius: wp(4),
            marginLeft: wp(0),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons
            name={'person'}
            size={hp(4)}
            color={'#DADADA'}
            onPress={() => {}}
          />
        </View>
        <View style={{marginLeft: wp(5)}}>
          <Text
            style={{
              color: 'black',
              fontFamily: fontFamily.Nunito_SemiBold,
              fontSize: hp(2),
              marginTop: hp(2),
              textAlign: 'center',
            }}>
            Manuel H. Smither
          </Text>
          <Text
            style={{
              color: '#7A7C87',
              fontFamily: fontFamily.Nunito_SemiBold,
              fontSize: hp(1.8),
              marginTop: hp(1),
              textAlign: 'center',
            }}>
            driver_000001
          </Text>
        </View>
      </View>
      <View style={{marginLeft: wp(6), marginTop: hp(2), marginBottom: hp(2)}}>
        <Text
          style={{
            color: 'black',
            fontFamily: fontFamily.Nunito_Bold,
            fontWeight: '700',
            fontSize: hp(2),
          }}>
          Information
        </Text>
      </View>
      <View style={{paddingHorizontal:wp(6)}}>
        <View style={styles.horizontalview}>
          <Text style={styles.lefttext}>Email Address</Text>
          <Text style={styles.righttext}>{email}</Text>
        </View>
        <View style={styles.horizontalview}>
          <Text style={styles.lefttext}>Phone Number</Text>
          <Text style={styles.righttext}>{phoneNo}</Text>
        </View>
        <View style={styles.horizontalview}>
          <Text style={styles.lefttext}>Vehicle Type</Text>
          <Text style={styles.righttext}>{vehicle_type}</Text>
        </View>
        <View style={styles.horizontalview}>
          <Text style={styles.lefttext}>CNIC Number</Text>
          <Text style={styles.righttext}>{cnic}</Text>
        </View>
        <View style={styles.horizontalview}>
          <Text style={styles.lefttext}>Vehicle Brand</Text>
          <Text style={styles.righttext}>{vehicle_brand}</Text>
        </View>
        <View style={styles.horizontalview}>
          <Text style={styles.lefttext}>Vehicle Model</Text>
          <Text style={styles.righttext}>{vehicle_model}</Text>
        </View>
        <View style={styles.horizontalview}>
          <Text style={styles.lefttext}>Vehicle Color</Text>
          <Text style={styles.righttext}>{vehicle_color}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  topview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2.5),
    marginTop: hp(2),
    marginBottom: hp(0),
  },
  itemview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemtext: {
    color: '#000',
    fontSize: hp(1.7),
    fontFamily: fontFamily.Nunito_Bold,
  },
  line: {
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
    marginVertical: hp(2),
  },
  horizontalview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:hp(1.3)
  },
  lefttext: {
    color: '#4B4C4F',
    fontSize: hp(1.7),
    fontFamily: fontFamily.Nunito_Bold,
  },
  righttext: {
    color: '#979797',
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_Medium,
    textAlign: 'right',
  },
});
