import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

///navigation variable
import {useNavigation} from '@react-navigation/native';

//////////////////////app components///////////////
import CustomTextInput from '../TextInput/CustomTextInput';
import CustomButtonhere from '../Button/CustomButton';
import CamerBottomSheet from '../CameraBottomSheet/CameraBottomSheet';

//////////////////ICONS/////////////////
import Icon from 'react-native-vector-icons/Ionicons';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

/////////////////colors/////////////
import Colors from '../../utils/Colors';

////////////redux states//////////
import {useSelector, useDispatch} from 'react-redux';
import {setPersonalMenu, setVehicleMenu} from '../../redux/CreateProfileSlice';

//////////////////firebase////////////////
import firestore from '@react-native-firebase/firestore';

const PersonalDetail = () => {
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

  const [profileImage, setProfileImage] = useState(null);

  const handleImageSelected = uri => {
    setProfileImage(uri);
  };

  
  ////////////firebase store function/////////////////
  const firebase_store_user = async(props) => {
    try {
      await firestore().collection('users').doc("driver_doc").set({
        id: "driver_1",
        phoneNo: "00000000",
        //country_code: predata.country_code,
        friends: [],
      });
      console.log('User created successfully!');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: wp(0)}]}>
      <View
        style={{
          width: wp(24),
          height: hp(11),
          borderColor: '#E2E9EC',
          borderWidth: wp(0.5),
          borderRadius: wp(3),
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
               {profileImage != null ? (
            <Image
              source={{uri: profileImage}}
              style={{width: wp(24), height: hp(11), borderRadius: wp(3)}}
              resizeMode="contain"
            />
          ) : (
            <Icon
              name={'person'}
              size={30}
              color={'#E2E9EC'}
              onPress={() => {}}
            />
          )}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.Appthemecolor,
          alignItems: 'center',
          justifyContent: 'center',
          width: wp(30),
          alignSelf: 'center',
          height: hp(4),
          borderRadius: wp(2),
          marginTop: hp(2),
        }}
        onPress={() => refRBSheet.current.open()}>
        <Text style={{color: 'black'}}>{profileImage === null ?"Add Image":"Update Image"}</Text>
      </TouchableOpacity>
      <CustomTextInput
        type={'withouticoninput'}
        term={username}
        view_widthset={85}
        textinput_widthset={67}
        //placeholder="Password"
        onTermChange={text => setUsername(text)}
        PlaceholderText={'First Name*'}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={username}
        view_widthset={85}
        textinput_widthset={67}
        //placeholder="Password"
        onTermChange={text => setUsername(text)}
        PlaceholderText={'Last Name*'}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={email}
        view_widthset={85}
        textinput_widthset={67}
        //placeholder="Password"
        onTermChange={text => setEmail(text)}
        PlaceholderText={'Email Address*'}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={phoneNo}
        view_widthset={85}
        textinput_widthset={67}
        keyboard_type={'numeric'}
        onTermChange={text => setPhoneNo(text)}
        PlaceholderText={'Phone Number*'}
      />

      <CustomButtonhere
        title={'Continue'}
        widthset={80}
        topDistance={10}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          firebase_store_user()
          navigation.navigate('Drawerroute');
          // dispatch(setPersonalMenu(false)), dispatch(setVehicleMenu(true));
          // navigation.navigate('Verification', {
          //   navplace: 'RegistrationRequest',
          // });
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

export default PersonalDetail;
