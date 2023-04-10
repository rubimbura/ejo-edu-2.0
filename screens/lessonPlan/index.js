import {
    StyleSheet,
    View,
    ScrollView
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { StatusBar } from "expo-status-bar";
  import * as Animatable from "react-native-animatable";
  import PrimaryButton from "../../components/button/PrimaryButton";
  import ModuleHeader from "../../components/moduleHeader"
  import LessonPlanContainer from "./LessonPlanContainer";
import Colors from "../../constants/Colors";
  
  const LessonPlanScreen = ({navigation}) => {

  
    const handleSubmit = () => {
      navigation.navigate('AddLessonPlanName')
    }

    const LessonPlans = [
      {
        name: 'New lesson plan',
        status: 'Ongoing',
        color: '#FFD700'
      },
      {
        name: 'Lesson plan',
        status: 'Completed',
        color: '#537A5A'
      },
      {
        name: 'Lesson Plan name',
        status: 'Rejected',
        color: '#E50E0E'

      },
      {
        name: 'Lesson plan',
        status: 'Completed',
        color: '#537A5A'
      },
    ]

    var displayStudent = LessonPlans.map((el, id) => {
      if(el.isChecked === undefined){
        el.isChecked = false
      }
      return(
        <LessonPlanContainer name={el.name} status={el.status} color={el.color}/>
      )
    })

    return (
      <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
        <StatusBar style="light" />
        <View style={styles.headerIcon}>
          <ModuleHeader navigation={navigation} moduleTitle="Lesson Plan"/>
        </View>
        <Animatable.View
          style={styles.bodyCtn}
          animation="fadeInUpBig"
          easing="ease">
          <PrimaryButton onPress={handleSubmit} title="New Lesson Plan"/>
          <ScrollView>
            {displayStudent}
          </ScrollView>
        </Animatable.View>
      </LinearGradient>
    );
  };
  
  export default LessonPlanScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerIcon: {
      marginTop: 40,
      flex: 1,
    },
    bodyCtn: {
      flex: 6,
      backgroundColor: Colors.backgroundColor,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      paddingHorizontal: 19,
    },
  });
  