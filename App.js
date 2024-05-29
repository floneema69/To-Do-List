import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import List from './List';

export default function App() {
    const [data, setData] = useState(['Réussir', 'Manger', 'Vivre']);
    const [inputValue, setInputValue] = useState('');

    const removeItem = (index) => {
        setData(data.filter((item, i) => i !== index));
    };
    const modifItem = (index, newValue) => {
        setData(data.map((item, i) => i === index ? newValue : item));
    };
    const addItem = () => {
        if (inputValue.trim() !== '') {
            setData(data.concat(inputValue));
            setInputValue('');
        }
    };

    return (
        <View style={styles.container}>
            <List data={data} removeItem={removeItem} modifItem={modifItem} />
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setInputValue(text)}
                    value={inputValue}
                    placeholder="Ajouter une tâche"
                />
                <TouchableOpacity style={styles.button} onPress={addItem}>
                    <Text style={styles.buttonText}>Ajouter</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.instructionText}>Open up <Text style={styles.boldText}>App.js</Text> to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        width: '100%',
    },
    input: {
        height: 40,
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    instructionText: {
        color: 'red',
        marginTop: 20,
        textAlign: 'center',
    },
    boldText: {
        fontWeight: 'bold',
    },
});

