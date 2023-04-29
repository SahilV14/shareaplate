import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import {RadioButton} from "react-native-paper";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [value, setValue] = useState('first');
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
                onChangeText={setPhone}
                value={phone}
            />
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <RadioButton.Item value="first"  label="Donate Food"/>
                <RadioButton.Item value="second"  label="Request Food"/>
             </RadioButton.Group>

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
    },
});
