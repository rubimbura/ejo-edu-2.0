import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const UploadContainer = ({
    placeholder
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{placeholder}</Text>
      <Feather name="upload" size={16} color={Colors.primary} />
    </TouchableOpacity>
  );
};

export default UploadContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20
  },
  text:{
    color: Colors.primary,
    marginRight: 12
  }
});
