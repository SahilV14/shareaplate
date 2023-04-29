
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import WebSocket from 'react-native-websocket';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        setSocket(new WebSocket('ws://localhost:8000/ws'));
    }, []);

    const handleSend = () => {
        if (inputText !== '') {
            socket.send(inputText);
            setInputText('');
        }
    };

    useEffect(() => {
        if (socket) {
            socket.onmessage = e => {
                setMessages(messages => [...messages, e.data]);
            };
        }
    }, [socket]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.messagesContainer}>
                {messages.map((message, index) => (
                    <Text key={index}>{message}</Text>
                ))}
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message..."
                    value={inputText}
                    onChangeText={setInputText}
                    onSubmitEditing={handleSend}
                />
                <TouchableOpacity style={styles.button} onPress={handleSend}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messagesContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        marginRight: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#0064e1',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Chat;