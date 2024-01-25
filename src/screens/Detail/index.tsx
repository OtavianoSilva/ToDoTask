import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import CategoryDropdown from '../../components/CategoryDropdown';
import DateManagerComponent from '../../components/DateManagerComponent';
import { TaskProps } from "../../screens/Home";
import { styles } from './styles';

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

        <CategoryDropdown />

        <View style={styles.submitButton}>
          <Text style={styles.title}>Save</Text>
        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}
