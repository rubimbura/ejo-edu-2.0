import {
    StyleSheet,
    View,
    Text,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { StatusBar } from "expo-status-bar";
  import * as Animatable from "react-native-animatable";
  import Grid from "../../components/grid"
  import { useGetPokemonByNameQuery } from '../../service'
  
  const HomeScreen = ({navigation}) => {

    // const {data} = useGetPokemonByNameQuery('bulbasaur')
  
  
    return (
      <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
        <StatusBar style="light" />
        <View style={styles.headerCtn}>
            <View style={styles.welcomeCtn}>
                <Text style={styles.welcomeText}>Welcome</Text>
                <View style={styles.yearCtn}>
                    <Text style={styles.yearText}>2022-2023</Text>
                </View>
            </View>
            <View style={styles.teacherCtn}>
                <Text style={styles.teacherName}>Tr. Sebaganwa Alphonse</Text>
            </View>
        </View>
        <Animatable.View
          style={styles.bodyCtn}
          animation="fadeInUpBig"
          easing="ease">
        <Grid navigation={navigation}/>
        </Animatable.View>
      </LinearGradient>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerCtn: {
      marginTop: 30,
      flex: 2,
      paddingLeft: 20,
      paddingRight:20
    },
    bodyCtn: {
      flex: 5,
      backgroundColor: "#fff",
      borderTopStartRadius: 40,
      borderTopEndRadius: 40,
      paddingHorizontal: 30,
    },
    welcomeCtn:{
        marginTop: 20,
    },
    welcomeText:{
        color: '#fff',
        fontSize: 30,
        fontFamily:'sansMedium',
        lineHeight:48
    },
    yearCtn:{
        backgroundColor: '#fff',
        marginTop: 5,
        borderRadius:50,
        padding: 5,
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    yearText:{
        color: '#7C32FF',
        fontSize: 14,
        fontFamily: 'sansRegular'
    },
    teacherCtn:{
        display: 'flex',
        alignSelf: 'flex-end',
        backgroundColor:'#F2F4FD',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginTop: 10
    },
    teacherName:{
      fontSize: 18,
      fontFamily: 'sansRegular',
      color: 'black'
    }
  });
  