import { StyleSheet, View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as Animatable from "react-native-animatable";
import PrimaryButton from "../../components/button/PrimaryButton";
import ModuleHeader from "../../components/moduleHeader";
import ListItemCard from "../../components/cards/ListItemCard";
import { 
    AbilityAssesment, 
    gapAssesment,
    highLevelData,
    coOperationAndSocialHarmony,
    rulesAndAssignment,
    belowLevelData,
    coOperationAndSocialHarmonynegative,
    rulesAndAssignmentNegative
   } from "./Types";
   import { useDispatch} from 'react-redux'
   import { typeReducer } from '../../slices/participation'

const AbilityAssesmentScreen = ({ navigation }) => {

  const dispatch = useDispatch()

  const handleAssessmentPressed = (type) => {
    var typeData
    if(type.includes('High Level')){
      typeData = highLevelData
    }else if(type.includes('Co-operation and Social Harmony')){
      typeData = coOperationAndSocialHarmony
    }else if(type.includes('Rules and Assignment')){
      typeData = rulesAndAssignment
    }
    navigation.navigate('ChooseAssesmentScreen')
    dispatch(typeReducer({
      header: type,
      data: typeData,
      isRed: true
    }))
  }

  const handleNegativeAssesmentPressed = (type) => {
    var typeData
    if(type.includes('Below Level')){
      typeData = belowLevelData
    }else if(type.includes('Co-operation and Social Harmony')){
      typeData = coOperationAndSocialHarmonynegative
    }else if(type.includes('Rules and Assignment')){
      typeData = rulesAndAssignmentNegative
    }
    navigation.navigate('ChooseAssesmentScreen')
    dispatch(typeReducer({
      header: type,
      data: typeData,
      isRed: false
    }))
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
            <Text style={[styles.displineTypeheader, {color: '#7C32FF'}]}>ABILITY ASSESMENT</Text>
          </View>
          {AbilityAssesment.map((el, id) => {
            return <ListItemCard type={el.type} onPress={() => handleAssessmentPressed(el.type)} isRed={true}/>
          })}

          <View style={styles.bodyHeader}>
          <Text style={styles.displineTypeheader}>GAP ASSESMENT</Text>
          </View>
          {gapAssesment.map((el, id) => {
            return <ListItemCard type={el.type} onPress={() => handleNegativeAssesmentPressed(el.type)}/>
          })}
        {/* <PrimaryButton title="NEXT"/> */}

        </ScrollView>
      </Animatable.View>
    </LinearGradient>
  );
};

export default AbilityAssesmentScreen;

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
