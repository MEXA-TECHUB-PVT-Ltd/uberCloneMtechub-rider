import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

///navigation variable
import {useNavigation} from '@react-navigation/native';

//////////////////////app components///////////////
import CustomTextInput from '../TextInput/CustomTextInput';
import CustomButtonhere from '../Button/CustomButton';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

////////////redux states//////////
import {useSelector, useDispatch} from 'react-redux';
import {setUpdateVehicleMenu} from '../../redux/UpdateProfileSlice';


const UpdateVehicleDocs = () => {
  ////////////////redux/////////////////
  const dispatch = useDispatch();

  ////////////////navigation state////////////
  const navigation = useNavigation();

  /////////////data states/////////////
  const [vehicle_brand, setVehicle_Brand] = useState('Toyota');
  const [vehicle_model, setVehicle_Model] = useState('Prius');
  const [vehicle_color, setVehicle_Color] = useState('Black');

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);

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
          term={vehicle_brand}
        //   editable={false}
        //   disable={false}
          onTermChange={text => setVehicle_Brand(text)}
          PlaceholderText={'Select Brand'}
        />
        <CustomTextInput
          type={'dropdowniconinput'}
          dopdownicon={'chevron-down'}
          view_widthset={84}
          textinput_widthset={65}
          term={vehicle_model}
        //   editable={false}
        //   disable={false}
          onTermChange={text => setVehicle_Model(text)}
          PlaceholderText={'Select Model'}
        />
        <CustomTextInput
          type={'withouticoninput'}
          term={vehicle_color}
          view_widthset={84}
          textinput_widthset={67}
          //placeholder="Password"
          onTermChange={text => setVehicle_Color(text)}
          PlaceholderText={'Color'}
        />
        <View style={styles.uploadiew}>
        <View style={styles.imageview}>
          <Image
            source={require("../../assets/images/UpdateProfile/Driver's_license.png")}
            style={styles.imagestyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.changebtn}>
          <Text style={styles.changebtntext}>Change</Text>
        </View>
      </View>
      <View style={styles.textview}>
        <Text style={styles.uploadviewtext}>
        Driving license Image (Front Side)
        </Text>
      </View>
      <View style={styles.uploadiew}>
        <View style={styles.imageview}>
          <Image
            source={require("../../assets/images/UpdateProfile/VehicleImage.png")}
            style={styles.imagestyle}
            resizeMode="contain"
          />
        </View>
        {/* <View style={styles.changebtn}>
          <Text style={styles.changebtntext}>Change</Text>
        </View> */}
      </View>
      <View style={styles.textview}>
        <Text style={styles.uploadviewtext}>
        Vehicle Image 
        </Text>
      </View>
      <View style={styles.uploadiew}>
        <View style={styles.imageview}>
          <Image
            source={require("../../assets/images/UpdateProfile/VehicleRegistration(Front).png")}
            style={styles.imagestyle}
            resizeMode="contain"
          />
        </View>
        {/* <View style={styles.changebtn}>
          <Text style={styles.changebtntext}>Change</Text>
        </View> */}
      </View>
      <View style={styles.textview}>
        <Text style={styles.uploadviewtext}>
        Vehicle Registration (Front Side)
        </Text>
      </View>
      <View style={styles.uploadiew}>
        <View style={styles.imageview}>
          <Image
            source={require("../../assets/images/UpdateProfile/VehicleRegistration(Back).png")}
            style={styles.imagestyle}
            resizeMode="contain"
          />
        </View>
        {/* <View style={styles.changebtn}>
          <Text style={styles.changebtntext}>Change</Text>
        </View> */}
      </View>
      <View style={styles.textview}>
        <Text style={styles.uploadviewtext}>
        Vehicle Registration (Back Side)
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
              dispatch(setUpdateVehicleMenu(false)),
              //setModalVisible(true);
              navigation.navigate('Home');
            }}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateVehicleDocs;
