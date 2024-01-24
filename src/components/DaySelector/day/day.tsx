import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Day({ weekDay, dayNumber, main = false }) {

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