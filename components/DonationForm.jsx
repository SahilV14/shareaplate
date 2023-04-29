import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, Button , StyleSheet} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Geolocation from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation'


export const DonationForm = () => {

    React.useEffect(() => {
        Geolocation.requestAuthorization('whenInUse');
    }, []);

    Geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            // Do something with the latitude and longitude values
        },
        (error) => {
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );


    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemQty, setItemQty] = useState('');
    const [itemExpiry, setItemExpiry] = useState('');
    const [itemType, setItemType] = useState('')

    const handleAddItem = () => {
        const newItem = {
            name: itemName,
            quantity: itemQty,
            expiry: itemExpiry,
            type: itemType,
        };

        setItems([...items, newItem]);
        setItemName('');
        setItemQty('');
        setItemExpiry('');
        setItemType('');
    }

    return (
        <View>
            <View>
                <Text>Food item:</Text>
                <TextInput
                    placeholder="Enter food item name"
                    value={itemName}
                    onChangeText={(text) => setItemName(text)}
                />

                <Text>Food Quantity:</Text>
                <TextInput
                    placeholder="Enter quantity of food"
                    value={itemQty}
                    onChangeText={(text) => setItemQty(text)}
                />

                <Text>Food expiry:</Text>
                <TextInput
                    placeholder="Enter expiry time of food"
                    value={itemExpiry}
                    onChangeText={(text) => setItemExpiry(text)}
                />

                <Text>Item type:</Text>
                <TextInput
                    placeholder="Veg/Non-veg"
                    value={itemType}
                    onChangeText={(text) => setItemType(text)}
                />
                <Button title="Add Item" onPress={handleAddItem} />
            </View>

            <View>
                {items.map((item, index) => (
                    <View key={index}>
                        <Text>{item.name}</Text>
                        <Text>{item.quantity}</Text>
                        <Text>{item.expiry}</Text>
                        <Text>{item.type}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}



