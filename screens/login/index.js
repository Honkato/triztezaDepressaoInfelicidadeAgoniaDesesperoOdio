import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from "react-native";
import { withExpoSnack } from 'nativewind';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddIcon from '../../components/icons/addIcon';
// import { styled } from "nativewind";

// const Text = styled(Text);
// const View = styled(View);
// const StyleTO = styled(TouchableOpacity);


export default function Login({ navigation, route }) {

    const goConfirm = () => {
        navigation.navigate('Confirmation')
    }
    const goRegister = () =>{
        navigation.navigate('Register')
    }

    const { name, cpf} = route.params;

    const [nome, setnome] = useState('nome')


    // useEffect(() => {
    //     StorageNewUser("01", "nome")
    // }, [])
    const savedAccounts =
        [
            {
                id: 0,
                name: 'Account',
                CPF: 'CPF',
                // encryptedPassword: 'real'
            },
            {
                id: 1,
                name: name,
                CPF: cpf,
                // password: password
            }
        ]

    const [accountName, setAcountName] = useState('Account')
    const [mainUser, setMainUser] = useState(savedAccounts[0])
    const [listVisible, setListVisible] = useState(false)
    const changeListVisible = () => {
        setListVisible(!listVisible);
    }
    const menu = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Zm0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Zm0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Z" clip-rule="evenodd" /></svg>
    const list =
        <View>

        </View>

    return (
        // <View className="bg-[#71BD97]">
        //     <Text>aaaa</Text>

        // </View>
        // <View className='bg-[#71BD97] h-screen flex flex-col w-screen justify-around'>
        <View className="bg-[#71BD97] flex flex-col w-screen h-[100vh] justify-">
            {listVisible ?
                <View className="absolute z-50 flex flex-1 justify-end w-full h-full bg-[#000000ac]">
                    <View className="bg-[#599e7c] rounded-t-2xl h-[60vh]">
                        <View className="flex flex-col items-center justify-center">
                            <TouchableOpacity className="" onPress={changeListVisible}>
                                <Text className="font-bold">
                                    \/
                                </Text>
                            </TouchableOpacity>
                            {/* <View className='h-36 w-full bg-black'></View> */}
                            {savedAccounts.map((item) =>
                                item.name == '' ?
                                    <></>
                                    :
                                    <TouchableOpacity key={item.id} onPress={() => setMainUser(savedAccounts[item.id])} className='h-20 w-full border-b-[1px] shadow-lg bg-[#71BD97]'>
                                        <Text>{item.name}</Text>
                                    </TouchableOpacity>


                            )}
                            <TouchableOpacity onPress={()=>goRegister()}>
                                <AddIcon/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> : <></>
            }
            <View className="">
                {menu}
            </View>
            <View className='w-max flex flex-1 justify-around items-center'>
                <View>
                    <Text className="">
                        GREENDY BANK
                    </Text>
                    <Text>
                        Log on
                    </Text>
                    <Text>
                        Select your account to access
                    </Text>
                </View>

                <View>
                    <View className="flex flex-row justify-between">
                        <Text>
                            {mainUser.name}
                        </Text>
                        <TouchableOpacity className="" onPress={changeListVisible}>
                            <Text className="font-bold">
                                \/
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <Text>
                        Agencia **XX Conta ***XX-X
                    </Text>
                </View>

                <TouchableOpacity onPress={goConfirm} className='h-10 w-52 rounded-lg bg-[#070C0A]'>
                    <Text className='text-[#9AEBA3] '>
                        Sign In
                    </Text>
                </TouchableOpacity>
                <View className='flex flex-row w-screen justify-around'>
                    {/* <TouchableOpacity onPress={() => StorageNewUser("01", "aaahoy")}> */}
                    {menu}
                    {/* </TouchableOpacity> */}
                    {/* <TouchableOpacity onPress={() => getStorageUsers("01")}> */}
                    {menu}{nome}
                    {/* </TouchableOpacity> */}
                    {menu}
                </View>

            </View>
        </View>
        // </View>
    );


}

