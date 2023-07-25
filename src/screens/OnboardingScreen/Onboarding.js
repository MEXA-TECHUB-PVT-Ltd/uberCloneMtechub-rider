import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  PermissionsAndroid,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

//////////////screens//////
import OnboardingComponents from '../../components/Onboardings/OnboardingComponents';
import CustomButtonhere from '../../components/Button/CustomButton';

/////////////swiper////////////////
import Swiper from 'react-native-swiper';

////////////height and width///////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../utils/Colors';

/////////////app images////////////////
import {appImages} from '../../constants/images';

const OnboardingScreen = ({navigation}) => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (swiperIndex < 2) {
      setSwiperIndex(swiperIndex + 1);
    } else {
      setShowOnboarding(false);
      navigation.navigate('WelcomeScreen');
    }
  };

  const handleSkip = () => {
    setShowOnboarding(false);
    navigation.navigate('WelcomeScreen');
  };

  const handleIndexChange = index => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    try {
      console.log('asking for permission');
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
      if (
        granted['android.permission.CAMERA'] &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] &&
        granted['android.permission.READ_EXTERNAL_STORAGE']
      ) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.log('permission error', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />

      <View style={{height: hp(55), marginTop: hp(10)}}>
        <Swiper
          loop={false}
          showsPagination={false}
          index={swiperIndex}
          onIndexChanged={handleIndexChange}>
          <OnboardingComponents
            image={appImages.BookRide}
            maintext={'Accept a Job'}
            subtext={
              'Welcome to Uber, where you have the flexibility to choose when and where you want to drive.'
            }
          />
          <OnboardingComponents
            image={appImages.DestinationRide}
            maintext={'Realtime Tracking'}
            subtext={
              'Welcome to Uber, where you have the flexibility to choose when and where you want to drive.'
            }
          />
          <OnboardingComponents
            image={appImages.EarnMoney}
            maintext={'Earn Money'}
            subtext={
              'Looking to make some extra cash? Join Uber and start earning money on your own schedule.'
            }
          />
          {/* <OnboardingScreen1
          index={currentIndex}
            image={appImages.BookRide}
            maintext={'Accept a Job'}
            subtext={
              'Welcome to Uber, where you have the flexibility to choose when and where you want to drive.'
            }
          />
          <OnboardingScreen1
           index={currentIndex}
            image={appImages.DestinationRide}
            maintext={'Realtime Tracking'}
            subtext={
              'With Uber' +
              's' +
              ' real-time tracking feature, you can stay informed and in control throughout your entire ride.'
            }
          /> */}
          {/* <OnboardingScreen1
            index={currentIndex}
            image={appImages.EarnMoney}
            maintext={'Earn Money'}
            subtext={
              'Looking to make some extra cash? Join Uber and start earning money on your own schedule.'
            }
          /> */}
        </Swiper>
      </View>
      {currentIndex === 0 ? (
        <View style={{marginTop: hp(0)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: wp(15),
              alignSelf: 'center',
              marginTop: hp(4),
            }}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: hp(0.2),
                height: hp(1.2),
                width: wp(7),
                borderRadius: wp(5),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: hp(0.5),
                  width: wp(4.5),
                  backgroundColor: Colors.Appthemecolor,
                }}></View>
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: hp(0.2),
                height: hp(1.2),
                width: wp(2.2),
                borderRadius: wp(5),
              }}></View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: hp(0.2),
                height: hp(1.2),
                width: wp(2.2),
                borderRadius: wp(5),
              }}></View>
          </View>
        </View>
      ) : currentIndex === 1 ? (
        <View style={{marginTop: hp(0)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: wp(15),
              alignSelf: 'center',
              marginTop: hp(4),
            }}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: hp(0.2),
                height: hp(1.2),
                width: wp(2.2),
                borderRadius: wp(5),
              }}></View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: hp(0.2),
                height: hp(1.2),
                width: wp(7),
                borderRadius: wp(5),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: hp(0.5),
                  width: wp(4.5),
                  backgroundColor: Colors.Appthemecolor,
                }}></View>
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: hp(0.2),
                height: hp(1.2),
                width: wp(2.2),
                borderRadius: wp(5),
              }}></View>
          </View>
        </View>
      ) : (
        <View style={{marginTop: hp(0)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: wp(15),
              alignSelf: 'center',
              marginTop: hp(4),
            }}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: hp(0.2),
                height: hp(1.2),
                width: wp(2.2),
                borderRadius: wp(5),
              }}></View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: hp(0.2),
                height: hp(1.2),
                width: wp(2.2),
                borderRadius: wp(5),
              }}></View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: hp(0.2),
                height: hp(1.2),
                width: wp(7),
                borderRadius: wp(5),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: hp(0.5),
                  width: wp(4.5),
                  backgroundColor: Colors.Appthemecolor,
                }}></View>
            </View>
          </View>
        </View>
      )}
      <View
        style={{
          height: hp(19),
          marginTop: hp(2),
        }}>
        <CustomButtonhere
          title={currentIndex === 2 ? 'Get Started' : 'Next'}
          widthset={80}
          topDistance={8}
          // loading={loading}
          // disabled={disable}
          onPress={() => {
            handleNext();
          }}
        />
      </View>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => handleSkip()}>
        <Text style={{color: 'black'}}>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
