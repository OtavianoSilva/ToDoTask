import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    title: {
        fontSize: 32,
    },

    header: {
        width: 280,
        marginHorizontal: 20,

        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    taskNameInput: {
        marginTop: 15,
        margin: 8,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,

        width: 360,
        height: 60,
        borderRadius: 18,
        borderWidth: 2,

        fontSize: 28,
    },

    mainContent: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 65,
        borderRadius: 40,
        borderWidth: 4,
        marginBottom: 40,
    },

});