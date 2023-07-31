import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  PermissionsAndroid,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

///////////////import app components/////////////
import CamerBottomSheet from '../../../components/CameraBottomSheet/CameraBottomSheet';
import ChatHeader from '../../../components/Chat/ChatHeader';

////////emoji picker/////////////
import EmojiPicker from 'rn-emoji-keyboard';

////////////////app styles/////////////////////
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

///////////////////app Packages//////////////
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
  Composer,
  Avatar,
} from 'react-native-gifted-chat';

//////////////furestore/////////////
import firestore from '@react-native-firebase/firestore';

//////////////////////////app api/////////////////////////
//import axios from 'axios';
//import {BASE_URL, IMAGE_URL} from '../../../utills/ApiRootUrl';
//import AsyncStorage from '@react-native-async-storage/async-storage';

/////////////////app images//////////////
import Colors from '../../../utils/Colors';

////////////////////navigation//////////////////
import {useIsFocused} from '@react-navigation/native';

//////////////sens button svg////////////
import SendBtn from '../../../assets/svgs/Chat/Send_icon.svg';
import Smily_Icon from '../../../assets/svgs/Chat/Smily_icon.svg';
import {fontFamily} from '../../../constants/fonts';
import {appImages} from '../../../constants/images';

const image =
  'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max';

