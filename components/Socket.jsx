import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { WebSocket } from 'react-native-websocket';

export const Socket = () => {
    const clientID = Date.now();
    const ws = new WebSocket(`ws://localhost:8000/ws/${clientID}`);

    useEffect(() => {
        ws.onopen = () => {
            console.log('WebSocket connected');
        };

        ws.onmessage = (event) => {
            console.log(`Received message: ${event.data}`);
        };

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = (message) => {
        ws.send(message);
    };

    return (
        <SafeAreaView>
            <Text>My client ID is {clientID}</Text>
        </SafeAreaView>
    );
};

// export default Socket;
