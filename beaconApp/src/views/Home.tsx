/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
// import Icon from 'react-native-vector-icons/MaterialIcons';

import { fetchUsers } from '../apis';
import { images, FONTS, SIZES, COLORS } from "../constants";
import { useDispatch } from 'react-redux';
import { saveUserDetailsInRedux } from '../redux/actions/User'
import { Icon } from 'native-base';

const tabs = [
  {
    name: 'Home',
    activeIcon: <Icon name="home" color="#fff" size={25} />,
    inactiveIcon: <Icon name="home" color="#4d4d4d" size={25} />
  },
  {
    name: 'list',
    activeIcon: <Icon name="list-ul" color="#fff" size={25} />,
    inactiveIcon: <Icon name="list-ul" color="#4d4d4d" size={25} />
  },
  {
    name: 'camera',
    activeIcon: <Icon name="camera" color="#fff" size={25} />,
    inactiveIcon: <Icon name="camera" color="#4d4d4d" size={25} />
  },
  {
    name: 'Notification',
    activeIcon: <Icon name="bell" color="#fff" size={25} />,
    inactiveIcon: <Icon name="bell" color="#4d4d4d" size={25} />
  },
  {
    name: 'Profile',
    activeIcon: <Icon name="user" color="#fff" size={25} />,
    inactiveIcon: <Icon name="user" color="#4d4d4d" size={25} />
  },

];


const Login = ({ navigation }: any) => {
  // const dispatch = useDispatch();
  const [data, setData] = useState({
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
  });
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  // this is an auth state change for utilizing a database, specifically Firebase, that pushes the user's primary screen to Home after logging in (remove if you do not plan on implementing Firebase).
  useEffect(() => {
  }, []);
  // this const handles sign in protocol for the Firebase database to authenticate the user properly - if you wish to utilize, install Firebase and uncomment, else, remove.
  const handleSignIn = () => {
  }
  // replaces password text with * on active
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }
  return (
    // <SafeAreaView>
    //   <KeyboardAwareScrollView>
    //     <View
    //       style={{
    //         flex: 1,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         backgroundColor: 'black',
    //       }}
    //     >
    //       <View
    //         style={{
    //           flex: 2,
    //           paddingHorizontal: 20,
    //           paddingVertical: 30,
    //           width: '100%'
    //         }}
    //       >
    //         <View style={styles.textBoxSign}>
    //           <TextInput
    //             placeholder="SITE ID"
    //             onChangeText={(value) => setEmail(value)}
    //             autoCapitalize={"none"}
    //             style={{
    //               flex: 1,
    //               height: 40.5,
    //               fontSize: 15,
    //               marginLeft: 2,
    //             }}
    //           />
    //         </View>
    //         <View style={styles.textBoxSign}>
    //           <TextInput
    //             placeholder=""
    //             onChangeText={(value) => setEmail(value)}
    //             autoCapitalize={"none"}
    //             style={{
    //               flex: 1,
    //               height: 40.5,
    //               fontSize: 15,
    //               marginLeft: 2,
    //             }}
    //           />
    //         </View>
    //         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    //           <View style={{ ...styles.textBoxSign, width: '45%' }}>
    //             <TextInput
    //               placeholder="SITEID"
    //               onChangeText={(value) => setEmail(value)}
    //               autoCapitalize={"none"}
    //               style={{
    //                 flex: 1,
    //                 height: 40.5,
    //                 fontSize: 15,
    //                 marginLeft: 2,
    //               }}
    //             />
    //           </View>
    //           <View style={{ ...styles.textBoxSign, width: '49.9%' }}>
    //             <TextInput
    //               placeholder="SITE ID"
    //               onChangeText={(value) => setEmail(value)}
    //               autoCapitalize={"none"}
    //               style={{
    //                 flex: 1,
    //                 height: 40.5,
    //                 fontSize: 15,
    //                 marginLeft: 2,
    //               }}
    //             />
    //           </View>
    //         </View>
    //         <View style={styles.textBoxSign}>
    //           <TextInput
    //             placeholder="Enter your email ..."
    //             onChangeText={(value) => setEmail(value)}
    //             autoCapitalize={"none"}
    //             style={{
    //               flex: 1,
    //               height: 40.5,
    //               fontSize: 15,
    //               marginLeft: 2,
    //             }}
    //           />
    //         </View>
    //         <TouchableOpacity style={{
    //           flexDirection: "row",
    //           alignContent: "center",
    //           justifyContent: "center",
    //           height: 55,
    //           marginHorizontal: 30,
    //           marginTop: 40,
    //           marginBottom: -20,
    //           paddingHorizontal: SIZES.radius,
    //           borderRadius: SIZES.base,
    //           backgroundColor: COLORS.purple,
    //           ...styles.shadow
    //         }}
    //           onPress={handleSignIn}
    //         >
    //           <View >
    //             <Text
    //               style={{
    //                 justifyContent: 'center',
    //                 alignSelf: 'center',
    //                 top: 10,
    //                 color: COLORS.white,
    //                 fontSize: 20,
    //                 fontWeight: 'bold'
    //               }}
    //             >Add New Beacon</Text>
    //           </View>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </KeyboardAwareScrollView>
    // </SafeAreaView>
    <Tabbar
      tabs={tabs}
      tabBarContainerBackground='#6699ff'
      tabBarBackground='#fff'
      activeTabBackground='#6699ff'
      labelStyle={{ color: '#4d4d4d', fontWeight: '600', fontSize: 11 }}
      onTabChange={() => console.log('Tab changed')}
    />
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000", // for iphone drop shadow (specifies the android equivalent, elevation: 1)
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1
  },
  textBoxSign: {
    flexDirection: "row",
    height: 45,
    marginHorizontal: 5,
    marginTop: SIZES.base,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.lightGray,
    elevation: 2,
  },
  textAbove: { fontSize: 14, marginLeft: 12 },
})

export default Login;

