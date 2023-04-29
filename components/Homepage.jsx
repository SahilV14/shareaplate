import React, { useState } from 'react';
import {Text} from "react-native";
import {View, TextInput} from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
export const Homepage =  () => {
    const onPressLogin = () => {
// Do something about login operation
    };
    const onPressForgotPassword = () => {
// Do something about forgot password operation
    };
    const onPressSignUp = () => {
// Do something about signup operation
    };
    const [state,setState] = useState({
        email: '',
        password: '',
    })
    return (
<View>
    <Text style={styles.heading}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ducimus fugit illo iure maxime nobis odit officia quisquam tempore ut?</Text>
    <View >
        <TextInput
            style={styles.inputText}
            placeholder="Email"

            // onChangeText={text => setState({email:text})}
        />
        <TextInput
            style={styles.inputText}
            placeholder="Password"
            // onChangeText={text => setState({password:text})}
        />
    </View>
</View>
    );

}
const styles = EStyleSheet.create({
   heading : {
       fontSize: 24,
       textAlign: "center",
   },
    inputText:{
        opacity: 0.7,
        borderStyle:"solid",
        borderColor:"black",
    },
    inputView:{
       width: 90,
        padding: 1,
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
    }
});