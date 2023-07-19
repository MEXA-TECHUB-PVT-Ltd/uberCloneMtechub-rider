import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

/////////////app icons/////////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';

//////////////////app styles//////////////////
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Switch } from 'react-native-paper';
import Colors from '../../utils/Colors';

const SettingsMenu = ({navigation, label, labelPress, icon,type}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <TouchableOpacity onPress={labelPress} style={styles.mainview}>
      <View style={{flexDirection:'row'}}>
        {icon}
      {/* <Ionicons
          name={icon}
          color={'#242A37'}
          size={22}
          onPress={labelPress}
        /> */}
        <Text style={styles.labeltext}>{label}</Text>
      </View>
{type === "switch"?
 <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={Colors.Appthemecolor}/>
:
<Ionicons
name="chevron-forward"
color={'#242A37'}
size={hp(2.3)}
onPress={labelPress}
/>
}

    </TouchableOpacity>
  );
};

export default SettingsMenu;
