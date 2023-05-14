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
    ImageBackground
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import auth from '@react-native-firebase/auth';
import { images, FONTS, SIZES, COLORS } from "../constants";

const Login = ({ navigation }: any) => {
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
        setEmailError(false)
        setPasswordError(false)
    }
    // replaces password text with * on active
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    return (
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{ flex: 1, paddingVertical: SIZES.padding, justifyContent: 'center' }}
        >
            <SafeAreaView>
                <KeyboardAwareScrollView>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <View
                            style={{
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                source={images.logo}
                                resizeMode="contain"
                                style={{
                                    height: 250,
                                    width: 500,
                                }}
                            />
                        </View>
                        <View
                            style={{
                                flex: 3,
                                paddingHorizontal: 20,
                                paddingVertical: 30,
                                marginBottom: -10,
                            }}
                        >

                            <Text style={styles.textAbove}>Email</Text>
                            <View style={styles.textBoxSign}>
                                <Image source={images.person} resizeMode="contain" style={{ width: 26, height: 40, right: 2, alignSelf: 'flex-start' }} />
                                <TextInput
                                    placeholder="Enter your email ..."
                                    onChangeText={(value) => setEmail(value)}
                                    autoCapitalize={"none"}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                    }}
                                />
                            </View>
                            <Text style={{ fontSize: 14, marginLeft: 12, marginTop: 30 }}>Full Name</Text>
                            <View style={styles.textBoxSign}>
                                <Image source={images.person} resizeMode="contain" style={{ width: 26, height: 40, right: 2, alignSelf: 'flex-start' }} />
                                <TextInput
                                    placeholder="Enter your Full ..."
                                    onChangeText={(value) => setEmail(value)}
                                    autoCapitalize={"none"}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 2,
                                    }}
                                />
                            </View>           
                            <Text style={{ fontSize: 14, marginLeft: 12, marginTop: 30 }}>Password</Text>
                            <View style={styles.textBoxSign}>
                                <Image source={images.lock} resizeMode="contain" style={{ width: 25, height: 20, top: 10, alignSelf: 'flex-start' }} />
                                <TextInput
                                    placeholder="Enter your password..."
                                    secureTextEntry={data.secureTextEntry ? true : false}
                                    onChangeText={(value) => setPassword(value)}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 5
                                    }}
                                />
                                <TouchableOpacity onPress={updateSecureTextEntry} style={{ alignItems: 'flex-end' }}>
                                    {data.secureTextEntry ?
                                        <Image source={images.eyeclosed} resizeMode="contain" style={{ width: 25, height: 40 }} />
                                        :
                                        <Image source={images.eye} resizeMode="contain" style={{ width: 25, height: 40 }} />
                                    }
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 14, marginLeft: 12, marginTop: 30 }}>Confirm Password</Text>
                            <View style={styles.textBoxSign}>
                                <Image source={images.lock} resizeMode="contain" style={{ width: 25, height: 20, top: 10, alignSelf: 'flex-start' }} />
                                <TextInput
                                    placeholder="Enter your password..."
                                    secureTextEntry={data.secureTextEntry ? true : false}
                                    onChangeText={(value) => setPassword(value)}
                                    style={{
                                        flex: 1,
                                        height: 40.5,
                                        fontSize: 15,
                                        marginLeft: 5
                                    }}
                                />
                                {/* <TouchableOpacity onPress={updateSecureTextEntry} style={{ alignItems: 'flex-end' }}>
                                    {data.secureTextEntry ?
                                        <Image source={images.eyeclosed} resizeMode="contain" style={{ width: 25, height: 40 }} />
                                        :
                                        <Image source={images.eye} resizeMode="contain" style={{ width: 25, height: 40 }} />
                                    }
                                </TouchableOpacity> */}
                            </View>
                            <TouchableOpacity>
                                <Text style={{ color: COLORS.darkgray, marginBottom: -15, top: 8, alignSelf: 'flex-end', right: 25 }}>Reset Password</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                flexDirection: "row",
                                alignContent: "center",
                                justifyContent: "center",
                                height: 55,
                                marginHorizontal: 30,
                                marginTop: 40,
                                marginBottom: -20,
                                paddingHorizontal: SIZES.radius,
                                borderRadius: 50,
                                backgroundColor: COLORS.primary,
                                ...styles.shadow
                            }}
                            // onPress={handleSignIn}
                            >
                                <View >
                                    <Text
                                        style={{
                                            justifyContent: 'center',
                                            alignSelf: 'center',
                                            top: 10,
                                            color: COLORS.white,
                                            fontSize: 30
                                        }}
                                    >Sign Up</Text>
                                </View>
                            </TouchableOpacity>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: SIZES.radius * 2.5,
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>I have an account? </Text>

                                <TouchableOpacity
                                    style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.transparent }}
                                onPress={() => navigation.navigate("Home")}
                                >
                                    <Text
                                        style={{
                                            color: COLORS.primary,
                                            fontSize: 19,
                                        }}
                                    >Sign In</Text>
                                </TouchableOpacity>
                            </View>

                            {/* <View style={{ flexDirection: "row", marginTop: 15, justifyContent: 'center', marginBottom: 5 }}>
                                <TouchableOpacity style={{
                                    flexDirection: "row",
                                    alignContent: "center",
                                    justifyContent: "center",
                                    height: 65,
                                    width: 120,
                                    marginHorizontal: 20,
                                    marginBottom: -20,
                                    borderRadius: 50,
                                    backgroundColor: COLORS.white,
                                    // elevation: 1,
                                    ...styles.shadow
                                }}>
                                    <Image
                                        source={images.google}
                                        style={{
                                            alignSelf: "center",
                                            height: 40,
                                            width: 40
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    flexDirection: "row",
                                    alignContent: "center",
                                    justifyContent: "center",
                                    height: 65,
                                    width: 120,
                                    marginHorizontal: 20,
                                    marginBottom: -20,
                                    borderRadius: 50,
                                    backgroundColor: "#4267B2",
                                    // elevation: 1, 
                                    ...styles.shadow
                                }}>
                                    <Text style={{ color: COLORS.white, alignSelf: 'center', fontSize: 40, fontWeight: 'bold' }}>f</Text>
                                </TouchableOpacity>
                            </View> */}

                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </ImageBackground>
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
        marginTop: 5,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
    },
    textAbove: { fontSize: 14, marginLeft: 12 },

})

export default Login;

