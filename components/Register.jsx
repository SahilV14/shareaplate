import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, Button} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

export const Register = () => {

    const navigation = useNavigation()
    const [name, setName] = useState("");
    const [org, setOrg] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pswd, setPswd] = useState("");

    const phoneno = parseInt(phone,10)

    const storeToken = async (token) => {
        try{
            await AsyncStorage.setItem('@donor_token', token)
        }
        catch (e){
            console.log(e)
        }
    }
    const sendFormData = () => {
        const formData = new FormData();
        formData.append('name' , name);
        formData.append('organization' , org)
        formData.append('email_id' , email)
        formData.append('phone' , phoneno)
        formData.append('password' , pswd)
        try {
            fetch('http://192.168.3.198:8000/registerDonor', {
                method: 'POST',
                body: formData,
            }).then(res => {
                if (res.status === 200) {
                    console.log("Success")
                    navigation.navigate('Donate')
                    return res.json()
                }
            }).then(
                data => {return storeToken(data.access_token);}
            )
                .then(
                    r => {return AsyncStorage.getItem('@donor_token')}
                )
        }
        catch (error){
            console.log(error)
        }
    }

    return(
        <View style={styles.container}>
        <Text style={styles.heading}>Register</Text>
            <View style={styles.inputs}>
            <TextInput
                style={styles.text_input}
            placeholder="Name"
            onChangeText={setName}
            value={name}
            />
                <TextInput
                    style={styles.text_input}
                    placeholder="Organisation (if any)"
                    onChangeText={setOrg}
                    value={org}
                />
            <TextInput
                style={styles.text_input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.text_input}
                placeholder="Phone Number"
                onChangeText={setPhone}
                value={phone}
            />
            <TextInput
                style={styles.text_input}
                placeholder="Set a password"
                onChangeText={setPswd}
                value={pswd}
            />
            <Button title='Register' onPress={sendFormData}></Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
      fontSize: 50,
        marginBottom: 40,
    },
    text_input: {
        width: 250,
        padding: 6,
        fontSize : 18,
        borderStyle: "solid",
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "black",
    },
    inputs:{
      display: "flex",
      flexDirection: "column",
      rowGap: 40,
        width: 250,
    },
    container: {
      display: "flex",
      alignItems: "center",
        rowGap : 30,
        paddingTop: 80,
    },
});
