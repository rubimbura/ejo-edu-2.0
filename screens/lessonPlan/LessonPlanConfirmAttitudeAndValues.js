import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as Animatable from "react-native-animatable";
import PrimaryButton from "../../components/button/PrimaryButton";
import ModuleHeader from "../../components/moduleHeader";
import ConfirmLessonPlanCard from "../../components/cards/ConfirmLessonPlanCard";
import Colors from "../../constants/Colors";
import ModuleHeaderText from "./LessonPlanModuleHeadertext";

const LessonPlanConfirmAttitudeAndValues = ({ navigation }) => {
  const handleSubmit = () => {
    navigation.navigate("lessonPlanIntroduction");
  };

  return (
    <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
      <StatusBar style="light" />
      <View style={styles.headerIcon}>
        <ModuleHeader navigation={navigation} moduleTitle="Instructional obj" />
      </View>
      <Animatable.View
        style={styles.bodyCtn}
        animation="fadeInUpBig"
        easing="ease"
      >
        <ModuleHeaderText placeholder="Attitude and Values" />

        <ConfirmLessonPlanCard>
          <View style={styles.cardHeaderCtn}>
            <Text style={styles.cardHeaderText}>Instruction Objectives</Text>
          </View>
          <View style={styles.cardHeaderCtn}>
            <Text style={styles.key}>Scheme of work content</Text>
            <Text style={styles.value}>Gushishikarira gusoma no kwandika yubahiriza utwatuzo.</Text>
          </View>
          <View style={styles.cardHeaderCtn}>
            <Text style={styles.key}>Bloom taxonomy level</Text>
            <Text style={styles.value}>Understanding</Text>
          </View>
          <View style={styles.cardHeaderCtn}>
            <Text style={styles.key}>Standard criteria perfomance</Text>
            <Text style={styles.value}>90%</Text>
          </View>
        </ConfirmLessonPlanCard>
        <View>
          <PrimaryButton title="Confirm and proceed" onPress={handleSubmit} />
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default LessonPlanConfirmAttitudeAndValues;

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
  cardHeaderText: {
    color: Colors.ejoPrimary,
    fontSize: 16,
  },
  cardHeaderCtn: {
    marginBottom: 15,
  },
  key: {
    color: Colors.ejoKeyColor,
    fontSize: 13,
    lineHeight: 16,
  },
  value: {
    color: Colors.ejoValueColor,
    fontSize: 13,
    marginTop: 8,
    lineHeight: 20,
  },
});
