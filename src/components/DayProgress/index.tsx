import { StyleSheet, Text, View } from 'react-native';

export default function DayProgress() {

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
                        SAT
                        05/12
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

const styles = StyleSheet.create({

    container: {
        width: 360,
        height: 150,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 20,
        borderWidth: 3,

        margin: 10,
    },

    topView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        marginTop: 10,
    },

    bottomView: {
        width: 300,
        height: 60,

        justifyContent: 'center',
        alignItems: 'center',

    },

    tasksAmount: {
        width: 200,
        height: 80,
    },

    tasksAmountText: {
        fontSize: 42
    },

    dateInfo: {
        width: 100,
        height: 80,
    },

    dateInfoText: {
        fontSize: 34
    },

    progressBar: {
        width: 300,
        height: 20,

        borderRadius: 10,
        borderWidth: 2,
    },

    progress: {
        width: 150,
        height: 16,
        backgroundColor: '#3D8458',
        borderTopStartRadius: 20,
        borderBottomStartRadius: 20,
    }

});