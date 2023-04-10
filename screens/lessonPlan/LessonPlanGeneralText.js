import {
    Text,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import Colors from "../../constants/Colors";
  
  const LessonPlanGeneralText = ({
      placeholder
  }) => {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{placeholder}</Text>
      </TouchableOpacity>
    );
  };
  
  export default LessonPlanGeneralText;
  
  const styles = StyleSheet.create({
    container: {
     marginTop: 4,
    },
    text:{
      color: '#6B6B6B',
      fontSize: 16
    }
  });
  