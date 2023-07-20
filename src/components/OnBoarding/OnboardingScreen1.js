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
import OnboardingComponents from '../../components/Onboardings/OnboardingComponents';

////////////height and width///////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../utils/Colors';

const OnboardingScreen1 = ({
  onNext,
  onSkip,
  image,
  maintext,
  subtext,
  index,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: hp(10)}}>
        <OnboardingComponents
          image={image}
          maintext={maintext}
          subtext={subtext}
        />
        {index === 0 ? (
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
        ) : index === 1 ? (
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
        ) : index === 2 ? (
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
        ) : null}

        <View
          style={{
            height: hp(19),
            marginTop: hp(2),
          }}>
          <CustomButtonhere
            title={'Next'}
            widthset={80}
            topDistance={8}
            // loading={loading}
            // disabled={disable}
            onPress={onNext}
          />
        </View>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}
          onPress={onSkip}>
          <Text style={{color: 'black'}}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default OnboardingScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
