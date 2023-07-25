import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
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
import {
  setUpdatePersonalMenu,
  setUpdateVehicleMenu,
} from '../../redux/UpdateProfileSlice';


const UpdatePersonalDetail = () => {
  ////////////////redux/////////////////
  const dispatch = useDispatch();

  ////////////////navigation state////////////
  const navigation = useNavigation();

  //camera and imagepicker
  const refRBSheet = useRef();

  /////////////data states/////////////
  const [fname, setFirstName] = useState('John');
  const [lname, setLastName] = useState('John');
  const [phoneNo, setPhoneNo] = useState('0000-0000000');
  const [email, setEmail] = useState('johndoe@gmail.com');

  const [profileImage, setProfileImage] = useState(null);

  const handleImageSelected = uri => {
    setProfileImage(uri);
  };

  return (

    <SafeAreaView style={[styles.container, {paddingHorizontal: wp(0)}]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
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
          <Text style={{color: 'black'}}>Add Image</Text>
        </TouchableOpacity>
    
          <CustomTextInput
            type={'withouticoninput'}
            term={fname}
            view_widthset={83}
            textinput_widthset={67}
            //placeholder="Password"
            onTermChange={text => setFirstName(text)}
            PlaceholderText={'First Name'}
            focus={'true'}
          />
          <CustomTextInput
            type={'withouticoninput'}
            term={lname}
            view_widthset={83}
            textinput_widthset={67}
            //placeholder="Password"
            onTermChange={text => setLastName(text)}
            PlaceholderText={'Last Name'}
            focus={'true'}
          />
          <CustomTextInput
            type={'withouticoninput'}
            term={email}
            view_widthset={83}
            textinput_widthset={67}
            editable={false}
            disable={false}
            onTermChange={text => setEmail(text)}
            PlaceholderText={'Email Address'}
            focus={'true'}
            errortext={'You can’t update your email address'}
          />
          <CustomTextInput
            type={'withouticoninput'}
            term={phoneNo}
            view_widthset={83}
            textinput_widthset={67}
            keyboard_type={'numeric'}
            onTermChange={text => setPhoneNo(text)}
            PlaceholderText={'Phone Number'}
            focus={'true'}
          />

        <View style={{height: hp(10), marginTop: hp(6)}}>
          <CustomButtonhere
            title={'Continue'}
            widthset={80}
            topDistance={2}
            // loading={loading}
            // disabled={disable}
            onPress={() => {
              dispatch(setUpdatePersonalMenu(false)),
                dispatch(setUpdateVehicleMenu(true));
              //   navigation.navigate('Verification', {
              //     navplace: 'RegistrationRequest',
              //   });
            }}
          />
        </View>
      </ScrollView>
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

export default UpdatePersonalDetail;
