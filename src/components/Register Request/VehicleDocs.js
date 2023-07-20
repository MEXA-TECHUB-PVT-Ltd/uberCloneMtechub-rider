import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

///navigation variable
import {useNavigation} from '@react-navigation/native';

//////////////////////app components///////////////
import CustomTextInput from '../TextInput/CustomTextInput';
import CustomButtonhere from '../Button/CustomButton';
import CustomModal from '../Modal/CustomModal';

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
import {setVehicleMenu} from '../../redux/CreateProfileSlice';

////////////////svgs////////////
import UploadIcon from '../../assets/svgs/CreateProfile/documentupload.svg';

const VehicleDocs = () => {
  ////////////////redux/////////////////
  const dispatch = useDispatch();

  ////////////////navigation state////////////
  const navigation = useNavigation();

  /////////////data states/////////////
  const [username, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {/* <TouchableOpacity onPress={() => refddRBSheet.current.open()}>
       
          </TouchableOpacity> */}
        <CustomTextInput
          type={'dropdowniconinput'}
          dopdownicon={'chevron-down'}
          view_widthset={84}
          textinput_widthset={65}
          term={username}
          editable={false}
          disable={false}
          onTermChange={text => setUsername(text)}
          PlaceholderText={'Select Brand'}
        />
        <CustomTextInput
          type={'dropdowniconinput'}
          dopdownicon={'chevron-down'}
          view_widthset={84}
          textinput_widthset={65}
          term={username}
          editable={false}
          disable={false}
          onTermChange={text => setUsername(text)}
          PlaceholderText={'Select Model'}
        />
        <CustomTextInput
          type={'withouticoninput'}
          term={username}
          view_widthset={84}
          textinput_widthset={67}
          //placeholder="Password"
          onTermChange={text => setUsername(text)}
          PlaceholderText={'Color'}
        />
        <View style={styles.uploadiew}>
          <UploadIcon width={wp(15)} height={hp(6)} />
          <Text style={styles.uploadviewtext}>
            Driver’s License (Front Side)
          </Text>
        </View>
        <View style={styles.uploadiew}>
          <UploadIcon width={wp(15)} height={hp(6)} />
          <Text style={styles.uploadviewtext}>Vehicle Image</Text>
        </View>
        <View style={styles.uploadiew}>
          <UploadIcon width={wp(15)} height={hp(6)} />
          <Text style={styles.uploadviewtext}>
            Vehicle Registration (front side)
          </Text>
        </View>
        <View style={styles.uploadiew}>
          <UploadIcon width={wp(15)} height={hp(6)} />
          <Text style={styles.uploadviewtext}>
            Vehicle Registration (back side)
          </Text>
        </View>
        <View style={{marginBottom: hp(12)}}>
          <CustomButtonhere
            title={'Continue'}
            widthset={80}
            topDistance={7}
            // loading={loading}
            // disabled={disable}
            onPress={() => {
              //dispatch(setVehicleDocMenu(true)),
              setModalVisible(true);
              // navigation.navigate('Verification', {
              //   navplace: 'CreateAccount',
              // });
            }}
          />
          <CustomModal
            modalVisible={modalVisible}
            text={'Success'}
            btn_text={'Ok'}
            subtext={
              'Thank you for submitting your information We are currently reviewing them to ensure the accuracy and security of our platform. Please wait patiently while our team verifies your information.'
            }
            type={'single_btn'}
            onPress={() => {
              setModalVisible(false);
             // setModalVisible1(false);
            }}
          />
                {/* <CustomModal
            modalVisible={modalVisible}
            text={'Success'}
            btn_text={'Ok'}
            subtext={
              'Thank you for submitting your information We are currently reviewing them to ensure the accuracy and security of our platform. Please wait patiently while our team verifies your information.'
            }
            type={'single_btn'}
            onPress={() => {
              setModalVisible(false);
            }}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VehicleDocs;
