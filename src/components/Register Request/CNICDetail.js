import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
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

////////////////svgs////////////
import UploadIcon from '../../assets/svgs/CreateProfile/documentupload.svg';

const CNICDetail = ({onpress}) => {

  ////////////////navigation state////////////
  const navigation = useNavigation();

  /////////////data states/////////////
  const [cnic_number, setCNICNumber] = useState('');

  //camera and imagepicker
  const refRBSheet = useRef();

  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);

  const handleImageSelected = uri => {
    if (image === null) {
      setImage(uri);
    } else {
      setImage1(uri);
    }
  };

  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: wp(0)}]}>
      <CustomTextInput
        type={'withouticoninput'}
        term={cnic_number}
        view_widthset={85}
        textinput_widthset={67}
        onTermChange={text => setCNICNumber(text)}
        PlaceholderText={'CNIC Number*'}
        focus={'true'}
      />
      <View style={styles.uploadiew}>
        {image === null ? (
          <TouchableOpacity onPress={() => refRBSheet.current.open()}
          style={styles.clickuploadiew}>
            <UploadIcon width={wp(15)} height={hp(6)} />
            <Text style={styles.uploadviewtext}>CNIC Image (Front Side)</Text>
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
          <TouchableOpacity onPress={() => refRBSheet.current.open()}
          style={styles.clickuploadiew}
          >
            <UploadIcon width={wp(15)} height={hp(6)} />
            <Text style={styles.uploadviewtext}>CNIC Image (Back Side)</Text>
          </TouchableOpacity>
        ) : (
          <Image
            source={{uri: image1}}
            style={styles.imagestyle}
            resizeMode="cover"
          />
        )}

      </View>
      <CustomButtonhere
        title={'Continue'}
        widthset={80}
        topDistance={10}
        // loading={loading}
        // disabled={disable}
        onPress={onpress}
      />
      <CamerBottomSheet
        refRBSheet={refRBSheet}
        onClose={() => refRBSheet.current.close()}
        title={'From Gallery'}
        type={'onepic'}
        onImageSelected={handleImageSelected}
      />
    </SafeAreaView>
  );
};

export default CNICDetail;
