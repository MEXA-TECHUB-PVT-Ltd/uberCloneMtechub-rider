import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';

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
import {setVehicleMenu, setCNICMenu} from '../../redux/CreateProfileSlice';

////////////////svgs////////////
import UploadIcon from '../../assets/svgs/CreateProfile/documentupload.svg';

const VehicleDetail = ({onpress}) => {
  ////////////////redux/////////////////
  const dispatch = useDispatch();

  ////////////////navigation state////////////
  const navigation = useNavigation();

  /////////////data states/////////////
  const [username, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');

  //camera and imagepicker
  const refRBSheet = useRef();

  const [image, setImage] = useState(null);

  const handleImageSelected = uri => {
    setImage(uri);
  };

  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: wp(0)}]}>
      <CustomTextInput
        type={'withouticoninput'}
        term={username}
        view_widthset={85}
        textinput_widthset={67}
        //placeholder="Password"
        onTermChange={text => setUsername(text)}
        PlaceholderText={'Type of Vehicle*'}
        focus={'true'}
      />
      <View style={styles.uploadiew}>
        {image === null ? (
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={styles.clickuploadiew}>
            <UploadIcon width={wp(15)} height={hp(6)} />
            <Text style={styles.uploadviewtext}>
              Add the driving license image along with your face
            </Text>
          </TouchableOpacity>
        ) : (
          <Image
            source={{uri: image}}
            style={styles.imagestyle}
            resizeMode="cover"
          />
        )}
      </View>
      <CustomButtonhere
        title={'Continue'}
        widthset={80}
        topDistance={10}
        // loading={loading}
        // disabled={disable}
        onPress={onpress}
        // onPress={() => {
        //   dispatch(setVehicleMenu(false)), dispatch(setCNICMenu(true));
        // }}
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

export default VehicleDetail;
