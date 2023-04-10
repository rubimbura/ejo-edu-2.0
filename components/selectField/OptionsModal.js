import { Text, View, StyleSheet,TouchableOpacity, Modal } from "react-native";
;

const OptionsModal = ({ show, hide }) => {
  return (
    <Modal 
      visible={show}
      animationType="slide"
      transparent={true}
      style={styles.container}>
       <View>
        <Text>sample modal</Text>
       </View>
    </Modal>
  );
};

export default OptionsModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    borderRadius: 12,
    padding: 16
  },
});
