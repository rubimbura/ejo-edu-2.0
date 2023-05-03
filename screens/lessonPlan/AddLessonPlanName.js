import {
    StyleSheet,
    View,
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
import { topic, subTopic, unit, LessonPlans, keyUnitCompetency } from '../../utils'
  
  const AddLessonPlanName = ({navigation}) => {

  
    const handleSubmit = () => {
      navigation.navigate('ConfirmLessonPlanName')
    }
    

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
          <ModuleHeader navigation={navigation} moduleTitle="New"/>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : ""} style={{flex: 5}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animatable.View
          style={styles.bodyCtn}
          animation="fadeInUpBig"
          easing="ease">
          <ScrollView style={styles.scrollCtn} showsVerticalScrollIndicator={false}>
            <SelectField
             placeholder="Topic"
             items={topic}
             modalHeader="Select topic"
            />
            <SelectField
             placeholder="Sub Topic"
             items={subTopic}
             modalHeader="Select sub topic"
            />
            <SelectField
             placeholder="Unit"
             items={unit}
             modalHeader="Select unit"
            />
            <SelectField
             placeholder="Lesson Number"
             items={topic}
             modalHeader="Select topic"
             disabled={true}
             value={2}
            />
            <ContainedTextField
              placeholder="Lesson Name"
            />
            <SelectField
             placeholder="Key Unit Competency (s)"
             items={subTopic}
             modalHeader="Select sub topic"
             disabled={true}
             value={keyUnitCompetency}
            />
            <PrimaryButton 
             title="Proceed" 
             onPress={handleSubmit}

            />
          </ScrollView>
        </Animatable.View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

      </LinearGradient>
    );
  };
  
  export default AddLessonPlanName;
  
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
  });
  