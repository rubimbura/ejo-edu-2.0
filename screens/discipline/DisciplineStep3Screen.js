import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as Animatable from "react-native-animatable";
import PrimaryButton from "../../components/button/PrimaryButton";
import ModuleHeader from "../../components/moduleHeader";
import ListItemCard from "../../components/cards/ListItemCard";
import { InfractionTypes, MotivationTypes } from "./Types";
import { useState } from 'react'
import SuccessModal from "../../components/successModal";


const InfractionScreen = ({ navigation, route }) => {
  const { postive } = route.params;
  const [isSelected, setIsSelected] = useState()
  const [motivationSelected, setMotivationSelected] = useState()

  const [modalVisible, setModalVisible] = useState(false)

  const handleTypePressed = (id) => {
    setIsSelected(id);
  };

  const handleMotivationPressed = (id) => {
    setMotivationSelected(id)
  }

  const handleHideSuccessModal = () => {
    setModalVisible(!modalVisible)
  }

  var displTypes = InfractionTypes.map((el, id) => {
    return (
      <ListItemCard
        type={el.type}
        onPress={() => handleTypePressed(id)}
        key={id}
        isRed={postive ? true : false}
        isSelected={isSelected === id ?  true : false}
      />
    );
  });

  var displayWarningTypes = MotivationTypes.map((el, id) => {
    return (
      <ListItemCard
        type={el.type}
        onPress={() => handleMotivationPressed(id)}
        key={id}
        isRed={postive ? true : false}
        isSelected={motivationSelected === id ?  true : false}
      />
    );
  });

  return (
    <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
      <StatusBar style="light" />
      <View style={styles.headerIcon}>
        <ModuleHeader
          navigation={navigation}
          moduleTitle="Discipline"
          level="Level 1 A"
        />
      </View>
      <Animatable.View
        style={styles.bodyCtn}
        animation="fadeInUpBig"
        easing="ease"
      >
        <View style={styles.bodyHeader}>
          <Text style={styles.displineTypeheader}></Text>
        </View>
        <ScrollView>
          <View style={{ margin: 10 }}>
            {postive && <View style={{marginBottom: 10}}>
              <Text style={styles.header}>Motivation</Text>
              {displayWarningTypes}
            </View>}
            <Text style={styles.header}>Infraction</Text>
            {displTypes}
          </View>
          <PrimaryButton title="SUBMIT" onPress={() => setModalVisible(true)}/>
        </ScrollView>
        <SuccessModal visible={modalVisible} hide={handleHideSuccessModal} navigation={navigation}/>
      </Animatable.View>
    </LinearGradient>
  );
};

export default InfractionScreen;

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
    paddingHorizontal: 5,
  },
  bodyHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 7,
    marginBottom: 20,
    gap: 20,
  },
  displineTypeheader: {
    color: "#E65151",
    fontSize: 22,
    lineHeight: 27,
    fontFamily: "sansMedium",
  },
  header: {
    color: "#7C32FF",
    fontSize: 19,
    fontFamily: "sansMedium",
    lineHeight: 26,
    marginBottom: 10,
  },
});
