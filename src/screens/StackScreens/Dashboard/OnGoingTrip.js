import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

///////////////////app components////////////
import CustomButtonhere from '../../../components/Button/CustomButton';
import CustomHeader from '../../../components/Header/CustomHeader';
import VerticalLine from '../../../components/VerticleLine/VerticleLine';

////////app styles///////////////////
import styles from './styles';

//////////////paper///////////////
import {Avatar} from 'react-native-paper';

////height and width///////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

///////////////////map states//////////////////
import MapView, {
  PROVIDER_GOOGLE,
  Polyline,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

/////////////map key//////
import {MapKeyApi} from '../../../utils/MapKey';

////////////location function////////////////
import {
  getCurrentLocation,
  locationPermission,
} from '../../../api/CurrentLocation';

/////////////map variables////////////////
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.08;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

///////////////////svgs//////////////
import UserLocatin_marker from '../../../assets/svgs/UserLocation.svg';
import Car_marker from '../../../assets/svgs/Car_icon.svg';
import LocationStart from '../../../assets/svgs/Starting_icon.svg';
import LocationIcon from '../../../assets/svgs/Location_icon.svg';
import Call from '../../../assets/svgs/ColorCall_icon.svg';
import Chat from '../../../assets/svgs/ColorChat_icon.svg';

/////////////app fonts///////////////////
import {fontFamily} from '../../../constants/fonts';

//////////////////firebase////////////////
import firestore from '@react-native-firebase/firestore';

const pinsdata = [
  {latitude: 33.6493, longitude: 73.0843},
  {
    latitude: 33.6431,
    longitude: 73.0733,
  },
];

const OnGoingTrip = ({navigation, route}) => {
  //////////////menu states//////////
  const [confirm_ride, setConfirmRide] = useState(false);
  const [bike, setBike] = useState(true);
  const [car, setCar] = useState(false);
  const [van, setVan] = useState(false);

  ///////////////////map/////////////////////
  const mapRef = useRef();
  const markerRef = useRef();
  const ref = useRef();

  const [state, setState] = useState({
    curLoc: {
      //   latitude:    previousdata.driverLat,
      //   longitude:  previousdata.driverLng,
      // latitude:    previousdata.pickupLat,
      // longitude:  previousdata.pickupLng,
      latitude: 33.6491,
      longitude: 73.0833,
    },
    destinationCords: {
      //   latitude:    previousdata.pickupLat,
      //   longitude:  previousdata.pickupLng,
      latitude: 33.6844,
      longitude: 73.0479,
      // latitude:    previousdata.dropoffLat,
      // longitude:  previousdata.dropoffLng,
    },
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
    time: 0,
    distance: 0,
    heading: 0,
  });

  const {
    curLoc,
    time,
    distance,
    destinationCords,
    isLoading,
    coordinate,
    heading,
  } = state;
  const updateState = data => setState(state => ({...state, ...data}));

  const animate = (latitude, longitude) => {
    const newCoordinate = {latitude, longitude};
    if (Platform.OS == 'android') {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 1000);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  };

  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const {latitude, longitude, heading} = await getCurrentLocation();
      console.log('get live location after 4 second', heading);
      animate(latitude, longitude);
      updateState({
        heading: heading,
        curLoc: {latitude, longitude},
        coordinate: new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }),
      });
    }
  };

  toggleviewbutton = () => {
    if (confirm_ride === true) {
      setConfirmRide(false);
    } else {
      setConfirmRide(true);
    }
  };

  ///////////////chat functions with firebase
  const [friendList, setFriendList] = useState([]);

  const user = async () => {
    //var user_id = await AsyncStorage.getItem('User_id');
    firestore()
      .collection('users')
      .doc('driver_doc')
      .onSnapshot(snapshot => {
        if (snapshot.exists) {
          const userData = snapshot.data();
          const userFriendList = userData.friends || [];
          setFriendList(userFriendList);
        }
      });
  };

  useEffect(() => {
    user();
  }, []);

  const startChatWithUser = async () => {
   // var user_id =  await AsyncStorage.getItem('User_id');
    var Item_userid = 'customer_1';
    //const isFriend = friendList.includes(Item_userid);
    const isFriend = friendList.some(friend => friend.id === Item_userid);
    console.log('Chat other user.', isFriend, Item_userid, '........');
    if (isFriend) {
      // Start the chat with the other user
      console.log('Chat started with the other user.');
      navigation.navigate('ChatScreen', {
        navtype: 'chatlist',
        userid: Item_userid,
      });
    } else {
      await firestore()
        .collection('users')
        .doc('driver_doc')
        .update({
          friends: firestore.FieldValue.arrayUnion({
            id: Item_userid,
            user_name: 'username',
            user_image: 'tt',
          }),
        })
        .then(() => {
          navigation.navigate('ChatScreen', {
            navtype: 'chatlist',
            userid: Item_userid,
          });
          // Start the chat with the other user
          console.log('Chat started with the other user.');
        })
        .catch(error => {
          console.log('Error adding other user to the friend list:', error);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container1}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{backgroundColor: 'white', height: hp(24), width: wp(100)}}>
          <Text>here</Text>
          <CustomHeader
            headerlabel={'Ride Request'}
            iconPress={() => {
              navigation.goBack();
            }}
            icon={'chevron-back'}
          />
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: wp(4.5),
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <LocationStart width={wp(7)} height={hp(3)} />
              <VerticalLine />
              <LocationIcon width={wp(8)} height={hp(3)} />
            </View>
            <View style={{height: hp(9)}}>
              <Text style={styles.toptext}>Cibadak, Sukabumi</Text>
              <Text style={[styles.toptext, {marginTop: hp(4)}]}>
                Cisaat selatan, Sukabumi
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.container]}>
          {0 === 0 ? (
            <MapView
              ref={mapRef}
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={[styles.map, {height: hp(50)}]}
              initialRegion={{
                ...curLoc,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              // region={{
              //   // latitude:  previousdata.pickupLocation.coordinates.latitude,
              //   // longitude:  previousdata.pickupLocation.coordinates.longitude,
              //   // latitudeDelta: 0.015,
              //   // longitudeDelta: 0.0121,
              //   latitude: 37.78825,
              //   longitude: -122.4324,
              //   latitudeDelta: 0.015,
              //   longitudeDelta: 0.0121,
              // }}
            >
              <Marker.Animated
                ref={markerRef}
                coordinate={
                  //coordinate
                  curLoc
                }>
                <UserLocatin_marker width={wp(15)} height={hp(6)} />
              </Marker.Animated>
              {pinsdata.map((marker, index) => {
                return (
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: marker.latitude,
                      longitude: marker.longitude,
                    }}
                    onPress={() => {}}>
                    <Car_marker width={wp(6)} height={hp(6)} />
                  </Marker>
                );
              })}
              {/* {Object.keys(destinationCords).length > 0 && (
            <Marker coordinate={destinationCords} image={appImages.orangeloc} />
          )} */}

              {Object.keys(destinationCords).length > 0 && (
                <MapViewDirections
                  origin={curLoc}
                  destination={destinationCords}
                  apikey={MapKeyApi}
                  strokeWidth={6}
                  strokeColor="red"
                  optimizeWaypoints={true}
                  onStart={params => {
                    console.log(`Started routing between "${params.origin}" 
                            and "${params.destination}"`);
                  }}
                  onReady={result => {
                    console.log(`Distance: ${result.distance} km`);
                    console.log(`Duration: ${result.duration} min.`);
                    fetchTime(result.distance, result.duration),
                      mapRef.current.fitToCoordinates(result.coordinates, {
                        edgePadding: {
                          // right: 30,
                          // bottom: 300,
                          // left: 30,
                          // top: 100,
                        },
                      });
                  }}
                  onError={errorMessage => {
                    // console.log('GOT AN ERROR');
                  }}
                />
              )}
            </MapView>
          ) : null}
          <View
            style={{
              marginLeft: wp(3),
              marginBottom: hp(0),
              marginTop: hp(3),
            }}></View>

          <View style={[styles.lastView]}>
            <View
              style={{
                backgroundColor: 'white',
                height: hp(26),
                paddingTop: hp(2),
                width: wp(100),
                borderTopLeftRadius: wp(8),
                borderTopRightRadius: wp(8),
                paddingHorizontal: wp(5),
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Avatar.Icon
                    size={hp(6)}
                    color={'#DFDCD4'}
                    style={{backgroundColor: '#DFDCD4'}}
                  />
                  <View style={{width: wp(50), marginLeft: wp(3)}}>
                    <Text style={styles.username}>Norman Gordon</Text>
                    <Text style={styles.numberplate}>
                      Arrival Time:{' '}
                      <Text
                        style={[
                          styles.numberplate,
                          {fontFamily: fontFamily.Nunito_Bold},
                        ]}>
                        16 mins
                      </Text>
                    </Text>
                  </View>
                </View>
                <Call width={wp(10)} height={hp(5)} />
                <TouchableOpacity
                  onPress={() => {
                    startChatWithUser();
                  }}>
                  <Chat width={wp(10)} height={hp(5)} />
                </TouchableOpacity>
              </View>

              {confirm_ride === false ? (
                <CustomButtonhere
                  title={'Confirm Ride'}
                  widthset={80}
                  topDistance={5}
                  // loading={loading}
                  // disabled={disable}
                  onPress={() => {
                    toggleviewbutton();
                    //navigation.navigate('WelcomeScreen');
                  }}
                />
              ) : (
                <CustomButtonhere
                  title={'Reached'}
                  widthset={80}
                  topDistance={5}
                  // loading={loading}
                  // disabled={disable}
                  onPress={() => {
                    toggleviewbutton();
                    //navigation.navigate('WelcomeScreen');
                  }}
                />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnGoingTrip;
