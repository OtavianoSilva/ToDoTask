import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: 380,
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40,
    },

    topView: {
        width: 360,
        height: 80,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 16,
        paddingHorizontal: 60,
    },

    bottomView: {
        width: 360,
        height: 60,
        backgroundColor: 'white',
        padding: 16,
    },

    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },

    icon: {
        marginRight: 5,
    },

    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },

    placeholderStyle: {
        fontSize: 16,
    },

    selectedTextStyle: {
        fontSize: 16,
    },

    iconStyle: {
        width: 20,
        height: 20,
    },

    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

    title: {
        fontSize: 32,
    },
});

