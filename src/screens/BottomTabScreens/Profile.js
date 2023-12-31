import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../components/Header/CustomHeader';
import SettingsMenu from '../../components/SettingsView/SettingsMenu';
import LogoutModal from '../../components/Modal/LogoutModal';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

//////////////////ICONS/////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';

/////////////app fonts///////////
import {fontFamily} from '../../constants/fonts';

//////////svgs//////////////
import Star from '../../assets/svgs/Profile/star.svg';
import Request from '../../assets/svgs/Profile/Requests.svg';
import Theme from '../../assets/svgs/Profile/theme.svg';
import Language from '../../assets/svgs/Profile/Language_icon.svg';
import Privacy from '../../assets/svgs/Profile/Shield_icon.svg';
import Terms from '../../assets/svgs/Profile/Document_icon.svg';
import Logout from '../../assets/svgs/Profile/logout_icon.svg';

const Profile = ({navigation}) => {

    //Modal States
    const [modalVisible, setModalVisible] = useState(false);
    
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <CustomHeader
          headerlabel={'Account'}
          iconPress={() => {
            navigation.toggleDrawer()
          }}
          icon={'menu'}
        />

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: wp(8),
            marginTop: hp(1),
          }}
          onPress={() => {
            navigation.navigate('MyProfile');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: wp(21.2),
                height: hp(10),
                borderColor: '#E2E9EC',
                borderWidth: wp(0.5),
                borderRadius: wp(4),
                marginLeft: wp(0),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons
                name={'person'}
                size={hp(4)}
                color={'#DADADA'}
                onPress={() => {
                  navigation.navigate('MyProfile');
                }}
              />
            </View>
            <View style={{marginLeft: wp(5)}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: fontFamily.Nunito_SemiBold,
                  fontWeight: '600',
                  fontSize: hp(2),
                }}>
                Manuel H. Smither
              </Text>
              <Text
                style={{
                  color: '#7A7C87',
                  fontFamily: fontFamily.Nunito_SemiBold,
                  fontWeight: '600',
                  fontSize: hp(1.8),
                }}>
                driver_000001
              </Text>
            </View>
          </View>
          <Ionicons
            name="chevron-forward"
            color={'#242A37'}
            size={hp(2.5)}
            onPress={() => {}}
          />
        </TouchableOpacity>
        <View style={{marginLeft: wp(8), marginTop: hp(4)}}>
          <Text
            style={{
              color: 'black',
              fontFamily: fontFamily.Nunito_Bold,
              fontSize: hp(2),
            }}>
            Settings
          </Text>
        </View>
        <View
          style={{
            marginTop: hp(2),
            marginBottom: hp(2),
            marginHorizontal: wp(5),
          }}>
          <SettingsMenu
            icon={<Star width={wp(5)} height={hp(3)} />}
            label={'My Rattings'}
            labelPress={() => navigation.navigate('MyRattings')}
          />

          <SettingsMenu
            icon={<Request width={wp(5)} height={hp(3)} />}
            label={'Chain of Requests'}
            type={'switch'}
            //labelPress={() => navigation.navigate('PolicyPrivacy')}
          />
          <SettingsMenu
            icon={<Theme width={wp(5)} height={hp(3)} />}
            label={'Light Theme'}
            type={'switch'}
            //labelPress={() => navigation.navigate('PolicyPrivacy')}
          />
          <SettingsMenu
            icon={<Language width={wp(5)} height={hp(3)} />}
            label={'Change Language'}
            labelPress={() => navigation.navigate('ChangeLanguage')}
          />
          <SettingsMenu
            icon={<Privacy width={wp(5)} height={hp(3)} />}
            label={'Privacy Policy'}
            labelPress={() => navigation.navigate('PolicyPrivacy')}
          />

          <SettingsMenu
            icon={<Terms width={wp(5)} height={hp(3)} />}
            label={'Terms & Conditions'}
            labelPress={() => navigation.navigate('TermsCondition')}
          />

          <SettingsMenu
            icon={<Logout width={wp(5)} height={hp(3)} />}
            label={'Logout'}
            labelPress={() => setModalVisible(true) }
          />
        </View>
      </ScrollView>
      <LogoutModal
            modalVisible={modalVisible}
            text={'Logout'}
            btn_text={'Go to Create Profile'}
            subtext={'Are you sure you want to Logout?'}
            type={'single_btn'}
            onPress={() => {
              setModalVisible(false);
            }}
            onPress1={() => {
              setModalVisible(false);
              navigation.navigate('Login')
            }}
          />
    </SafeAreaView>
  );
};

export default Profile;
