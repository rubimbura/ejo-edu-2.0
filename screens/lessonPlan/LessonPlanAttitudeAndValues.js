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

const LessonPlanAttitudeAndValues = ({ navigation }) => {
  const handleSubmit = () => {
    navigation.navigate("ConfirmAttitudeAndValues");
  };

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
        <ModuleHeader navigation={navigation} moduleTitle="Attitude and Values" />
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
              <SelectField
                placeholder="Scheme of work content"
                items={topics}
                modalHeader="Scheme of work content"
              />
              <SelectField
                placeholder="Bloom taxonomy level"
                items={topics}
                modalHeader="Bloom taxonomy level"
              />
              <SelectField
                placeholder="Standar criteria perfomance"
                items={topics}
                modalHeader="Standar criteria perfomance"
              />
              <View>
                <Text style={styles.infoText}>
                  Do you have a new type of scheme of work content to teach
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

export default LessonPlanAttitudeAndValues;

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
