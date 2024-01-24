import { Text, View } from 'react-native';
import { styles } from "./styles";

export default function DayProgress({ weekDay, dayNumber, monthNumber }) {

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.tasksAmount}>
                    <Text style={styles.tasksAmountText}>
                        10/20
                    </Text>
                    <Text>
                        Today process:
                    </Text>
                </View>
                <View style={styles.dateInfo}>
                    <Text style={styles.dateInfoText}>
                        {weekDay}
                    </Text>
                    <Text style={styles.dateInfoText}>
                        {dayNumber}/{monthNumber}
                    </Text>
                </View>
            </View>
            <View style={styles.bottomView}>
                <View style={styles.progressBar}>
                    <View style={styles.progress}>

                    </View>
                </View>
            </View>
        </View>
    );
};