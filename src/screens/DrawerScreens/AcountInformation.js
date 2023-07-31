import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../components/Header/CustomHeader';
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import CustomButtonhere from '../../components/Button/CustomButton';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

const AccountInforamtion = ({navigation}) => {
  /////////////data states/////////////
  const [username, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: wp(8)}]}>
      <CustomHeader
        headerlabel={'Account Information'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={username}
        view_widthset={85}
        textinput_widthset={67}
        onTermChange={text => setUsername(text)}
        PlaceholderText={'Bank Name'}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={phoneNo}
        view_widthset={85}
        textinput_widthset={67}
        onTermChange={text => setPhoneNo(text)}
        PlaceholderText={'Account Holder’s Name'}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={phoneNo}
        view_widthset={85}
        textinput_widthset={67}
        keyboard_type={'numeric'}
        onTermChange={text => setPhoneNo(text)}
        PlaceholderText={'Account Number'}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: wp(0),
        }}>
        <CustomTextInput
          type={'withouticoninput'}
          term={email}
          view_widthset={40}
          textinput_widthset={35}
          keyboard_type={'numeric'}
          onTermChange={text => setEmail(text)}
          PlaceholderText={'CVV/CVC'}
        />
        <CustomTextInput
          type={'withouticoninput'}
          term={email}
          view_widthset={40}
          textinput_widthset={35}
          onTermChange={text => setEmail(text)}
          PlaceholderText={'Expiry Date'}
        />
      </View>

      <CustomButtonhere
        title={'Continue'}
        widthset={80}
        topDistance={26}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          navigation.navigate('MyWallet');
        }}
      />
    </SafeAreaView>
  );
};

export default AccountInforamtion;
