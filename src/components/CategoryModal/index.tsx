import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

export default function CategoryModal({ }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => setModalVisible(true)}>
                <Ionicons name="create" size={24} color="black" />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modal}>
                    <View style={styles.nameView}>
                        <Text style={styles.title}>Create Category: </Text>
                        <TextInput
                            style={styles.nameInput}
                            placeholder='Enter category name...'>

                        </TextInput>
                    </View>

                    <TouchableOpacity style={styles.saveButton}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{ fontSize: 23 }}>Save</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
        </View>
    );
};