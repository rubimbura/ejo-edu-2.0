import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import students_icon from "../../assets/images/students-icon.png";

const Parents = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.splashTitle}>Students</Text>
      <Text style={styles.splashSubTitle}>
        Parents and Teachers works Together for the child’s benifit
      </Text>
      <Image source={students_icon} style={styles.imageIcon} />
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate("loginScreen")}
      >
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Parents;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FFD4D4",
    padding: 42,
  },
  imageIcon: {
    marginTop: 60,
  },
  splashTitle: {
    marginTop: 60,
    color: "black",
    fontSize: 48,
    lineHeight: 65,
    fontFamily: "sansBold",
  },
  splashSubTitle: {
    color: "#000",
    fontSize: 24,
    lineHeight: 34,
    fontFamily: "notoRegular",
  },
  nextBtn: {
    position: "absolute",
    bottom: 30,
    display: "flex",
    alignSelf: "center",
    backgroundColor: "rgba(64, 14, 95, 0.91)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 15,
  },
  getStartedText: {
    color: "#fff",
    fontSize: 24,
  },
});
