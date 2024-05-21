import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View, StatusBar} from 'react-native';
import List from './List';

export default function App() {
    const [data, setData] = useState(['Reussir', 'Manger', 'Vivre']);
    const [inputValue, setInputValue] = useState('');

    const removeItem = (index) => {
        setData(data.filter((item, i) => i !== index));
    };
    const addItem = () => {
            setData(data.concat(inputValue));
            setInputValue('');

    };
    return (
        <View style={styles.container}>
            <List data={data} removeItem={removeItem} />
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setInputValue(text)}
                    value={inputValue}
                />
                <Button
                    title="ajouter"
                    onPress={addItem}
                />
            </View>
            <Text style={{color: 'red'}}>Open up <Text style={{color: 'red', fontWeight: 'bold'}}>App.js</Text> to start
                working on your app!</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
    },
});