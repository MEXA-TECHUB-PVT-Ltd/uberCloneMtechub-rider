import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../components/Header/CustomHeader';
import MyWalletCard from '../../components/NotificationView/Mywallet';
import IconsTopTabs from '../../components/IconsTabs/IconsTopTabs';
import HistoryRidesCard from '../../components/CustomCards/HistoryRidesCard';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

/////////////////colors/////////////
import Colors from '../../utils/Colors';

///////////////////svgs//////////////
import Menu_Icon from '../../assets/svgs/Menu_icon.svg';
import Bell from '../../assets/svgs/DashboardBell.svg';
import { fontFamily } from '../../constants/fonts';

////////////////dataa//////////////////
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Home = ({navigation}) => {
  //////////////////////menu states///////
  const [sent, setSent] = useState(true);
  const [recieved, setRecieved] = useState(false);

  /////////////Get Notification/////////////
  const [Notifications, setNotifications] = useState('');

  ///render function
  const renderItem = ({item}) => {
    return (
      <HistoryRidesCard
        notitext={' William Edward'}
        notisubtext={'03:00 PM, 12/06/2023'}
        notitime={'$24,00'}
        km={'24 km'}
        cardPress={() => {
          navigation.navigate('OnGoingTrip');
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}> */}
      <CustomHeader
        headerlabel={'Home'}
        iconPress={() => {
          navigation.toggleDrawer()
        }}
        icon={'menu'}
        searchicon={ 
        <Bell width={wp(15)} height={hp(7)} />
       }
        onpresseacrh={() => {
          navigation.navigate('Notification')
        }}
      />
      <View style={{backgroundColor:Colors.Appthemecolor,width:wp(100),height:hp(6),justifyContent:'center'}}>
        <Text style={{color:'black',marginLeft:wp(5),fontFamily:fontFamily.Nunito_SemiBold,fontSize:hp(1.7)}}>
        You have 10 new requests.
        </Text>
      </View>
      <View style={{}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Home;
