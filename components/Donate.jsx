import React, { useState , TouchableOpacity } from 'react';
import { useNavigation, Button } from '@react-navigation/native';
import {FlatList, View, Text} from "react-native";

export const Donate =  () => {
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('DonationForm');
    };

    return(
        <View>
            <Button title="Donate" onPress={handleButtonPress} />
            <Text>Your Donation History</Text>
            <View>
                <Text>Test</Text>
                {/*<FlatList*/}
                {/*    data={[*/}
                {/*        {key: 'Devin'},*/}
                {/*    ]}*/}
                {/*    renderItem={({item}) => <Text>{item.key}</Text>}*/}
                {/*/>*/}
            </View>
        </View>
    );
}
