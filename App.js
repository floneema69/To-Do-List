import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View, StatusBar, SectionList, TouchableOpacity} from 'react-native';

export default function App() {
    const [data, setData] = useState(['Reussir', 'Manger', 'Vivre']);
    const [inputValue, setInputValue] = useState('');

    const removeItem = (index) => {
        setData(data.filter((item, i) => i !== index));
    };
    const addItem = () => {
        if (inputValue !== '') {
            setData([...data, inputValue]);
            setInputValue('');
        }
    };
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    {
                        data: data,
                    },
                ]}
                renderItem={({item, index}) => (
                    <View style={styles.row}>
                        <Text style={styles.item}>{item}</Text>
                        <TouchableOpacity onPress={() => removeItem(index)}>
                            <Text>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setInputValue(text)}
                    value={inputValue}
                />
                <Button
                    title="Press me"
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
    },
});