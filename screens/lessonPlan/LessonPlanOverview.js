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
import ModuleHeaderText from "./LessonPlanModuleHeadertext";
import { List } from "react-native-paper";
import { useState } from "react";
import ConfirmLessonPlanCard from "../../components/cards/ConfirmLessonPlanCard";
import Colors from "../../constants/Colors";

const LessonPlanOverview = ({ navigation }) => {
  const [expanded, setExpanded] = useState(true);

  const handleSubmit = () => {
    navigation.navigate("HomeScreen");
  };

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
      <StatusBar style="light" />
      <View style={styles.headerIcon}>
        <ModuleHeader navigation={navigation} moduleTitle="Overview" />
      </View>
          <Animatable.View
            style={styles.bodyCtn}
            animation="fadeInUpBig"
            easing="ease"
          >
            <View style={{ padding: 19 }}>
              <ModuleHeaderText placeholder="Overview" />
            </View>
            <ScrollView
              style={[
                styles.scrollCtn,
                expanded ? { flexGrow: 1 } : { flexGrow: 0 },
              ]}
              showsVerticalScrollIndicator={false}
            >
              <List.Accordion
                title="Instructional Objectives"
                style={styles.accordion}>
                <View style={{ width: "90%", alignSelf: "center" }}>
                  <ConfirmLessonPlanCard>
                    <View style={styles.cardHeaderCtn}>
                      <Text style={styles.key}>Topic</Text>
                      <Text style={styles.value}>Ubushobozi bwo gukoresha ururimi mvugo no mu nyandiko</Text>
                    </View>
                    <View style={styles.cardHeaderCtn}>
                      <Text style={styles.key}>Sub-topic</Text>
                      <Text style={styles.value}>Kumva, Kuvuga, Gusoma, Kwandika, Iyigantego n'inyunguramagambo</Text>
                    </View>
                    <View style={styles.cardHeaderCtn}>
                      <Text style={styles.key}>Unit</Text>
                      <Text style={styles.value}>
                        Uburinganire n’ubwuzuzanye mu muryango.
                      </Text>
                    </View>
                    <View style={styles.cardHeaderCtn}>
                      <Text style={styles.key}>Lesson name</Text>
                      <Text style={styles.value}>
                        Uburinganire n'ubwuzuzanye mu muryango 
                      </Text>
                    </View>
                    <View style={styles.cardHeaderCtn}>
                      <Text style={styles.key}>Key unit competency</Text>
                      <Text style={styles.value}>
                        Gusesengura imyandiko ku buringanire n’ubwuzuzanye mu muryango
                      </Text>
                    </View>
                  </ConfirmLessonPlanCard>
                </View>
              </List.Accordion>

              <List.Accordion title="Learning Activities" onPress={handlePress} style={styles.accordion}>
              <View style={{ width: "90%", alignSelf: "center" }}>
                <ConfirmLessonPlanCard>
                  <View style={styles.cardHeaderCtn}>
                    <Text style={styles.key}>Cross cutting issues</Text>
                    <Text style={styles.value}>
                      Environment and sustainability.
                    </Text>
                  </View>
                  <View style={styles.cardHeaderCtn}>
                    <Text style={styles.key}>Student syllabus area</Text>
                    <Text style={styles.value}>
                      Page 26
                    </Text>
                  </View>
                  <View style={styles.cardHeaderCtn}>
                    <Text style={styles.key}>Teaching techniques</Text>
                    <Text style={styles.value}>
                      Live lecturing, Guest speakers, Audio visual presentation, Field vist, Assigned reading/text, peer teaching, classroom display. 
                    </Text>
                  </View>
                  {/* <View style={styles.cardHeaderCtn}>
                    <Text style={styles.key}>Sub teaching techniques</Text>
                    <Text style={styles.value}>Technique one</Text>
                    <Text style={styles.value}>Technique two</Text>
                  </View> */}
                </ConfirmLessonPlanCard>
                </View>
              </List.Accordion>
              <View
                style={{
                  width: "90%",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  alignSelf: "center",
                }}
              >
                <PrimaryButton title="FINISH" onPress={handleSubmit} />
              </View>
            </ScrollView>
          </Animatable.View>
    </LinearGradient>
  );
};

export default LessonPlanOverview;

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
    // paddingHorizontal: 19,
    paddingVertical: 31,
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
  accordion: {
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    alignSelf: "center",
    width: "100%",
  },
});
