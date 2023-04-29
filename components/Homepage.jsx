import React, {useEffect, useState} from 'react';
import {Button, Text, TouchableOpacity, AsyncStorage} from "react-native";
import {View, TextInput, Image, StyleSheet} from 'react-native';
import img1 from "../images/img1.jpg"
import axios from "axios";
export const Homepage =  () => {
    const onPressLogin = () => {
    };
    const onPressForgotPassword = () => {
    };
    const onPressSignUp = () => {

    };

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const sendFormData = () => {
        console.log("Hello")
        const formData = new FormData();
        formData.append('username' , username);
        formData.append('password' , password)
        try {
            fetch('http://192.168.3.198:8000/tokenDonor', {
                method: 'POST',
                body: formData,
            }).then(res => {
                if (res.status === 200) {
                    console.log("Success")
                    return res.json()
                }
            }).then(data =>
                console.log(data)

            )
        }
        catch (error){
            console.log(error)
        }
    }
    return (
<View style={styles.container}>
    <Image
        source={img1}
        style={styles.image}
    />
    <Text style={styles.heading}>Login</Text>
    <View style={styles.inputs}>
        <TextInput
            style={styles.inputText}
            placeholder="Phone Number"
            onChangeText={text => setUsername(text)}
        />
        <TextInput
            style={styles.inputText}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity onPress={sendFormData}>
        <Text title="login">Login</Text>
        </TouchableOpacity>
    </View>
</View>
    );

}
const styles = StyleSheet.create({
    container : {
      padding:30,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
        justifyContent : "center",
        rowGap : 40,
    },
   heading : {
       fontSize: 24,
       textAlign: "center",
   },
    inputText:{
        opacity: 0.7,
        borderStyle:"solid",
        borderColor:"black",
        borderWidth: 0.5,
        padding: 3,
        borderRadius: 5,
    },
    inputView:{
       width: 400,
        padding: 1,
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
    },
    image:{
        height: 200,
        width: 200,
    },
    inputs:{
        display: "flex",
        flexDirection : "column",
        rowGap: 25,
        width: 250,
    },
});