import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, Text, TouchableOpacity,View,Image} from 'react-native';

///navigation variable
import {useNavigation} from '@react-navigation/native';

//////////////////////app components///////////////
import CustomTextInput from '../TextInput/CustomTextInput';
import CustomButtonhere from '../Button/CustomButton';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

////////////redux states//////////
import {useSelector, useDispatch} from 'react-redux';
import {
  setUpdateCNICMenu,
  setUpdatePersonalDocMenu,
} from '../../redux/UpdateProfileSlice';

////////////////svgs////////////
import UploadIcon from '../../assets/svgs/CreateProfile/documentupload.svg';

const UpdateCNICDetail = () => {
  ////////////////redux/////////////////
  const dispatch = useDispatch();

  ////////////////navigation state////////////
  const navigation = useNavigation();

  /////////////data states/////////////
  const [cnic_number, setCnic_Number] = useState('0000-0000000-0');

  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: wp(0)}]}>
      <CustomTextInput
        type={'withouticoninput'}
        term={cnic_number}
        view_widthset={85}
        textinput_widthset={67}
        keyboard_type={'numeric'}
        onTermChange={text => setCnic_Number(text)}
        PlaceholderText={'CNIC Number'}
        focus={'true'}
      />
      <View style={styles.uploadiew}>
        <View style={styles.imageview}>
          <Image
            source={require("../../assets/images/UpdateProfile/CNIC(front).png")}
            style={styles.imagestyle}
            resizeMode="contain"
          />
        </View>

        <View style={styles.changebtn}>
          <Text style={styles.changebtntext}>Change</Text>
        </View>
      </View>
      <View style={styles.textview}>
        <Text style={styles.uploadviewtext}>CNIC Image (Front Side)</Text>
      </View>
      <View style={styles.uploadiew}>
        <View style={styles.imageview}>
          <Image
            source={require("../../assets/images/UpdateProfile/CNIC(Back).png")}
            style={styles.imagestyle}
            resizeMode="contain"
          />
        </View>

        {/* <View style={styles.changebtn}>
          <Text style={styles.changebtntext}>Change</Text>
        </View> */}
      </View>
      <View style={styles.textview}>
        <Text style={styles.uploadviewtext}>CNIC Image (Back Side)</Text>
      </View>
      <CustomButtonhere
        title={'Continue'}
        widthset={80}
        topDistance={4.5}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          dispatch(setUpdateCNICMenu(false)),
            dispatch(setUpdatePersonalDocMenu(true));
        }}
      />
    </SafeAreaView>
  );
};

export default UpdateCNICDetail;
