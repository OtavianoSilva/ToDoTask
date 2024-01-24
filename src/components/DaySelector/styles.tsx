import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 500,
        height: 120,
        backgroundColor: '#fff',
        paddingTop: 6,

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    scrollView: {
    },

    contentContainer: {
        width: 500,
        justifyContent: 'space-between',
    },

    monthView: {
        width: 360,
        height: 40,

        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },

    mainMonth: {
        fontSize: 32,
    },

    otherMonths: {
        fontSize: 22,
    },

    daysView: {
        width: 500,
        height: 70,

        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
});