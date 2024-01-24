import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        fontSize: 32,
    },

    dateView: {
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'column'
    },

    setDateButton: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

        width: 140,
        height: 60,
        margin: 10,
        borderRadius: 18,
        borderWidth: 2,
    },

    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row"
    },
});