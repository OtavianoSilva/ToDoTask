import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DateManagerComponent from '../../components/DateManagerComponent';
import { TaskProps } from "../../screens/Home";

type RootStackParamList = {
  Home: undefined;
  Detail: TaskProps;
};
type Props = NativeStackScreenProps<RootStackParamList>;

export default function Detail() {


  const navigation = useNavigation<Props['navigation']>();

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

        <DateManagerComponent />

        <Text style={styles.title}>Category:</Text>

      </View>

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

});
