import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from "react-native";
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import GoBack from '../../components/items/goBack.js';

// const Text = styled(Text);
// const View = styled(View);
// const StyleTO = styled(TouchableOpacity);


export default function Confirmation({ navigation }) {
    const menu = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Zm0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Zm0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Z" clip-rule="evenodd" /></svg>
    
    const goLogin = () => {
        navigation.navigate(-1)
    }
    const goHome = () => {
        navigation.navigate('Nav')
    }
    return (
        // <View className="bg-[#71BD97]">
        //     <Text>aaaa</Text>

        // </View>
        // <View className='bg-[#71BD97] h-screen flex flex-col w-screen justify-around'>
        <View className="bg-[#71BD97] flex flex-col w-screen h-[100vh] justify-">
            <GoBack/>
            <View>
                <TouchableOpacity onPress={goHome}>
                    <Text>DIGITAL</Text>
                    <Text>LEITURA FACIAL</Text>
                    <Text>PASSWORD</Text>
                </TouchableOpacity>
            </View>

        </View>
    );


}

