import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';

///navigation variable
import {useNavigation} from '@react-navigation/native';

//////////////////////app components///////////////
import CustomTextInput from '../TextInput/CustomTextInput';
import CustomButtonhere from '../Button/CustomButton';
import CamerBottomSheet from '../CameraBottomSheet/CameraBottomSheet';

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

const UpdateCNICDetail = () => {
  ////////////////redux/////////////////
  const dispatch = useDispatch();

  ////////////////navigation state////////////
  const navigation = useNavigation();

  /////////////data states/////////////
  const [cnic_number, setCnic_Number] = useState('0000-0000000-0');

  //camera and imagepicker
  const refRBSheet = useRef();

  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);

  const handleImageSelected = uri => {
    console.log('here image', uri);
    if (image === null) {
      setImage(uri);
    } else {
      setImage1(uri);
    }
  };

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
          {image === null ? (
            <Image
              source={require('../../assets/images/UpdateProfile/CNIC(front).png')}
              style={styles.imagestyle}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={{uri: image}}
              style={styles.imagestyle}
              resizeMode="cover"
            />
          )}
        </View>

        <TouchableOpacity
          style={styles.changebtn}
          onPress={() => refRBSheet.current.open()}>
          <Text style={styles.changebtntext}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textview}>
        <Text style={styles.uploadviewtext}>CNIC Image (Front Side)</Text>
      </View>
      <View style={styles.uploadiew}>
        <View style={styles.imageview}>
          {image1 === null ? (
            <Image
              source={require('../../assets/images/UpdateProfile/CNIC(Back).png')}
              style={styles.imagestyle}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={{uri: image1}}
              style={styles.imagestyle}
              resizeMode="cover"
            />
          )}
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

      <CamerBottomSheet
        refRBSheet={refRBSheet}
        onClose={() => refRBSheet.current.close()}
        title={'From Gallery'}
        type={'onepic'}
        onImageSelected={handleImageSelected}
      />
    </SafeAreaView>
  );
};

export default UpdateCNICDetail;
