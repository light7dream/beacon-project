import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

function Scanner(): JSX.Element {
  const [scanned, setScanned] = useState(false);
  const [code, setCode] = useState();
  const handleScan = ({ data }: any) => {
    setScanned(true);
    console.log(`Scanned QR code: ${data}`);
    setCode(data);
  };

  useEffect(() => {
    return () => {
      setScanned(false);
    };
  }, []);

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={handleScan}
        reactivate={true}
        reactivateTimeout={5000}
        showMarker={true}
        markerStyle={styles.marker}
        bottomContent={
          scanned ? (
            <Text style={styles.text}>QR code scanned!</Text>
          ) : (
            <Text style={styles.text}>Scan a QR code</Text>
          )
        }
      />
      {code && (
        <Text style={styles.textInfo}>{code}</Text> 
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  marker: {
    borderColor: '#FFF',
    borderRadius: 10,
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
  textInfo: {
    fontSize: 18,
    color: 'black',
    padding: 10,
    fontWeight:'400'
  }
});

export default Scanner;