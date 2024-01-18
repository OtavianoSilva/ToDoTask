import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Day({ weekDay, dayNumber, main }) {

    let BG = "#848484"

    if (main) {
        BG = "#82A1E1"
    }


    return (
        <TouchableOpacity style={[{ backgroundColor: BG }, styles.container]}>
            <Text style={[{ color: 'white' }]}>
                {weekDay}
            </Text>
            <View style={styles.inside}>
                <Text>
                    {dayNumber}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 68,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 30,
    },

    inside: {
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 999,

        alignItems: 'center',
        justifyContent: 'center',
    }
})

