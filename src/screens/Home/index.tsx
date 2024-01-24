import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import DayProgress from '../../components/DayProgress';
import DateSelector from '../../components/DaySelector';
import SearchBar from '../../components/SearchBar';
import Task from '../../components/Task';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <DateSelector monthNumber={12} />
      <ScrollView style={styles.scrollView}>
        <DayProgress weekDay={"SUN"} dayNumber={"05"} monthNumber={"12"} />
        <Task title="Arrumar a casa" category="Casa" time="10 PM" state="in process" />
        <Task title="Passear" category="Meu cachorro Toby Bryan" time="9 AM" state="in process" />
        <Task title="Arrumar a casa" category="Casa" time="10 PM" state="in process" />
        <Task title="Passear" category="Meu cachorro Toby Bryan" time="9 AM" state="in process" />
        <Task title="Arrumar a casa" category="Casa" time="10 PM" state="in process" />
        <Task title="Passear" category="Meu cachorro Toby Bryan" time="9 AM" state="in process" />
        <Task title="Arrumar a casa" category="Casa" time="10 PM" state="in process" />
        <Task title="Passear" category="Meu cachorro Toby Bryan" time="9 AM" state="in process" />
        <Task title="Arrumar a casa" category="Casa" time="10 PM" state="in process" />
        <Task title="Passear" category="Meu cachorro Toby Bryan" time="9 AM" state="in process" />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

