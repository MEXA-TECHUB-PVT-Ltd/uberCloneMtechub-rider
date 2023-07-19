import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

///navigation variable
import { useNavigation } from '@react-navigation/native';

//////////////////////app components///////////////
import CustomTextInput from '../TextInput/CustomTextInput';
import CustomButtonhere from '../Button/CustomButton';

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
import {setPersonalMenu,setVehicleMenu} from '../../redux/CreateProfileSlice';

const PersonalDetail = () => {
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
        <Icon name={'person'} size={30} color={'#E2E9EC'} onPress={() => {}} />
      </View>
      <View
        style={{
          backgroundColor: Colors.Appthemecolor,
          alignItems: 'center',
          justifyContent: 'center',
          width: wp(30),
          alignSelf: 'center',
          height: hp(4),
          borderRadius: wp(2),
          marginTop: hp(2),
        }}>
        <Text style={{color: 'black'}}>Add Image</Text>
      </View>
      <CustomTextInput
        type={'withouticoninput'}
        term={username}
        view_widthset={85}
        textinput_widthset={67}
        //placeholder="Password"
        onTermChange={text => setUsername(text)}
        PlaceholderText={'First Name*'}
        focus={'true'}
      />
            <CustomTextInput
        type={'withouticoninput'}
        term={username}
        view_widthset={85}
        textinput_widthset={67}
        //placeholder="Password"
        onTermChange={text => setUsername(text)}
        PlaceholderText={'Last Name*'}
        focus={'true'}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={email}
        view_widthset={85}
        textinput_widthset={67}
        //placeholder="Password"
        onTermChange={text => setEmail(text)}
        PlaceholderText={'Email Address*'}
        focus={'true'}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={phoneNo}
        view_widthset={85}
        textinput_widthset={67}
        //placeholder="Password"
        onTermChange={text => setPhoneNo(text)}
        PlaceholderText={'Phone Number*'}
        focus={'true'}
      />

      <CustomButtonhere
        title={'Continue'}
        widthset={80}
        topDistance={10}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          dispatch(setPersonalMenu(false)),dispatch(setVehicleMenu(true))
            navigation.navigate('Verification', {navplace: 'RegistrationRequest'});
        }}
      />
    </SafeAreaView>
  );
};

export default PersonalDetail;
