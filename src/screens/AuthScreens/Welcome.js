import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

/////////////components//////////
import CustomButtonhere from '../../components/Button/CustomButton';

////////////height and width///////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

///app images////////////
import {appImages} from '../../constants/images';

////////////////app styles/////////
import Authstyles from '../styles/Authstyles';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: hp(12)}}>
        <Image
          source={appImages.Logo}
          style={{width: wp(35), height: hp(8)}}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: hp(8),
        }}>
        <Text style={Authstyles.maintext}>Welcome to Uber Replica</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={Authstyles.subtext}>
          Let's get you started on your journey with a seamless and hassle-free
          experience.
        </Text>
      </View>
      <CustomButtonhere
        title={'Login to Uber Replica'}
        widthset={80}
        topDistance={8}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <CustomButtonhere
        title={'Send Registration Request'}
        widthset={80}
        topDistance={11}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          navigation.navigate('RegistrationRequest');
        }}
      />
    </SafeAreaView>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
