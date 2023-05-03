import {
    Image,
    StyleSheet,
    View,
    Text,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { StatusBar } from "expo-status-bar";
  import * as Animatable from "react-native-animatable";
  import africa_map from '../../assets/images/africa-map.png'
  import TimeTable from "../../components/TimeTable";
import {genTimeBlock} from '../../common/components/utils'

  
  const TimetableScreen = ({navigation}) => {
  
  
    const handlePeriodChange = () => {
      navigation.navigate('homeTabs')
    }
  
    return (
      <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
        <StatusBar style="light" />
        <View style={styles.headerIcon}>
          <Image source={africa_map} />
        </View>
        <Animatable.View
          style={styles.bodyCtn}
          animation="fadeInUpBig"
          easing="ease">
            <Text style={styles.welcomeText}>Timetable</Text>
            <TimeTable periods={[
                {
                    title: 'Kinyarwanda',
                    startTime: genTimeBlock('Mon', 10, 30),
                    endTime: genTimeBlock('Mon', 11, 30),
                    location: "S4 MPC",
                    students:4,
                    subjectId: 4
                },
                {
                  title: 'Mathematics',
                  startTime: genTimeBlock('Tue', 8, 30),
                  endTime: genTimeBlock('Tue', 9, 30),
                  location: "S6 MPC",
                  students:4,
                  subjectId: 4
              },
              {
                title: 'Science',
                startTime: genTimeBlock('Fri', 12, 30),
                endTime: genTimeBlock('Fri', 2, 30),
                location: "S5 MPC",
                students:4,
                subjectId: 4
            },
            ]}
            handlePeriodChange={handlePeriodChange}
          />
        </Animatable.View>
      </LinearGradient>
    );
  };
  
  export default TimetableScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerIcon: {
      marginTop: 40,
      flex: 2,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bodyCtn: {
      flex: 5,
      backgroundColor: "#fff",
      borderTopStartRadius: 40,
      borderTopEndRadius: 40,
      paddingHorizontal: 5,
    },
    welcomeText: {
      marginTop: 15,
      color: "#000",
      fontSize: 30,
      lineHeight: 48,
      fontFamily: "sansBold",
      textAlign: "center",
    },
  });
  