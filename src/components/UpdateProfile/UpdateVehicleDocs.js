import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

///navigation variable
import {useNavigation} from '@react-navigation/native';

//////////////////////app components///////////////
import CustomTextInput from '../TextInput/CustomTextInput';
import CustomButtonhere from '../Button/CustomButton';
import CamerBottomSheet from '../CameraBottomSheet/CameraBottomSheet';

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

  //camera and imagepicker
  const refRBSheet = useRef();

  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const handleImageSelected = uri => {
    if (image === null && image1 === null && image2 === null) {
      setImage(uri);
    }
    else if (image1 === null&& image2 === null) {
      setImage1(uri);
    }
    else if (image2 === null) {
      setImage2(uri);
    } else {
      setImage3(uri);
    }
  };

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
            {image == null ? (
              <Image
                source={require("../../assets/images/UpdateProfile/Driver's_license.png")}
                style={styles.imagestyle}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={{uri: image}}
                style={styles.imagestyle}
                resizeMode="cover"
              />
            )}
          </View>
          <TouchableOpacity
            style={styles.changebtn}
            onPress={() => refRBSheet.current.open()}>
            <Text style={styles.changebtntext}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textview}>
          <Text style={styles.uploadviewtext}>
            Driving license Image (Front Side)
          </Text>
        </View>
        <View style={styles.uploadiew}>
          <View style={styles.imageview}>
            {image1 === null ? (
              <Image
                source={require('../../assets/images/UpdateProfile/VehicleImage.png')}
                style={styles.imagestyle}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={{uri: image1}}
                style={styles.imagestyle}
                resizeMode="cover"
              />
            )}
          </View>
          {/* <View style={styles.changebtn}>
          <Text style={styles.changebtntext}>Change</Text>
        </View> */}
        </View>
        <View style={styles.textview}>
          <Text style={styles.uploadviewtext}>Vehicle Image</Text>
        </View>
        <View style={styles.uploadiew}>
          <View style={styles.imageview}>
            {image2 === null ? (
              <Image
                source={require('../../assets/images/UpdateProfile/VehicleRegistration(Front).png')}
                style={styles.imagestyle}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={{uri: image2}}
                style={styles.imagestyle}
                resizeMode="cover"
              />
            )}
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
            {image3 === null ? (
              <Image
                source={require('../../assets/images/UpdateProfile/VehicleRegistration(Back).png')}
                style={styles.imagestyle}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={{uri: image3}}
                style={styles.imagestyle}
                resizeMode="cover"
              />
            )}
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
        <CamerBottomSheet
          refRBSheet={refRBSheet}
          onClose={() => refRBSheet.current.close()}
          title={'From Gallery'}
          type={'onepic'}
          onImageSelected={handleImageSelected}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateVehicleDocs;
