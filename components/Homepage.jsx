import React, { useState } from 'react';
import {TextComponent, TextInputComponent} from "react-native";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
const Homepage =  () => {
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
    <TextComponent style={styles.heading}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ducimus fugit illo iure maxime nobis odit officia quisquam tempore ut?</TextComponent>
    <View style={styles.inputView}>
        <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({email:text})}/>
        <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({password:text})}/>
    </View>
</View>
    );

}
const styles = StyleSheet.create({
   heading : {
       fontSize: "1.5rem",
       textAlign: "center",
   },
    inputText:{
       width: "100%",
        opacity: 0.7,
        fontSize: "1rem",
        margin:"1rem",
    },
    inputView:{
       width: "90%",
        padding: "1em",
        display: "flex",
        flexDirection:"column",

    }
});
export default Homepage;