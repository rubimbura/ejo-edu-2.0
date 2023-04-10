import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput
  } from "react-native";

  
  const ContainedTextField = ({ placeholder, items, modalHeader, disabled, value }) => {  
    return (
      <TouchableOpacity
        disabled={disabled} 
        style={styles.container}>
        <View style={styles.headerCtn}>
          <Text style={styles.placeholder}>{placeholder}</Text>
        </View>
        <TextInput style={styles.input} />
      </TouchableOpacity>
    );
  };
  
  export default ContainedTextField;
  
  const styles = StyleSheet.create({
    container: {
      borderRadius: 12,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#969696',
      paddingHorizontal: 16,
      paddingVertical: 10
    },
    headerCtn: {
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    placeholder: {
      color: "#A3A3A3",
      fontSize: 16,
    },
    input:{
        color: '#323643',
        fontSize: 16,
        // lineHeight: 10,
        fontFamily: 'sansMedium',
    },

  });
  