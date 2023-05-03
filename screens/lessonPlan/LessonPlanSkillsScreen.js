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
import { stardardCreterial, skills } from "../../utils";
import ModuleHeaderText from "./LessonPlanModuleHeadertext";


const LessonPlanSkillsScreen = ({ navigation }) => {
  const handleSubmit = () => {
    navigation.navigate("ConfirmSkills");
  };

  return (
    <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
      <StatusBar style="light" />
      <View style={styles.headerIcon}>
        <ModuleHeader navigation={navigation} moduleTitle="Instructional Obj" />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : ""}
        style={{ flex: 5 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Animatable.View
            style={styles.bodyCtn}
            animation="fadeInUpBig"
            easing="ease"
          >
            <ScrollView style={styles.scrollCtn}>
              <ModuleHeaderText placeholder="Skills" />

              <SelectField
                placeholder="Scheme of work content"
                items={skills}
                modalHeader="Scheme of work content"
              />
              <SelectField
                placeholder="Bloom taxonomy level"
                modalHeader="Bloom taxonomy level"
                disabled={true}
                value={"skils"}
              />
              <SelectField
                placeholder="Standard criteria perfomance"
                items={stardardCreterial}
                modalHeader="Standard criteria perfomance"
              />
              <View>
                <Text style={styles.infoText}>
                  Do you want to explore more skills content?
                </Text>
              </View>
              <RadioButton />
              <PrimaryButton title="Proceed" onPress={handleSubmit} />
            </ScrollView>
          </Animatable.View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default LessonPlanSkillsScreen;

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
});
