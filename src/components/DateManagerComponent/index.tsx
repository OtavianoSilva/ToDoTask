import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";


export default function DateManagerComponent({ }) {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear()
        let fTime = "Hours: " + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes()
        setText(fDate + "\n" + fTime)
        console.log(fDate + "\n" + fTime)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (
        <View style={styles.dateView}>
            <Text style={styles.title}>Date set:</Text>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.setDateButton}
                    onPress={() => showMode('date')}>
                    <Text style={{ fontSize: 20 }}>Set Date: </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.setDateButton}
                    onPress={() => showMode('time')}>
                    <Text style={{ fontSize: 20 }}>Set Time: </Text>
                </TouchableOpacity>
            </View>

            <Text>
                {show && (
                    <DateTimePicker
                        testID='DateTimePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChange}
                    />
                )};
            </Text>

        </View>
    );
};