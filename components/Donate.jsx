import React, { useState , TouchableOpacity } from 'react';
import { useNavigation, Button } from '@react-navigation/native';

export const Donate =  () => {
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('DonationForm');
    };

    return(
        <View>
            <Button title="Donate" onPress={handleButtonPress} />
            <Text>Your Donation History</Text>
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        </View>
    );
}
