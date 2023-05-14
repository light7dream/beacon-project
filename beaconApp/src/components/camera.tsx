import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

function Camera(): JSX.Element {
  const [barcode, setBarcode] = useState(null);

  const onBarcodeDetected = (event:any) => {
    if (event.type === RNCamera.Constants.BarCodeType.qr) {
      setBarcode(event.data);
    }
  };

  let camera: any = null;

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  const barcodeRecognized = async ({ barcodes }: any) => {
    barcodes.forEach((barcode: any) => console.log('aaaaaaaaaabbbbbbbbbb...', barcode.data))
  }

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={ref => {
          camera = ref;
        }}
        style={{ flex: 1 ,width:'100%'}}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        captureAudio={false}
        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
        // onGoogleVisionBarcodesDetected={barcodeRecognized}
        onBarCodeRead={onBarcodeDetected}
      />
      <TouchableOpacity onPress={takePicture}>
        <View style={{ backgroundColor: 'white', borderRadius: 50, height: 50, width: 50 }} />
      </TouchableOpacity>
      {barcode && (
        <View style={styles.barcodeContainer}>
          <Text style={styles.barcodeText}>{barcode}</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  barcodeContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  barcodeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Camera;
