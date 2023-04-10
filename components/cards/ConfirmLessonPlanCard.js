import {
  View,
  StyleSheet,
} from "react-native";
import Colors from "../../constants/Colors";

const ConfirmLessonPlanCard = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ConfirmLessonPlanCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    padding: 16,
    backgroundColor: "white",
    marginBottom: 20,
    display: "flex",
    alignSelf: "center",
    borderRadius:12
  },
});
