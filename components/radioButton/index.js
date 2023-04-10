import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import SelectField from "../selectField";

const RadioButton = ({ onPress, handleLongPress, data, isChecked }) => {
  const items = [
    {
      label: "Yes",
    },
    // {
    //   label: "Custom",
    // },
    {
      label: "No",
    },
  ];
  return (
    <View style={styles.container}>
      {items.map((el) => {
        return (
          <TouchableOpacity style={styles.subContainer}>
            <Text>{el.label}</Text>
            <TouchableOpacity style={styles.circle}></TouchableOpacity>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom:20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    width: '50%'
  },
  subContainer:{
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: "#2C2C2C",
    borderWidth: 1,
    marginLeft: 8,
  },
});
