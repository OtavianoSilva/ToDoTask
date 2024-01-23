import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CheckBox from 'expo-checkbox';
import { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

const styles = StyleSheet.create({
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