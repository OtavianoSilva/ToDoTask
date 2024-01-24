import { Text, TouchableOpacity, View } from 'react-native';
import CategoryButton from './CategoryButton/CategoryButton';
import { styles } from './styles';

export default function CategoryView({ }) {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>Category: </Text>
            <View style={styles.categoryView}>
                <CategoryButton title={"Sports"} color={"#3D8458"} />
                <CategoryButton title={"Games"} color={"#82A1E1"} />
            </View >
            <View style={styles.categoryView} >
                <CategoryButton title={"School"} color={"#9C72F8"} />
                <CategoryButton isCreate={true} />
            </View>
        </TouchableOpacity>
    )
};
