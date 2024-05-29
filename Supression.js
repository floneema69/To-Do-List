import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, StyleSheet, TextInput } from 'react-native';

const Supression = ({ item, removeItem, modifItem }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalModif, setModalModif] = useState(false);
    const [inputValue, setInputValue] = useState(item);

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => setModalModif(true)}>
                <Text>{item}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.color}>X</Text>
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Supprimer de la liste ?</Text>
                        <Button title="Oui" onPress={() => { removeItem(); setModalVisible(false); }} />
                        <Button title="Non" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
            <Modal
                visible={modalModif}
                onRequestClose={() => setModalModif(false)}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Modifier la liste</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setInputValue(text)}
                            value={inputValue}
                        />
                        <Button title="Modifier" onPress={() => { modifItem(inputValue); setModalModif(false); }} />
                        <Button title="Annuler" onPress={() => setModalModif(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
    color: {
        color: 'red',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});

export default Supression;
