import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Platform
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { StatusBar } from "expo-status-bar";
  import * as Animatable from "react-native-animatable";
  import PrimaryButton from "../../components/button/PrimaryButton";
  import ModuleHeader from "../../components/moduleHeader"
  import LessonPlanContainer from "./LessonPlanContainer";
import SelectField from "../../components/selectField";
import ContainedTextField from "../../components/textfield/ContainedTextField";
import ConfirmLessonPlanCard from "../../components/cards/ConfirmLessonPlanCard";
import Colors from "../../constants/Colors";

  
  const CornfirmLessnPlanName = ({navigation}) => {

  
    const handleSubmit = () => {
      navigation.navigate('LessonPlanKnowledge')
    }
   
    return (
      <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
        <StatusBar style="light" />
        <View style={styles.headerIcon}>
          <ModuleHeader navigation={navigation} moduleTitle="Details"/>
        </View>
        <Animatable.View
          style={styles.bodyCtn}
          animation="fadeInUpBig"
          easing="ease">
          <ConfirmLessonPlanCard>
            <View style={styles.cardHeaderCtn}>
              <Text style={styles.cardHeaderText}>Syllabus Area</Text>
            </View>
            <View style={styles.cardHeaderCtn}>
              <Text style={styles.key}>Topic</Text>
              <Text style={styles.value}>Biology</Text>
            </View>
            <View style={styles.cardHeaderCtn}>
              <Text style={styles.key}>Sub topic</Text>
              <Text style={styles.value}>Biology</Text>
            </View>
            <View style={styles.cardHeaderCtn}>
              <Text style={styles.key}>Unit</Text>
              <Text style={styles.value}>Biology</Text>
            </View>
            <View style={styles.cardHeaderCtn}>
              <Text style={styles.key}>Lesson name</Text>
              <Text style={styles.value}>Lesson plan name</Text>
            </View>
            <View style={styles.cardHeaderCtn}>
              <Text style={styles.key}>Key unit competency</Text>
              <Text style={styles.value}>Learners should know how to....</Text>
            </View>
          </ConfirmLessonPlanCard>
          <View>
            <PrimaryButton title="Confirm and proceed" onPress={handleSubmit}/>
          </View>
        </Animatable.View>
      </LinearGradient>
    );
  };
  
  export default CornfirmLessnPlanName;
  
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
      backgroundColor: '#fff',
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      paddingHorizontal: 19,
      paddingVertical: 31
    },
    cardHeaderText:{
      color: Colors.ejoPrimary,
      fontSize: 16,
    },
    cardHeaderCtn:{
      marginBottom: 15
    },
    key:{
      color: Colors.ejoKeyColor,
      fontSize: 13,
      lineHeight:16
    },
    value:{
      color: Colors.ejoValueColor,
      fontSize: 13,
      marginTop: 8,
      lineHeight:20
    }
  });
  