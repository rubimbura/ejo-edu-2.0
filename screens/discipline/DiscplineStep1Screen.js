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
  import ListItemCard from "../../components/cards/ListItemCard";
  import {  DisciplineTypes } from './Types'
  


  const DisciplineStep1Screen = ({navigation}) => {



    const handleTypePressed = (type, id) => {
        navigation.navigate('DiscplineStep2Screen', {title:type, postive: id === 0 ? true: false})
    }


    var displTypes = DisciplineTypes.map( (el, id) => {
        return(
         <ListItemCard type={el.type} onPress={() => handleTypePressed(el.type, id)} key={id} isRed={id === 0 ? true : false}/>
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
          <View style={styles.contentCtn}>
            {displTypes}
          </View>
        </Animatable.View>
      </LinearGradient>
    );
  };
  
  export default DisciplineStep1Screen;
  
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
    contentCtn:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
  });
  