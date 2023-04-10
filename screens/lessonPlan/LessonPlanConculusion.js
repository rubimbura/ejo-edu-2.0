import {
    StyleSheet,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Platform,
    Text,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { StatusBar } from "expo-status-bar";
  import * as Animatable from "react-native-animatable";
  import PrimaryButton from "../../components/button/PrimaryButton";
  import ModuleHeader from "../../components/moduleHeader";
  import SelectField from "../../components/selectField";
  import RadioButton from "../../components/radioButton";
  import ContainedTextField from "../../components/textfield/ContainedTextField";
  import UploadContainer from "../../components/uploadContainer";
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import ModuleHeaderText from "./LessonPlanModuleHeadertext";
  import LessonPlanGeneralText from "./LessonPlanGeneralText";
  
  
  
  const LessonPlanConculusion = ({ navigation }) => {
    const handleSubmit = () => {
      navigation.navigate("lessonPlanOverview");
    };
  
    return (
      <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
        <StatusBar style="light" />
        <View style={styles.headerIcon}>
          <ModuleHeader navigation={navigation} moduleTitle="Learning Activities" />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : ""}
          style={{ flex: 5 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Animatable.View
              style={styles.bodyCtn}
              animation="fadeInUpBig"
              easing="ease">
              <ScrollView style={styles.scrollCtn} showsVerticalScrollIndicator={false}>
                <ModuleHeaderText placeholder="Conculusion"/>
                <LessonPlanGeneralText placeholder="Do the content indicator match the introduction?"/>
                <RadioButton/>
                <SelectField placeholder="Activities"/>

                <LessonPlanGeneralText placeholder="Do the cross cutting issues match the introduction?"/>
                <RadioButton/>
                <SelectField placeholder="Cross cutting issues"/>

                <LessonPlanGeneralText placeholder="Do the learning techniques match the introduction?"/>
                <RadioButton/>
                <SelectField placeholder="Teaching techniques"/>

                <LessonPlanGeneralText placeholder="Do the student syllabus area match the introduction?"/>
                <RadioButton/>
                <SelectField placeholder="Type of instructional material"/>
              


                <LessonPlanGeneralText placeholder="Do the instructional material match the introduction?"/>
                <RadioButton/>

                <UploadContainer placeholder="Upload Instructional Material"/>
                <View style={styles.uploadedContainer}>
                  <View style={styles.uploadedItem}>
                      <MaterialCommunityIcons name="file-pdf-box" size={30} color="#D04750" />
                      <Text style={styles.uploadedText}>Biology</Text>
                  </View>
                  <View style={styles.uploadedItem}>
                      <MaterialCommunityIcons name="file-pdf-box" size={30} color="#D04750" />
                      <Text style={styles.uploadedText}>Physics</Text>
                  </View>
                </View>
                <UploadContainer placeholder="Select Excercises"/>
  
                <PrimaryButton title="Proceed" onPress={handleSubmit} />
              </ScrollView>
            </Animatable.View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  };
  
  export default LessonPlanConculusion;
  
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
      backgroundColor: "#fff",
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      paddingHorizontal: 19,
      paddingVertical: 31,
    },
    infoText: {
      color: "#6B6B6B",
      fontSize: 16,
    },
    uploadedItem:{
      width: 64,
      height: 81,
      borderWidth: 1,
      borderColor: '#969696',
      borderRadius: 8,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 20
    },
    uploadedText:{
      fontSize: 12,
      color: '#2A2F4E'
    },
    uploadedContainer:{
      flexDirection: 'row',
      alignItems: 'center'
    }
  });
  