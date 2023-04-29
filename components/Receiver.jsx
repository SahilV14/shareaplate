import React, { useState } from 'react';
import {Button, Linking, StyleSheet, Text, TouchableOpacity} from "react-native";
import { View, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';

export const Receiver = () => {
    const [loc, setLocation] = useState("");
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('');
    const searchLocation = () => {
        const formData = new FormData();
        formData.append('username', loc);

        try {
            fetch('http://192.168.3.198:8000/closestItems', {
                method: 'POST',
                body: formData,
            }).then(res => {
                if (res.status === 200) {
                    console.log("Success")
                    return res.json()
                }
            }).then(data => {
                console.log(data.items);
                setItems(data.items);
            })
        } catch (error) {
            console.log(error)
        }

    }

    const handleOpenGoogleMaps = (x,y) => {
        const googleLink = `https://www.google.com/maps/@${x},${y},${1}z`;
        // open link in browser
        Linking.openURL(googleLink).then(r => console.log(r));
    };


    return (
        <View>
            <Text>Find food near you!!</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Enter preferred pickup location"
                onChangeText={loc => setLocation(loc)}
            />
            <TouchableOpacity onPress={searchLocation}>
                <Text title="login">Search</Text>
            </TouchableOpacity>
            <RadioButton.Group
                onValueChange={(newValue) => setValue(newValue)}
                value={value}
            >
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton value="option1" />
                    <Text>Veg Only</Text>
                </View>
            </RadioButton.Group>
            {/*<Text>Selected option: {value}</Text>*/}

            <View>
                {items.map((item, index) => (

                    item.type === 0 && value === "veg" || value !== "veg" ?
                    (  <View key={index}>
                    <Text>{item.name}</Text>
                    <Button title="Open Google Maps" onPress={e => handleOpenGoogleMaps(item.pickup_coordinates_x,item.pickup_coordinates_y)} />
                    </View>
                    )
                    :
                    null
                ))
                }
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 40,
    },
    heading: {
        fontSize: 24,
        textAlign: "center",
    },
    inputText: {
        opacity: 0.7,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 0.5,
        padding: 3,
        borderRadius: 5,
    },
    inputView: {
        width: 400,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    image: {
        height: 200,
        width: 200,
    },
    inputs: {
        display: "flex",
        flexDirection: "column",
        rowGap: 25,
        width: 250,
    },
});
