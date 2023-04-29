import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {createKeyboardAwareNavigator} from "react-navigation";

export const Donate =  () => {
    const navigation = useNavigation();

    const [items , setItems] = useState([])

    useEffect(()=>{
        const formData = new FormData();
        async function getToken(){
            formData.append('donor_token' , await AsyncStorage.getItem("@donor_token"));
        }
            getToken().then(() =>
            fetch('http://192.168.3.198:8000/myItems', {
                method: 'POST',
                body: formData,
            })).then(res => {
                if (res.status === 200) {
                    console.log("Success")
                    return res.json()
                }
            }).then(
                data => {
                    setItems(data.items);
                }
            )
    })

    return(
        <View>
            <Button title="Donate" onPress={e => navigation.navigate('DonationForm')} />
            <Text>Your Donation History</Text>
            <View>
            {items.map((item , index) => (
                <View>
                   <Text>{item.name}</Text>
                </View>
            ))}
            </View>
        </View>
    );
}
