import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { StatusBar } from "expo-status-bar";
  import * as Animatable from "react-native-animatable";
  import PrimaryButton from "../../components/button/PrimaryButton";
  import { useEffect, useState } from 'react'
  import StudentCard from '../../components/studentCard'
  import ModuleHeader from "../../components/moduleHeader"
  import SuccessModal from "../../components/successModal"
  import { StudentMockedData } from '../../constants/studentMockedData'
  
  const AttendenceScreen = ({navigation}) => {

  
    const [modalVisible, setModalVisible] = useState(false)
    const [value, setValue] = useState(false)
    const [students, setStudents] = useState(StudentMockedData)

  

    useEffect(() => {
      students.map(el=>{
        el.isChecked = undefined
      })
      setValue(!value)
    },[StudentMockedData])
  
    const handleSubmit = () => {
      setModalVisible(true)
    }

    const handleHideSuccessModal = () => {
      setModalVisible(!modalVisible)
    }

    const handleLongPress = () => {
      navigation.navigate('AttandanceOverviewScreen')
    }

    const handleStudentPressed = (id) => {
      students[id].isChecked = !students[id].isChecked
      setValue(!value)
    }


    const handleAllAbsent = () => {
      students.map(el => el.isChecked = true)
      setValue(!value)

    }

    const handleAllPresent = () => {
      students.map(el => el.isChecked = false)
      setValue(!value)

    }


    var displayStudent = students.map((el, id) => {
      if(el.isChecked === undefined){
        el.isChecked = false
      }
      return(
        <StudentCard handleLongPress={handleLongPress} data={el} isChecked={el.isChecked} onPress={() => handleStudentPressed(id)}/>
      )
    })

    return (
      <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
        <StatusBar style="light" />
        <View style={styles.headerIcon}>
            <ModuleHeader navigation={navigation} moduleTitle="Attendance" level="Level 1 A"/>
        </View>
        <Animatable.View
          style={styles.bodyCtn}
          animation="fadeInUpBig"
          easing="ease">
          <View style={styles.bodyHeader}>
            <TouchableOpacity style={styles.allPresentCtn} onPress={handleAllPresent}>
                <Text style={styles.allText}>All Present</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.allAbsentCtn} onPress={handleAllAbsent}>
                <Text style={styles.allText}>All Absent</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.studentCardContainer}>
              {displayStudent}
            </View>
          </ScrollView>
          <PrimaryButton onPress={handleSubmit} title="SUBMIT"/>
          <SuccessModal visible={modalVisible} hide={handleHideSuccessModal} navigation={navigation}/>
        </Animatable.View>
      </LinearGradient>
    );
  };
  
  export default AttendenceScreen;
  
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
  