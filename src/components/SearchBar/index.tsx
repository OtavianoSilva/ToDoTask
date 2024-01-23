import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TextInput, View } from 'react-native';

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

const styles = StyleSheet.create({

    container: {
        marginTop: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,

        width: 360,
        height: 60,
        borderRadius: 18,
        borderWidth: 2,
    },

    searchBarView: {
        width: 300,
        fontSize: 22,
    },
}
);