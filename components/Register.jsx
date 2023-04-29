import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import {RadioButton} from "react-native-paper";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isdonor, setIsdonor] = useState("");
    return(
        <View style={styles.container}>
        <Text style={styles.heading}>Register</Text>
            <TextInput
                style={styles.text_input}
            placeholder="Name"
            onChangeText={setName}
            value={name}
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
                onChangeText={setIsdonor}
                value={isdonor}
            />
            <TextInput
                style={styles.text_input}
                placeholder="Donor/Needy"
                onChangeText={setPhone}
                value={phone}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
      fontSize: 50,
    },
    text_input: {
        marginTop: 20,
        fontSize : 26,
    },
    container: {
      display: "flex",
      alignItems: "center",
        rowGap : 30,
        justifyContent: "center",
    },
});
