import { StyleSheet, View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as Animatable from "react-native-animatable";
import PrimaryButton from "../../components/button/PrimaryButton";
import ModuleHeader from "../../components/moduleHeader";
import ListItemCard from "../../components/cards/ListItemCard";
import { useSelector } from "react-redux";
import { useState } from 'react'
import SuccessModal from "../../components/successModal";

const ChooseAssesmentScreen = ({ navigation }) => {
  const state = useSelector((state) => state.participationReducer?.data);

  const [isSelected, setSelected] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  const handleHideSuccessModal = () => {
    setModalVisible(!modalVisible)
  }

  const handleItemPressed = (id) => {
    setSelected(id)
  }
  return (
    <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
      <StatusBar style="light" />
      <View style={styles.headerIcon}>
        <ModuleHeader
          navigation={navigation}
          level="Level 1A"
          moduleTitle="Participation"
        />
      </View>
      <Animatable.View
        style={styles.bodyCtn}
        animation="fadeInUpBig"
        easing="ease"
      >
        <View style={styles.bodyHeader}></View>
        <ScrollView>
          <View style={styles.bodyHeader}>
            <Text style={[styles.displineTypeheader, { color: "#C738D8" }]}>
              {state?.header}
            </Text>
          </View>

          {state.data?.map((el, id) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.header}>{el.header}</Text>
                {el.data.map((el, id) => {
                    return(
                    <ListItemCard type={el.type} isRed={state?.isRed} isSelected={isSelected === id ? true : false} onPress={() => handleItemPressed(id)}/>
                    )
                })}
              </View>
            );
          })}
          <PrimaryButton title="SUBMIT" onPress={() => setModalVisible(true)}/>
        </ScrollView>
        <SuccessModal visible={modalVisible} hide={handleHideSuccessModal} navigation={navigation}/>
      </Animatable.View>
    </LinearGradient>
  );
};

export default ChooseAssesmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerIcon: {
    marginTop: 40,
    flex: 2,
  },
  bodyCtn: {
    flex: 6,
    backgroundColor: "#fff",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingHorizontal: 20,
  },
  bodyHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
    gap: 20,
  },
  displineTypeheader: {
    color: "#E65151",
    fontSize: 26,
    lineHeight: 27,
    fontFamily: "sansBold",
    textAlign: "center",
  },
  studentCardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 100,
  },
  header: {
    color: "#7C32FF",
    fontSize: 19,
    fontFamily: "sansMedium",
    lineHeight: 26,
    marginBottom: 10
  },
});
