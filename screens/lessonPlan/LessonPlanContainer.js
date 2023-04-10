import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
  } from "react-native";
  
  const LessonPlanContainer = ({name, status, color}) => {

    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.dateText}>2023-01-23</Text>
          <View style={styles.statusCtn}>
             <View style={[styles.statusIcon, {backgroundColor: color}]}></View>
             <Text style={styles.dateText}>{status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  export default LessonPlanContainer;
  
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 16,
      marginTop: 19,
      backgroundColor: '#fff',
      borderRadius: 8
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title:{
      color: '#2C2C2C',
      fontSize: 16,
      fontWeight: '400'
    },
    dateText:{
        color: '#7C7C7C',
        fontSize: 12
    },
    statusCtn:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusIcon:{
      width: 7,
      height:7,
      borderRadius: 3.5,
      marginRight: 6
    },

  });
  