const ChatScreen = ({route, navigation}) => {
  //////////navigation//////////
  const isFocused = useIsFocused();

  ////////////previos data//////////
  const [emoji_visible, setEmojivisible] = useState(false);

  ////////////previos data//////////
  const [predata] = useState(route.params);

  ////////Bottom sheet references/////////
  const refRBSheet = useRef();

  //////////////chat states/////////////
  const [messages, setMessages] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  /////////////login user//////////
  const [login_user, setLoginUser] = useState('');

  /////////////Get Notification/////////////
  const [profileImage, setProfileImage] = useState('');
  const [username, setUsername] = useState('');

  const AllMessages = async () => {
    var user = 'driver_1';
    const doc_id =
      route.params.userid > user
        ? user + '-' + route.params.userid
        : route.params.userid + '-' + user;

    const messageRef = firestore()
      .collection('chats')
      .doc(doc_id)
      .collection('messages')
      .orderBy('createdAt', 'desc');

    messageRef.onSnapshot(querySnap => {
      const allmsg = querySnap.docs.map(docsnap => {
        const data = docsnap.data();
        if (data.createdAt) {
          return {
            ...docsnap.data(),
            createdAt: docsnap.data().createdAt.toDate(),
          };
        } else {
          return {
            ...docsnap.data(),
            createdAt: new Date(),
          };
        }
      });
      setMessages(allmsg);
    });
  };
  const ref = useRef();

  useEffect(() => {
    AllMessages();
    //   requestCameraPermission();
  }, [isFocused]);
  const onSend = useCallback((messages = []) => {
    handleSend(messages);
  }, []);
  const handleSend = async messageArray => {
    console.log('here message content', messageArray);
    var user = 'driver_1';
    //var user = await AsyncStorage.getItem('Userid');
    const docid =
      route.params.userid > user
        ? user + '-' + route.params.userid
        : route.params.userid + '-' + user;

    let myMsg = null;
    const msg = messageArray[0];
    console.log('here chat message value', msg);
    {msg.text?
    myMsg = {
      ...msg,
      text:msg.text,
      type: 'image_text',
      senderId: '2',
      receiverId: '1',
      user: {
        _id: user,
        name: 'usman',
        //avatar: image,
      },
    }
    :
    myMsg = {
      ...msg,
      text:msg.emoji,
      type: 'image_text',
      senderId: '2',
      receiverId: '1',
      user: {
        _id: user,
        name: 'usman',
        //avatar: image,
      },
    };
  }

    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    firestore()
      .collection('chats')
      .doc(docid)
      .collection('messages')
      .add({
        ...myMsg,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    messages.forEach(message => {});
    AllMessages();
  };

  ///////////////emoji////////
  const [isOpen, setIsOpen] = useState(false);
  const handlePick = emojiObject => {
    const imageMessage = {
      _id: Math.round(Math.random() * 1000000),
      emoji: emojiObject.emoji,
      createdAt: new Date(),
      user: {
        _id: predata.userid, // Provide a unique user ID
      },
    };
    handleSend([imageMessage]);
  };

  const toggle_emoji = () => {
    console.log('here status', isOpen);
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const CustomInputToolbar = props => {
    return (
      <View
        style={{
          bottom: hp(0),
          height: hp(7),
          width: wp(100),
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          backgroundColor: '#F4F8FC',
          //bottom: hp(1),
        }}>
        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: '#F4F8FC',
            paddingLeft: wp(10),
            paddingRight: wp(9),
            width: wp(80),
            left: wp(3),
            bottom: hp(0.5),
            borderColor: '#F4F8FC',
            borderWidth: 1,
          }}
        />
        <TouchableOpacity
          style={{position: 'absolute', top: hp(1), left: wp(4)}}
          onPress={() => toggle_emoji()}>
          <Smily_Icon width={wp(7)} height={hp(5)} />
        </TouchableOpacity>
      </View>
    );
  };
  const SendComponent = props => {
    return (
      <Send
        {...props}
        containerStyle={{
          borderWidth: 0,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: hp(5),
            width: wp(12),
            position: 'absolute',
            bottom: hp(0),
            left: wp(12),
          }}>
          <SendBtn width={wp(12)} height={hp(10)} />
        </View>
      </Send>
    );
  };
  const CustomBubbleText = props => {
    return (
      <View>
        {props.currentMessage.emoji ? (
                <Text
                style={{
                  color: 'black',
                  paddingHorizontal: wp(1),
                  paddingVertical: 0,
                  fontFamily: fontFamily.Nunito_Medium,
                  //fontWeight: "bold",
                }}>
                {props.currentMessage.emoji}
              </Text>
        ) : (
          <Text
            style={{
              color: 'black',
              paddingHorizontal: wp(1),
              paddingVertical: 0,
              fontFamily: fontFamily.Nunito_Medium,
              //fontWeight: "bold",
            }}>
            {props.currentMessage.text}
          </Text>
        )}
      </View>
    );
  };

  const CustomChatBubble = props => {
    const {user, currentMessage} = props;
    const isCurrentUser = currentMessage.user._id === user._id;

    return (
      <View
        style={[
          styles.bubblecontainer,
          isCurrentUser && styles.containerCurrentUser,
        ]}>
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: Colors.Appthemecolor,
              borderBottomRightRadius: 3,
              borderBottomLeftRadius: 10,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              marginBottom: hp(3),
              marginRight: 0,
              alignItems: 'flex-end', // Align the content to the right
              paddingTop: 10,
              paddingBottom: 5,
              paddingHorizontal: 5,
            },
            left: {
              backgroundColor: '#F4F8FC',
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 5,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              marginBottom: hp(3),
              marginLeft: 0,
              alignItems: 'flex-start', // Align the content to the left
              paddingTop: 10,
              paddingBottom: 5,
              paddingHorizontal: 5,
            },
          }}
          containerStyle={{
            backgroundColor: 'red',
          }}
          timeTextStyle={{
            left: {
              color: '#AFB3BC',
              fontFamily: fontFamily.Nunito_Medium,
              fontSize: hp(1.4),
              marginBottom: -35,
              top: 18,
              position: 'relative',
            },
            right: {
              color: '#AFB3BC',
              fontFamily: fontFamily.Nunito_Medium,
              fontSize: hp(1.4),
              marginBottom: -35,
              top: 18,
              position: 'relative',
            },
          }}
          messageTextStyle={{
            left: {
              color: '#1E263C', // Color for text in the left bubble (from other users)
              fontSize: hp(1.8), // Customize font size
              lineHeight: 20, // Customize line height
              fontFamily: fontFamily.Nunito_Medium,
            },
            right: {
              color: '#1E263C', // Color for text in the left bubble (from other users)
              fontSize: hp(2), // Customize font size
              lineHeight: 20, // Customize line height
              fontFamily: fontFamily.Nunito_Medium,
            },
          }}
          //showUserAvatar
          //renderUsernameOnMessage
          //renderAvatarOnTop
          //renderAvatar={renderAvatar}
          // renderAvatar={avatarProps => (
          //   <Image
          //     source={appImages.BookRide} // Replace with your own avatar source
          //     style={styles.avatar}
          //   />
          // )}
        />
      </View>
    );
  };

  const renderAvatar = props => {
    const {currentMessage} = props;
    // console.log("here avatar:",currentMessage.user.avatar)
    return (
      <Avatar
        source={{uri: currentMessage.user.avatar}}
        style={{backgroundColor: 'red'}}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.Appthemecolor}
        barStyle="dark-content"
      />
      <ChatHeader
        title={'Chat'}
        left_icon={'chevron-back-sharp'}
        type={'withoutlogo'}
        left_iconPress={() => {
          navigation.goBack();
        }}
        username={'Mark Hailey'}
        userimage={profileImage}
      />
      {/* <View style={{backgroundColor: 'red'}}>
        <Image
          source={appImages.BookRide} // Replace with your own avatar source
          style={styles.avatar}
          resizeMode="cover"
        />
      </View> */}

      <GiftedChat
        alwaysShowSend
        showUserAvatar={true}
        //showAvatarForEveryMessage={true}
        isTyping={true}
        //renderAvatar={renderAvatar}
        renderAvatar={() => null}
        bottomOffset={8}
        // /inverted={true}
        multiline={true}
        //minInputToolbarHeight={hp(80)}
        textInputStyle={{
          fontSize: hp(1.8),
          color: 'black',
          //backgroundColor: '#F4F8FC',
          // height: hp(3),
        }}
        textInputProps={{
          placeholder: 'Write text here',
          placeholderTextColor: '#7A7C87',
          autoFocus: false,
          autoCorrect: false,
          style: {
            //backgroundColor: '#F4F8FC',
            width: wp(60),
            height: hp(6),
            color: 'black',
            fontSize: hp(2),
            // bottom: 0,
          },
        }}
        renderInputToolbar={props => {
          return <CustomInputToolbar {...props} />;
        }}
        renderSend={props => {
          return <SendComponent {...props} />;
        }}
        messages={messages}
        onSend={text => {
          onSend(text);
        }}
        user={{
          _id: 'driver_1',
          // avatar: image,
        }}
        custontext={{}}
        renderBubble={props => <CustomChatBubble {...props} />}
        renderMessageText={props => {
          return <CustomBubbleText {...props} />;
        }}
        // Render the user's avatar
      />

      <CamerBottomSheet
        refRBSheet={refRBSheet}
        onClose={() => refRBSheet.current.close()}
        title={'From Gallery'}
        type={'Chat_image'}
      />

      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
