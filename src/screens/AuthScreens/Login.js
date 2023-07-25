import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

/////////////components//////////
import CustomButtonhere from '../../components/Button/CustomButton';
import CustomTextInput from '../../components/TextInput/CustomTextInput';

////////////height and width///////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////app icons/////////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';

////////////////app styles/////////
import Authstyles from '../styles/Authstyles';

///////////app fonts///////////////
import {fontFamily} from '../../constants/fonts';

//////signin/////////
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  ///////////////data states////////////////////
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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

  /////check box////////////////
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Ionicons
          name="chevron-back"
          color={'#000'}
          size={hp(3.5)}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          marginTop: hp(5),
        }}>
        <Text style={[Authstyles.maintext, {textAlign: 'left'}]}>
          Welcome to Uber Replica
        </Text>
      </View>
      <View style={{justifyContent: 'center', marginBottom: hp(8)}}>
        <Text style={[Authstyles.subtext, {textAlign: 'left', width: wp(80)}]}>
          Please sign in to access your account and continue your seamless Uber
          experience.
        </Text>
      </View>
      <CustomTextInput
        type={'withouticoninput'}
        term={email}
        view_widthset={85}
        textinput_widthset={75}
        onTermChange={newPassword => setPassword(newPassword)}
        secureTextEntry={data.secureTextEntry ? true : false}
        onclick={() => updateSecureTextEntry()}
        PlaceholderText={'Driver Id*'}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={password}
        view_widthset={85}
        textinput_widthset={67}
        onTermChange={newPassword => setPassword(newPassword)}
        mode={'password'}
        secureTextEntry={data.secureTextEntry ? true : false}
        onclick={() => updateSecureTextEntry()}
        PlaceholderText={'Password*'}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}></View>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate('ForgetPassword')}
            style={styles.forgettextview}>
            <Text
              style={styles.forgettext}
              //onPress={() => navigation.navigate("ForgetPassword")}
            >
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomButtonhere
        title={'Sign In'}
        widthset={80}
        topDistance={18}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          navigation.navigate('Drawerroute');
        }}
      />
      <View
        style={{alignSelf: 'center', marginTop: hp(28),alignItems:"center",justifyContent:'center',flexDirection:'row'}}
        onPress={() => {
          navigation.navigate('RegistrationRequest');
        }}>
        <Text style={Authstyles.blacktext}>
          Don’t have an account?{' '}
 
        </Text>
        <TouchableOpacity
          style={{}}
        onPress={() => {
          navigation.navigate('RegistrationRequest');
        }}>
          <Text style={Authstyles.themecolortext} >Send Request</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(8),
  },
  //////////////////signin//////////////////
  forgettextview: {
    alignItems: 'flex-end',
    width: wp(40),
  },
  forgettext: {
    color: '#000',
    fontSize: hp(1.5),
    fontFamily: fontFamily.Nunito_Bold,
  },
  remembermetext: {
    color: '#979797',
    fontSize: hp(1.4),
    fontFamily: fontFamily.Nunito_SemiBold,
  },
});
