import React, { useState } from 'react';
import {TextComponent} from "react-native";

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

        <TextComponent style={styles.heading}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ducimus fugit illo iure maxime nobis odit officia quisquam tempore ut?</TextComponent>

    );
}
const styles = StyleSheet.create({
   heading{
       fontSize: 1.5rem,
       textAlign: "center",

   },
});
export default Homepage;