import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";

const SuccessModal = ({visible, hide, navigation}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{flex: 1}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Submited !</Text>
            </View>
          </View>
        </TouchableOpacity>

      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    backgroundColor: '#7C32FF',
    shadowColor: "#000",
    width: '70%',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center",
    color: 'white',
    fontSize: 24,
    lineHeight: 22,
    fontFamily: 'sansMedium'
  }
});

export default SuccessModal;