import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

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
import {setVehicleMenu,setCNICMenu} from '../../redux/CreateProfileSlice';

////////////////svgs////////////
import UploadIcon from '../../assets/svgs/CreateProfile/documentupload.svg';

const VehicleDetail = () => {
  ////////////////redux/////////////////
  const dispatch = useDispatch();

  ////////////////navigation state////////////
  const navigation = useNavigation();

  /////////////data states/////////////
  const [username, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');

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
      <View
        style={styles.uploadiew}>
        <UploadIcon width={wp(15)} height={hp(6)} />
        <Text style={styles.uploadviewtext}>
          Add the driving license image along with your face
        </Text>
      </View>
      <CustomButtonhere
        title={'Continue'}
        widthset={80}
        topDistance={10}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
        dispatch(setVehicleMenu(false)),dispatch(setCNICMenu(true))
        }}
      />
    </SafeAreaView>
  );
};

export default VehicleDetail;
