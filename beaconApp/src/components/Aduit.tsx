import React, { useState, useEffect } from 'react';
// import type { PropsWithChildren } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

const manager = new BleManager();

type ListProps = {
    devices: any;
}

function List({ devices }: ListProps): JSX.Element {
    return devices.map(({ device}: any) => (
        <tr key={device.id}>
            <td>{device.id}</td>
            <td>{device.name}</td>
            <td>{device.txPowerLevel}</td>
            <td>{device.rssi}</td>
        </tr>
    ));
}

function Aduit(): JSX.Element {
    const [scanned, setScanned] = useState(false);
    const items : any[] = [];
    const [devices, setDevices] = useState(items);
    

    const scanAndConnect = () => {
        manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                // Handle error (scanning will be stopped automatically)
                return console.log('device scanning result is ...', error)
            }
            console.debug(device);
            items.push(device);
            setDevices(items);
        });
    }
    useEffect(() => {
        const subscription = manager.onStateChange((state) => {
            console.log('Hello World Aduit');
            if (state === 'PoweredOn') {
                scanAndConnect();
                subscription.remove();
            }
        }, true);
        return console.log('Bye world');
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello Aduit Mode
            </Text>
            {!scanned && (
                <Text style={styles.text}>
                   ... Searching devices ...
                </Text>
            )}
            {scanned && (
                <table>
                    <List devices={devices}></List>
                </table>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:400
    },
    text: {
        textAlign:'center',
        fontSize:18,
        fontWeight:'400'
    }
});
export default Aduit;