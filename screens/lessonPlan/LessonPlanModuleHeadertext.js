import {
    Text,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import { Feather } from "@expo/vector-icons";
  import Colors from "../../constants/Colors";
  
  const ModuleHeaderText = ({
      placeholder
  }) => {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{placeholder}</Text>
      </TouchableOpacity>
    );
  };
  
  export default ModuleHeaderText;
  
  const styles = StyleSheet.create({
    container: {
     marginTop: 4,
     marginBottom: 20,
    },
    text:{
      color: Colors.primary,
      fontSize: 16
    }
  });
  