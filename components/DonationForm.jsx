import React from 'react';
import {Text} from "react-native";
import {View, TextInput, Image} from 'react-native';
// import EStyleSheet from "react-native-extended-stylesheet";
const [count, setCount] = useState(0);

useEffect(() => {
    setTimeout(() => {
        setCount((count) => count + 1);
    }, 1000);
});
import axios from 'axios';

export const DonationForm = () =>{
    return(
        <View>
            Donation Form  Page
        </View>
    );
}