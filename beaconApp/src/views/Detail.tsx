/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

const defaultRouteParams = {
    id: 0,
    name: 'unknown',
    text: 'unknown'
}

function Detail({ navigation, route }: any): JSX.Element {
    const { id, name, text } = route.params || defaultRouteParams;
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [flag, setFlag] = useState(false);
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <View style={styles.buttonContainer}>
                        <Text>{id}</Text>
                        <Text>{name}</Text>
                        <Text>{text}</Text>
                        <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        height: 400,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 150,
        padding: 10
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 24,
        fontWeight: '400',
        textAlign: 'center'
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Detail;
