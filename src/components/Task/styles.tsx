import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 83,

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

        borderColor: '#82A1E1',
        borderRadius: 20,
        borderWidth: 6,

        margin: 8
    },

    madeView: {
        backgroundColor: '#82A1E1',
        width: 60,
        height: 77,

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },

    mainTextView: {
        backgroundColor: '#fff',
        width: 190,
        height: 77,

    },

    taskTitle: {
        color: '#82A1E1',
        fontSize: 28,
        marginLeft: 10,
    },

    taskInfo: {
        color: '#82A1E1',
        fontSize: 16,
        marginLeft: 10,
    },

    infosView: {
        backgroundColor: '#fff',
        width: 104,
        height: 77,

        justifyContent: 'center',

        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,

    },

    checkbox: {
        backgroundColor: '#fff',
        width: 29,
        height: 29,

        borderColor: '#82A1E1',
        borderRadius: 6,
    },

    checkboxSelected: {
        backgroundColor: '#aaa',
        width: 29,
        height: 29,

        borderColor: '#82A1E1',
        borderRadius: 6,
    },

    inProcess: {

    },

    completed: {
        backgroundColor: '#1b2'
    },

    warning: {

    },

    failed: {

    },
});