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
  import ModuleHeader from "../../components/moduleHeader"
  import ListItemCard from "../../components/cards/ListItemCard";
  import { IndisciplineAndRudeness, ResponsibilityAndCleanliness } from './Types'
  


  const DisciplineStep2Screen = ({navigation, route}) => {

    const {title, postive} = route.params

    const handleTypePressed = () => {
        navigation.navigate('InfractionScreen', {postive})
    }


    var displTypes = (postive ? ResponsibilityAndCleanliness: IndisciplineAndRudeness)
    .map( (el, id) => {
        return(
         <ListItemCard type={el.type} onPress={handleTypePressed} key={id} isRed={ postive? true : false}/>
        )
    })
  
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
            <Text style={[styles.displineTypeheader]}>{title}</Text>
          </View>
          <ScrollView>
            {displTypes}
          </ScrollView>
        </Animatable.View>
      </LinearGradient>
    );
  };
  
  export default DisciplineStep2Screen;
  
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
        fontSize: 22,
        lineHeight: 27,
        fontFamily: 'sansMedium',
        color: '#0B393C'
    },
  });
  