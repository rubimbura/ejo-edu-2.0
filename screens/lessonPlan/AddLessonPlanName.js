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
  
  const AddLessonPlanName = ({navigation}) => {

  
    const handleSubmit = () => {
      navigation.navigate('ConfirmLessonPlanName')
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

    const topics = [
      {
        label: 'Item 1',
        id: 1
      },
      {
        label: 'Item 2',
        id: 2
      },
      {
        label: 'Item 3',
        id: 2
      },
      {
        label: 'Item 4',
        id: 2
      },
    ]

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
             items={topics}
             modalHeader="Select topic"
            />
            <SelectField
             placeholder="Sub Topic"
             items={topics}
             modalHeader="Select topic"
            />
            <SelectField
             placeholder="Unit"
             items={topics}
             modalHeader="Select topic"
            />
            <SelectField
             placeholder="Lesson Number"
             items={topics}
             modalHeader="Select topic"
             disabled={true}
             value={2}
            />
            <ContainedTextField
              placeholder="Lesson Name"
            />
            <ContainedTextField
              placeholder="Key Unit Competency (s)"
            />
            <PrimaryButton title="Proceed" onPress={handleSubmit}/>
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
  