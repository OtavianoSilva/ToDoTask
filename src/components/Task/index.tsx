import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CheckBox from 'expo-checkbox';
import { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import { TaskContext } from "../../context/TaskContext";

type RootStackParamList = {
    Home: undefined;
    Detail: TaskProps;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Task({ id, title, category, time, state, ...others }: TaskProps) {

    let renderedTitle = title
    if (title && title.length > 10) {
        renderedTitle = title.substring(0, 10) + "..."
    }

    let renderedCategory = category
    if (category && category.length > 18) {
        renderedCategory = category.substring(0, 18) + "..."
    }

    const [isSelected, setSelection] = useState(false);
    const [task, setTask] = useState<TaskProps>({ id, title, state });
    const { selectTask } = useContext(TaskContext);

    const navigation = useNavigation<Props['navigation']>();

    function handlePress() {
        selectTask(task);
        navigation.navigate('Detail', task);
    }


    return (

        <TouchableOpacity style={
            styles.container}
            onPress={() => handlePress()}>
            <View style={styles.madeView}>
                <CheckBox
                    style={!isSelected ? styles.checkbox : styles.checkboxSelected}
                    value={isSelected}
                    onValueChange={setSelection}
                />
            </View>
            <View style={styles.mainTextView}>
                <Text style={styles.taskTitle}>
                    {renderedTitle}
                </Text>
                <Text style={styles.taskInfo}>
                    {renderedCategory}
                </Text>
            </View>
            <View style={styles.infosView}>
                <Text style={styles.taskInfo}>
                    {time}
                </Text>
                <Text style={styles.taskInfo}>
                    {state}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
