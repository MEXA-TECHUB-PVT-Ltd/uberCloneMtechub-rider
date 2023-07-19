import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
  Image,
  Text,
} from 'react-native';

////////////naviagtion///////////////
import {useIsFocused} from '@react-navigation/native';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';

////////////////height and width////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

//////////////list dta///////////////
import {chatlist_data} from '../../../App_dummy_App/data/Chatlist_data';

const ChatList = ({navigation}) => {
  /////////navigation variable/////////////
  const isFocused = useIsFocused();

  ///////////////Modal States///////////////
  const [modalVisible, setModalVisible] = useState(false);

  ///////////////////firebase all users///////////////
  // const firebase_all_users=()=>{
  //   const userList = [];
  //   firestore()
  // .collection('Users')
  // .get()
  // .then(querySnapshot => {
  //   console.log('Total users: ', querySnapshot.size);
  //   //console.log('Total users: ', querySnapshot.data());
  //   querySnapshot.forEach(documentSnapshot => {
  //     const user_data=documentSnapshot.data()
  //     userList.push(user_data);
  //     setData(userList)
  //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  //   });
  // });
  // }

  ///////////////////flatlist render item///////////////
  const renderitem = ({item}) => {
    return (
      // <TouchableOpacity
      //   onPress={() =>
      //     navigation.navigate('ChatScreen', {
      //       navtype: 'chatlist',
      //       userid: item.id,
      //     })
      //   }>
        <TouchableOpacity style={[styles.card,{backgroundColor:item.active === "true"?"#FAC21366":'white'}]}
          onPress={() =>{
            
          }
            // navigation.navigate('ChatScreen', {
            //   navtype: 'chatlist',
            //   userid: item.id,
            // })
          }
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              // alignItems: "center",
              marginBottom: wp('3%'),
              alignItems: 'center',
            }}>
            <View style={{}}>
              <Image
                source={item.user_image}
                style={{width: wp(14), height: hp(8)}}
                resizeMode="contain"
              />
            </View>

            <View style={{marginLeft: wp(2), marginTop: hp(1), width: wp(55)}}>
              <Text style={styles.user_name_txt}>{item.user_name}</Text>
              <Text style={[styles.detailtxt, {color: '#7A8FA6'}]}>
                {item.detail}
              </Text>
            </View>
            <View style={{}}>
            <Text style={[styles.timetxt, {color: '#7A8FA6'}]}>
              {item.time}
            </Text>
          </View>
          </View>

        </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
          <CustomHeader
        headerlabel={'My Chats'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
      <View style={{marginTop: hp(3)}}>
        <FlatList
          data={chatlist_data}
          renderItem={renderitem}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatList;
