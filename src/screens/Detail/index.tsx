import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TaskContext } from "../../context/TaskContext";
import { TaskProps } from "../../screens/Home";

type RootStackParamList = {
  Home: undefined;
  Detail: TaskProps;
};
type Props = NativeStackScreenProps<RootStackParamList>;

export default function Detail() {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const navigation = useNavigation<Props['navigation']>();

  const { task } = useContext(TaskContext);

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={32} color="black"
          onPress={() => navigation.popToTop()} />
        <Text style={styles.title}>Create Task:</Text>
      </View>
      <View style={styles.mainContent}>
        <TextInput style={styles.taskNameInput} placeholder='Enter task name...'>

        </TextInput>

        <Text style={styles.title}>Date set:</Text>
        <View style={styles.dateView}>
          <TouchableOpacity style={styles.setDateButton}
            onPress={() => showMode('date')}>
            <Text style={{ fontSize: 20 }}>Set Date: </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.setDateButton}
            onPress={() => showMode('time')}>
            <Text style={{ fontSize: 20 }}>Set Time: </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Category:</Text>

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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  title: {
    fontSize: 32,
  },

  header: {
    width: 280,
    marginHorizontal: 20,

    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  taskNameInput: {
    marginTop: 15,
    margin: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,

    width: 360,
    height: 60,
    borderRadius: 18,
    borderWidth: 2,

    fontSize: 28,
  },

  mainContent: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dateView: {
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'row'
  },

  setDateButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    width: 140,
    height: 60,
    margin: 10,
    borderRadius: 18,
    borderWidth: 2,
  },

});
