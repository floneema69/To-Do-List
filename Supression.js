import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, StyleSheet } from 'react-native';

const Supression = ({ item, removeItem }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.itemContainer}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.color} >X</Text>
            </TouchableOpacity>
            <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <Text>Supprimer de la liste ?</Text>
                <Button title="Oui" onPress={() => { removeItem(); setModalVisible(false); }} />
                <Button title="Non" onPress={() => setModalVisible(false)} />
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
    },
    color: {
        color: 'red',
    },
});

export default Supression;