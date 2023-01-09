import { StyleSheet, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as Animatable from "react-native-animatable";
import PrimaryButton from "../../components/button/PrimaryButton";
import ModuleHeader from "../../components/moduleHeader";
import StudentCard from "../../components/studentCard";
import { StudentMockedData } from "../../constants/studentMockedData";
import { useState, useEffect } from 'react'

const ParticipationScreen = ({ navigation }) => {
  const [studentArr, setStudentArr] = useState(StudentMockedData);
  const [value, setValue] = useState(false);

  useEffect(() => {
    studentArr.map(el=>{
      el.isChecked = undefined
    })
    setValue(!value)
  },[StudentMockedData])

  const handleLongStudentPressed = () => {
    navigation.navigate("ParticipationOverviewScreen");
  };

  const handleStudentPressed = (id) => {
    studentArr[id].isChecked = !studentArr[id].isChecked;
    setValue(!value);
  };


  var displayStudent = studentArr.map((el, id) => {
    if(el.isChecked === undefined){
      el.isChecked = false
    }
    return(
      <StudentCard data={el} isChecked={el.isChecked} onPress={() => handleStudentPressed(id)} handleLongPress={handleLongStudentPressed}/>
    )
  })


  const handleSubmit = () => {
    navigation.navigate('AbilityAssesmentScreen')
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
          <View style={styles.studentCardContainer}>
            {displayStudent}
          </View>
          <PrimaryButton title="NEXT" onPress={handleSubmit}/>
        </ScrollView>
      </Animatable.View>
    </LinearGradient>
  );
};

export default ParticipationScreen;

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
  studentCardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 100,
  },
});
