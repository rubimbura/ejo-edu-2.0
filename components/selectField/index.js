import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import PrimaryButton from "../button/PrimaryButton";

const SelectField = ({ placeholder, items, modalHeader, disabled, value }) => {
  const [showModal, setModal] = useState(false);
  const [selected, setSelected] = useState('')

  const toggleModal = () => {
    setModal(!showModal);
  };

  const handleItemPressed = (item) => {
    setSelected(item.label)
    setModal(!showModal)
  }

  return (
    <TouchableOpacity
      disabled={disabled} 
      style={styles.container} 
      onPress={toggleModal}>
      <View style={styles.headerCtn}>
        <Text style={styles.placeholder}>{placeholder}</Text>
        {!disabled &&<AntDesign name="down" size={10} color="#6B6B6B" style={styles.icon} />}
      </View>
      <Text style={styles.selectedItem}>{disabled ? value: selected}</Text>
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View style={styles.modalheaderCtn}>
                <Text style={styles.modalText}>{modalHeader}</Text>
              </View>
              <ScrollView contentContainerStyle={styles.scrollContent}>
                {items?.map((el) => {
                  return <TouchableOpacity style={styles.modalItems} onPress={() =>handleItemPressed(el)}>
                        <Text>{el.label}</Text>
                  </TouchableOpacity>
                })}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </TouchableOpacity>
  );
};

export default SelectField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 14
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
  selectedItem: {
    color: "#3E3E3E",
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    width: "100%",
    height: 400,
    backgroundColor: "white",
  },
  modalheaderCtn:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  modalText: {
    fontSize: 24,
    alignText: 'center'
  },
  modalItems: {
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#CACCD4',
  },
  scrollContent: {
  },
});
