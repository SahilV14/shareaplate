import React, {useState} from "react";
import {View, Text, TextInput} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export const Register = () => {
    const [text, setText] = useState("");
    return(
        <View style={styles.container}>
            <Text>Hello</Text>

            <TextInput
                style={styles.text}
            placeholder="Text"
            onChangeText={setText}
            value={text}
            />
        </View>
    )
}

const styles = EStyleSheet.create({
    text: {
        marginTop: 20,
        fontSize : 30,
    },
    container: {
      display: "flex",
      alignItems: "center",
    },
});
