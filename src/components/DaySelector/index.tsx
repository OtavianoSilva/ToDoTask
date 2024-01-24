import { ScrollView, Text, View } from 'react-native';
import Day from './day/day';
import { styles } from './styles';


export default function DateSelector({ monthNumber }) {

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const currentMonth: string = months[monthNumber - 1];
    const previousMonth: string = months[(monthNumber - 2 + 12) % 12];
    const nextMonth: string = months[monthNumber % 12];

    return (
        <View style={styles.container}>
            <View style={styles.monthView}>
                <Text style={styles.otherMonths}>
                    {previousMonth.substring(0, 3)}
                </Text>
                <Text style={styles.mainMonth}>
                    {currentMonth}
                </Text>
                <Text style={styles.otherMonths}>
                    {nextMonth.substring(0, 3)}
                </Text>
            </View>
            <View style={styles.daysView}>
                <ScrollView horizontal={true} style={styles.scrollView}
                    contentContainerStyle={styles.contentContainer}>
                    <Day weekDay={"Thu"} dayNumber={"02"} ></Day>
                    <Day weekDay={"Fri"} dayNumber={"03"} ></Day>
                    <Day weekDay={"Sat"} dayNumber={"04"} ></Day>
                    <Day weekDay={"Sun"} dayNumber={"05"} main={true}></Day>
                    <Day weekDay={"Mon"} dayNumber={"06"} ></Day>
                    <Day weekDay={"Tou"} dayNumber={"07"} ></Day>
                    <Day weekDay={"Wed"} dayNumber={"08"} ></Day>
                </ScrollView>
            </View>
        </View>
    )
};