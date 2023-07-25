import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';

////////////////////app pakages////////////////////////
import {Rating} from 'react-native-ratings';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

///////app fonts//////////////
import {fontFamily} from '../../../constants/fonts';

////////////////////progress////
import * as Progress from 'react-native-progress';

/////////reviews dta/////////////
import { Reviews_data } from '../../../App_dummy_App/data/Reviews_list';

////////////////dataa//////////////////
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Username here',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sagittis arcu a malesuada. Maecenas fringilla enim eu nibh bibendum, id semper lectus vulputate. Quisque malesuada metus at diam congue, sed laoreet enim tristique',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Username here',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sagittis arcu a malesuada. Maecenas fringilla enim eu nibh bibendum, id semper lectus vulputate. Quisque malesuada metus at diam congue, sed laoreet enim tristique',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Username here',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sagittis arcu a malesuada. Maecenas fringilla enim eu nibh bibendum, id semper lectus vulputate.',
  },
];

////////////////dataa//////////////////
const progress = [
  {
    id: '5',
    barcolor: '#76DC99',
    barpercent: '75',
    value: '982',
  },
  {
    id: '4',
    barcolor: '#B7EA83',
    barpercent: '16',
    value: '205',
  },
  {
    id: '3',
    barcolor: '#F6D757',
    barpercent: ' 5',
    value: ' 65',
  },
  {
    id: '2',
    barcolor: '#FBB851',
    barpercent: ' 1',
    value: ' 17',
  },
  {
    id: '1',
    barcolor: '#F17A56',
    barpercent: ' 3',
    value: ' 46',
  },
];

const MyRattings = ({navigation}) => {
  ///////////total rattings/////
  const [total_ratting, setTotal_Ratting] = useState('');

  //////ratting function/////////
  let ratingCompleted = rating => {
    setTotal_Ratting(rating);
  };

  ///render function
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.itemview}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={item.user_image}
              style={{width: wp(10), height: hp(5), borderRadius: wp(5)}}
              resizeMode="contain"
            />
            <View style={{marginLeft: wp(2)}}>
              <Text style={styles.usernametext}>{item.user_name}</Text>
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
            </View>
          </View>
          <Text style={styles.reviewtext}>{item.detail}</Text>
        </View>
        <View style={styles.line} />
      </View>
    );
  };

  ///render function
  const progressrenderItem = ({item}) => {
    return (
      <View>
        <View style={styles.progressview}>
          <Text style={styles.progresstext}>{item.id}</Text>
          <View>
            <Progress.Bar
              progress={item.barpercent / 100}
              width={wp(65)}
              height={hp(1.8)}
              color={item.barcolor}
              unfilledColor="#F3F2FA"
              borderWidth={0}
            />
          </View>
          <Text style={styles.progresspercentagetext}>{item.barpercent}%</Text>
          <Text style={styles.progresstext}>{item.value}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
            <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}>
      <CustomHeader
        headerlabel={'My Rattings'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
      <View style={styles.topview}>
        <Text style={styles.itemtext}>4.7</Text>
        <Rating
          ratingCount={5}
          imageSize={20}
          ratingColor={'orange'}
          ratingContainerStyle={{backgroundColor: 'black'}}
          starContainerStyle={{backgroundColor: 'black'}}
          onFinishRating={ratingCompleted}
        />
      </View>

      <View style={{paddingHorizontal: wp(2), marginTop: hp(1)}}>
        <FlatList
          data={progress}
          renderItem={progressrenderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={{paddingHorizontal: wp(4), marginTop: hp(3)}}>
        <FlatList
          data={Reviews_data}
          renderItem={renderItem}
          scrollEnabled={false}
          keyExtractor={item => item.id}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyRattings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  topview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2.5),
    marginBottom: hp(2),
    marginLeft: wp(5),
  },
  itemview: {paddingHorizontal: wp(4)},
  itemtext: {
    color: '#000',
    fontSize: hp(3),
    fontFamily: fontFamily.Nunito_Bold,
    marginRight: wp(3),
  },
  line: {
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
    marginVertical: hp(2),
  },

  /////////////////////////Ratting//////////////////
  usernametext: {
    color: '#121420',
    fontSize: hp(1.7),
    fontFamily: fontFamily.Nunito_SemiBold,
    marginBottom: hp(0.5),
  },
  reviewtext: {
    color: '#50555C',
    fontSize: hp(1.5),
    fontFamily: fontFamily.Nunito_Medium,
    //paddingHorizontal: wp(5),
    marginTop: hp(1),
    lineHeight:hp(3),
    width:wp(89)
  },
  progressview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    justifyContent: 'space-between',
    marginVertical: hp(1),
  },
  progresstext: {
    color: '#707070',
    fontSize: hp(1.5),
    fontFamily: fontFamily.Nunito_Medium,
  },
  progresspercentagetext: {
    color: '#222222',
    fontSize: hp(1.5),
    fontFamily: fontFamily.Nunito_Bold,
  },
});
