import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

//////////////screens//////
import OnboardingScreen1 from '../../components/OnBoarding/OnboardingScreen1';

/////////////swiper////////////////
import Swiper from 'react-native-swiper';

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
      navigation.navigate('WelcomeScreen')
    }
  };

  const handleSkip = () => {
    setShowOnboarding(false);
    navigation.navigate('WelcomeScreen')
  };

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />

      {showOnboarding ? (
        <Swiper loop={false} showsPagination={false} index={swiperIndex} onIndexChanged={handleIndexChange}>
          <OnboardingScreen1
          index={currentIndex}
            image={appImages.BookRide}
            maintext={'Accept a Job'}
            subtext={
              'Welcome to Uber, where you have the flexibility to choose when and where you want to drive.'
            }
            onNext={() => handleNext()}
            onSkip={() => handleSkip()}
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
            onNext={() => handleNext()}
            onSkip={() => handleSkip()}
          />
          <OnboardingScreen1
           index={currentIndex}
            image={appImages.EarnMoney}
            maintext={'Earn Money'}
            subtext={
              'Looking to make some extra cash? Join Uber and start earning money on your own schedule.'
            }
            onNext={() => handleNext()}
            onSkip={() => handleSkip()}
          />
        </Swiper>
      ) : null}

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
