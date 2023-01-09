


import {
    StyleSheet,
    View,
    Text,
    ScrollView
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { StatusBar } from "expo-status-bar";
  import * as Animatable from "react-native-animatable";
  import PrimaryButton from "../../components/button/PrimaryButton";
  import ModuleHeader from "../../components/moduleHeader"
  import OverviewCard from "../../components/cards/OverviewCard";
  


  const DisciplineOverviewScreen = ({navigation}) => {






    const handleCommentsPressed = () => {
      navigation.navigate('DisciplineCommnetsScreen')
  }

  
    return (
      <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
        <StatusBar style="light" />
        <View style={styles.headerIcon}>
            <ModuleHeader navigation={navigation} moduleTitle="Discipline" level="level 1 A" name="Uwineza Claudine"/>
        </View>
        <Animatable.View
          style={styles.bodyCtn}
          animation="fadeInUpBig"
          easing="ease">
          <View style={styles.bodyHeader}>
            <Text style={styles.displineTypeheader}></Text>
          </View>
          <ScrollView>
            <OverviewCard handleCommentsPressed={handleCommentsPressed}/>
            <OverviewCard/>
          <PrimaryButton title="SUBMIT"/>

          </ScrollView>
        </Animatable.View>
      </LinearGradient>
    );
  };
  
  export default DisciplineOverviewScreen;
  
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
    displineTypeheader:{
        color: '#E65151',
        fontSize: 22,
        lineHeight: 27,
        fontFamily: 'sansMedium'
    },
  });
  