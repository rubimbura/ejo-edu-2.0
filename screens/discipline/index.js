import {
    StyleSheet,
    View,
    ScrollView
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { StatusBar } from "expo-status-bar";
  import * as Animatable from "react-native-animatable";
  import PrimaryButton from "../../components/button/PrimaryButton";
  import { useState, useEffect } from 'react'
  import StudentCard from '../../components/studentCard'
  import ModuleHeader from "../../components/moduleHeader"
  import { StudentMockedData } from '../../constants/studentMockedData'
  
  const DisciplineScreen = ({navigation}) => {


    const [studentArr, setStudentArr] = useState(StudentMockedData)
    const [value, setValue] = useState(false)

    useEffect(() => {
      studentArr.map(el=>{
        el.isChecked = undefined
      })
      setValue(!value)
    },[StudentMockedData])

    const handleLongStudentPressed = () => {
        navigation.navigate('DisciplineOverviewScreen')
    }

    const handleStudentPressed = (id) => {
      studentArr[id].isChecked = !studentArr[id].isChecked
      setValue(!value)
    }


    var displayStudent = studentArr.map((el, id) => {
      if(el.isChecked === undefined){
        el.isChecked = false
      }
      return(
        <StudentCard data={el} isChecked={el.isChecked} onPress={() => handleStudentPressed(id)} handleLongPress={handleLongStudentPressed}/>
      )
    })


    const handleSubmit = () => {
      navigation.navigate('DisciplineStep1Screen')
    }
  
    return (
      <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
        <StatusBar style="light" />
        <View style={styles.headerIcon}>
            <ModuleHeader navigation={navigation} moduleTitle="Discipline" level="Level 1 A"/>
        </View>
        <Animatable.View
          style={styles.bodyCtn}
          animation="fadeInUpBig"
          easing="ease">
          <View style={styles.bodyHeader}>
          </View>
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
  
  export default DisciplineScreen;
  
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
    bodyHeader:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 7,
        marginBottom: 20,
        gap: 20,
    },
    allPresentCtn:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#28D40C',
        shadowColor: "#28D40C",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: "white",
    },
    allAbsentCtn:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FC0707',
        marginLeft: 20,
        shadowColor: "#FC0707",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: "white",
    },
    allText:{
        fontFamily: 'sansRegular',
        fontSize: 13,
        lineHeight: 13,
        color: '#000000'
    },
    studentCardContainer:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 100
    }
  });
  