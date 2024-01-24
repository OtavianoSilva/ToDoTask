import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function CategoryButton({ title, color, isCreate = false }) {

    let BG = color
    let mainText = title

    if (isCreate) {
        BG = "#D9D9D9"
        mainText = "Add +"
    }

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: BG }]}>
            <Text>{mainText}</Text>
        </TouchableOpacity>
    )
};
