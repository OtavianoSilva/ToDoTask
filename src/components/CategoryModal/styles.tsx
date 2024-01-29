import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
        width: 360,
        height: 360,
        marginLeft: 18,
        marginTop: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 30,
        borderRadius: 30,
        borderWidth: 3,

    },

    title: {
        fontSize: 30,
    },

    nameView: {
        height: 130,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    nameInput: {
        width: 300,
        height: 60,
        borderRadius: 15,
        borderWidth: 2,
        padding: 20,
    },

    saveButton: {
        width: 300,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})