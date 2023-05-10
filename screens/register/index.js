import React, { useEffect, useState } from "react";
import { Linking, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { bgGradient } from "nativewind"
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Register({ navigation, route }) {
    const [name, setName] = useState('')
    const [CPF, setCPF] = useState('')
    const [user, setUser] = useState('')
    let mexeu = true

    const storageNewUser = (key, value) => {
        AsyncStorage.setItem(key, value)
        // mexeu = !mexeu
    }
    const getStorageUsers = async (key) => {
        setUser(await AsyncStorage.getItem(key))
        // setnome(valor)
    }
    useEffect(() => {
        getStorageUsers('users')
        // console.log()
        // if (localStorage.getItem('conta') != undefined){
        // navigation.navigate('Login')
        // alreadyHaveAnAccount()
        // }
    }, [mexeu])

    const registrateAnAccount = () => {
        // getStorageUsers('users')
        setUser([...user, { name: name, cpf: CPF }])
        console.log(user);
        storageNewUser('users', user)
    }

    const goCreateAnAccount = () => {
        // localStorage.setItem('dados', JSON.stringify({"name":name,"CPF":CPF,"password":password}))
        Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
    const alreadyHaveAnAccount = () => {
        // localStorage.setItem('dados', JSON.stringify({"name":name,"CPF":CPF,"password":password}))
        navigation.navigate('Login', { name: name, cpf: CPF })

    }
    return (
        <View>
            {/* <LinearGradient
            colors={['#5C9794','#22CC91']}
            > */}
            {/* <LinearGradient color={['black','white']}>aaaaaa</LinearGradient> */}
            <View className=" bg-[#5C9794] flex flex-col w-screen h-[100vh] ">
                <TextInput className='bg-[#9AEBA3] border-2 rounded-full p-1 pl-2' onChangeText={e => setName(e)} placeholder="name" />
                <TextInput className='bg-[#9AEBA3] border-2 rounded-full p-1 pl-2' onChangeText={e => setCPF(e)} placeholder="CPF" />
                {/* <TextInput className='bg-[#9AEBA3] border-2 rounded-full p-1 pl-2' onChangeText={e => setPassword(e)} placeholder="password" /> */}
                <TouchableOpacity className="m-3 w-20 h-6 flex items-center justify-center rounded-lg bg-[#070C0A] text-[#9AEBA3]" onPress={() => registrateAnAccount()}>Registrate</TouchableOpacity>
                <TouchableOpacity className="m-3 w-14 h-6 flex items-center justify-center rounded-lg bg-[#070C0A] text-[#9AEBA3]" onPress={() => alreadyHaveAnAccount()}>Login</TouchableOpacity>
                <TouchableOpacity className="m-3 h-6 rounded-lg text-[#ffff00]" onPress={() => goCreateAnAccount()}><Text> create an account</Text></TouchableOpacity>
            </View>
            {/* </LinearGradient> */}
        </View>
    );
}

export default Register;