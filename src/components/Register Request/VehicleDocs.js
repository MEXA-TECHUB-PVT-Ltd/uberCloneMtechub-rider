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
import CustomModal from '../Modal/CustomModal';
import CamerBottomSheet from '../CameraBottomSheet/CameraBottomSheet';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

////////////////svgs////////////
import UploadIcon from '../../assets/svgs/CreateProfile/documentupload.svg';

const VehicleDocs = ({onpress}) => {
  ////////////////navigation state////////////
  const navigation = useNavigation();

  /////////////data states/////////////
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');

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
    } else if (image1 === null && image2 === null) {
      setImage1(uri);
    } else if (image2 === null) {
      setImage2(uri);
    } else {
      setImage3(uri);
    }
  };

  const closemodal = () => {
    onpress()
    setModalVisible(false);
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <CustomTextInput
          type={'dropdowniconinput'}
          dopdownicon={'chevron-down'}
          view_widthset={84}
          textinput_widthset={65}
          term={brand}
          editable={false}
          disable={false}
          onTermChange={text => setBrand(text)}
          PlaceholderText={'Select Brand'}
        />
        <CustomTextInput
          type={'dropdowniconinput'}
          dopdownicon={'chevron-down'}
          view_widthset={84}
          textinput_widthset={65}
          term={model}
          editable={false}
          disable={false}
          onTermChange={text => setModel(text)}
          PlaceholderText={'Select Model'}
        />
        <CustomTextInput
          type={'withouticoninput'}
          term={color}
          view_widthset={84}
          textinput_widthset={67}
          onTermChange={text => setC(text)}
          PlaceholderText={'Color'}
        />
        <View style={styles.uploadiew}>
          {image === null ? (
            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={styles.clickuploadiew}>
              <UploadIcon width={wp(15)} height={hp(6)} />
              <Text style={styles.uploadviewtext}>
                Driver’s License (Front Side)
              </Text>
            </TouchableOpacity>
          ) : (
            <Image
              source={{uri: image}}
              style={styles.imagestyle}
              resizeMode="cover"
            />
          )}
        </View>
        <View style={styles.uploadiew}>
          {image1 === null ? (
            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={styles.clickuploadiew}>
              <UploadIcon width={wp(15)} height={hp(6)} />
              <Text style={styles.uploadviewtext}>Vehicle Image</Text>
            </TouchableOpacity>
          ) : (
            <Image
              source={{uri: image1}}
              style={styles.imagestyle}
              resizeMode="cover"
            />
          )}
        </View>
        <View style={styles.uploadiew}>
          {image2 === null ? (
            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={styles.clickuploadiew}>
              <UploadIcon width={wp(15)} height={hp(6)} />
              <Text style={styles.uploadviewtext}>
                Vehicle Registration (front side)
              </Text>
            </TouchableOpacity>
          ) : (
            <Image
              source={{uri: image2}}
              style={styles.imagestyle}
              resizeMode="cover"
            />
          )}
        </View>
        <View style={styles.uploadiew}>
          {image3 === null ? (
            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={styles.clickuploadiew}>
              <UploadIcon width={wp(15)} height={hp(6)} />
              <Text style={styles.uploadviewtext}>
                Vehicle Registration (back side)
              </Text>
            </TouchableOpacity>
          ) : (
            <Image
              source={{uri: image3}}
              style={styles.imagestyle}
              resizeMode="cover"
            />
          )}
        </View>
        <View style={{marginBottom: hp(12)}}>
          <CustomButtonhere
            title={'Continue'}
            widthset={80}
            topDistance={7}
            // loading={loading}
            // disabled={disable}

            onPress={() => setModalVisible(true)}
          />
          <CustomModal
            modalVisible={modalVisible}
            text={'Success'}
            btn_text={'Ok'}
            subtext={
              'Thank you for submitting your information We are currently reviewing them to ensure the accuracy and security of our platform. Please wait patiently while our team verifies your information.'
            }
            type={'single_btn'}
            onPress={() => closemodal()
            }
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

export default VehicleDocs;
