import React from 'react';
import { Text, Button, Image, TouchableOpacity, TextInput, View } from 'react-native';
import { styled } from 'nativewind';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';
export default function Transacoes({ route, navigation }) {
    const { title } = route.params
    return (
        <View className={'bg-blue-500 h'}>
            <Text>{title}</Text>
            {/* <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={{
                    flex: 1,
                    width: '100%',
                }}
            >
            </RNCamera> */}
        </View>
    )
}