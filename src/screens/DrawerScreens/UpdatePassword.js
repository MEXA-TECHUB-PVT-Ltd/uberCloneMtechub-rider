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

//////////////////////app components///////////////
import CustomHeader from '../../components/Header/CustomHeader';
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import CustomButtonhere from '../../components/Button/CustomButton';
import CustomModal from '../../components/Modal/CustomModal';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

/////////////////colors/////////////
import Colors from '../../utils/Colors';

const UpdatePassword = ({navigation}) => {
  //Modal States
  const [modalVisible, setModalVisible] = useState(false);

  /////////////data states/////////////
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  //password eye function and states
  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const inputRef = useRef(null);

  useEffect(() => {
    //inputRef.current.focus(); // Focus the input when the component mounts
  }, []);
  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: wp(8)}]}>
      <CustomHeader
        headerlabel={'Update Password'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={oldpassword}
        view_widthset={85}
        textinput_widthset={67}
        onTermChange={newPassword => setOldPassword(newPassword)}
        mode={'password'}
        secureTextEntry={data.secureTextEntry ? true : false}
        onclick={() => updateSecureTextEntry()}
        PlaceholderText={'Old Password'}
        focus={'true'}
      />

      <CustomTextInput
        type={'withouticoninput'}
        term={newpassword}
        view_widthset={85}
        textinput_widthset={67}
        onTermChange={newPassword => setNewPassword(newPassword)}
        mode={'password'}
        secureTextEntry={data.secureTextEntry ? true : false}
        onclick={() => updateSecureTextEntry()}
        PlaceholderText={'New Password'}
        focus={'true'}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={confirmpassword}
        view_widthset={85}
        textinput_widthset={67}
        onTermChange={newPassword => setConfirmPassword(newPassword)}
        mode={'password'}
        secureTextEntry={data.secureTextEntry ? true : false}
        onclick={() => updateSecureTextEntry()}
        PlaceholderText={'Confirm Password'}
        focus={'true'}
      />

      <CustomButtonhere
        title={'Update'}
        widthset={80}
        topDistance={25}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <CustomModal
        modalVisible={modalVisible}
        text={'Success'}
        btn_text={'Ok'}
        subtext={
          'Password updated sucessfully'
        }
        type={'single_btn'}
        onPress={() => {
          setModalVisible(false);
          navigation.navigate('Home');
        }}
      />
    </SafeAreaView>
  );
};

export default UpdatePassword;
