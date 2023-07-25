import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

//////////////paper////////////
import {Avatar} from 'react-native-paper';

////////////////////app pakages////////////////////////
import {Rating} from 'react-native-ratings';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';
import HistoryRidesCard from '../../../components/CustomCards/HistoryRidesCard';
import DescriptionBottomSheet from '../../../components/CustomBottomSheet/DescriptionBTS';
import RattingModal from '../../../components/Modal/RattingModal';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////colors/////////////
import Colors from '../../../utils/Colors';

//////app fonts//////////
import {fontFamily} from '../../../constants/fonts';

const RidesDetail = ({navigation, route}) => {
  //////////previous data/////////
  const [predata] = useState(route.params);

  ///////////////Modal States///////////////
  const [modalVisible, setModalVisible] = useState(false);

  /////////////deatil bottom sheet refrence//////
  const refRBSheet = useRef();

  ///////////total rattings/////
  const [total_ratting, setTotal_Ratting] = useState('');

  //////ratting function/////////
  let ratingCompleted = rating => {
    setTotal_Ratting(rating);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}> */}
      <CustomHeader
        headerlabel={'Ride Details'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
   
      <View style={{marginBottom: hp(3)}}>
        <HistoryRidesCard
          notitext={' William Edward'}
          notisubtext={'12/06/03:00 PM, 12/06/2023'}
          notitime={'$24,00'}
          km={'24 km'}
          type={'detail'}
        />
      </View>
    
      <View style={{paddingHorizontal:wp(7)}}>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Icon
            size={hp(5.5)}
            style={{backgroundColor: '#E7E7E7'}}
            //source={appImages.GoogleLogo}
          />
          <View style={{marginLeft: wp(3)}}>
            <Text style={styles.usernametext}>Username</Text>
            {predata.navplace === 'completed' ? 
            <View style={{flexDirection: 'row'}}>
              <Rating
                ratingCount={5}
                imageSize={20}
                ratingColor={'orange'}
                ratingContainerStyle={{backgroundColor: 'black'}}
                starContainerStyle={{backgroundColor: 'black'}}
                onFinishRating={ratingCompleted}
              />
              <Text style={styles.usernametext}> 5</Text>
            </View>
            :
            <Text style={styles.notisubtext}>0000-0000000</Text>
            }
          </View>
        </View>
        {predata.navplace === 'completed' ?
        <Text style={styles.reviewtext} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices
          sagittis arcu a malesuada. Maecenas fringilla enim eu nibh bibendum,
          id semper lectus vulputate. Quisque malesuada metus at diam congue,
          sed laoreet enim tristique
        </Text>
        :null}
      </View>

      {/* {predata.navplace === 'completed' ? null : <View style={styles.line} />} */}
      {predata.navplace === 'completed' ? null : (
        <Text style={styles.maintext}>Reason of cancellation </Text>
      )}
      {predata.navplace === 'completed' ? null : (
        <View
          style={{
            marginHorizontal: wp(8),
            marginTop: hp(0),
          }}>
             <Text style={styles.reviewtext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices
          sagittis arcu a malesuada. Maecenas fringilla enim eu nibh bibendum,
          id semper lectus vulputate. Quisque malesuada metus at diam congue,
          sed laoreet enim tristique
        </Text>
        </View>
      )}


      {/* </ScrollView> */}
      <DescriptionBottomSheet
        refRBSheet={refRBSheet}
        onClose={() => refRBSheet.current.close()}
        title={'Report Driver'}
        subtitle={'Enter Comment'}
        btntext={'ADD'}
        onpress={() => {
          {
            doSomethingCallback();
          }
        }}
      />
      <RattingModal
        modalVisible={modalVisible}
        text={'Success'}
        btn_text={'Go to Create Profile'}
        subtext={'Account Verified Successfully'}
        type={'single_btn'}
        onPress={() => {
          setModalVisible(false);
          //navigation.navigate('CreateProfile');
        }}
      />
    </SafeAreaView>
  );
};

export default RidesDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  maintext: {
    color: '#000',
    fontSize: hp(2),
    fontFamily: fontFamily.Nunito_Bold,
    marginLeft: wp(6),
    marginTop:hp(2)
  },
  horizontalview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginVertical: hp(0.5),
  },
  lefttext: {
    color: '#000',
    fontSize: hp(1.8),
    fontFamily: fontFamily.Nunito_Bold,
  },
  righttext: {
    color: '#000',
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_Light,
    textAlign: 'right',
  },
  notimaintext: {
    color: 'black',
    fontFamily: fontFamily.Nunito_Bold,
    fontSize: hp(1.8),
    //fontWeight: '700',
  },

  notisubtext: {
    color: '#7A7C87',
    fontFamily: fontFamily.Nunito_Regular,
    fontSize: hp(1.5),
    //fontWeight: '400',
  },
  itemview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemtext: {
    color: '#000',
    fontSize: hp(1.7),
    fontFamily: fontFamily.Nunito_Bold,
  },

  line: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    marginVertical: hp(2),
    width: wp(83),
    alignSelf: 'center',
  },
  btntext: {
    color: 'black',
    fontSize: hp(1.8),
    fontFamily: fontFamily.Nunito_SemiBold,
  },

  usernametext: {
    color: '#121420',
    fontSize: hp(1.7),
    fontFamily: fontFamily.Nunito_Bold,
    marginBottom: hp(0.5),
  },
  reviewtext: {
    color: '#50555C',
    fontSize: hp(1.5),
    fontFamily: fontFamily.Nunito_Medium,
    //paddingHorizontal: wp(5),
    marginTop: hp(1),
    letterSpacing:0.1,lineHeight:hp(2.5)
  },
});
