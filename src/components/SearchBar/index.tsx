import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { TextInput, View } from 'react-native';
import { styles } from './styles';

export default function SearchBar({ ...others }: TaskProps) {

    const navigation = useNavigation<Props['navigation']>();

    return (
        <View style={styles.container}>
            <TextInput style={styles.searchBarView} placeholder='Find a Task'>
            </TextInput>
            <Ionicons name="create" size={24} color="black"
                onPress={() => navigation.navigate('Detail')} />
        </View>
    )
};
