import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DayProgress from '../../components/DayProgress';
import Task from '../../components/Task';

export default function Home() {
  return (
    <View style={styles.container}>
      <DayProgress />
      <Task />
      <Task />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
