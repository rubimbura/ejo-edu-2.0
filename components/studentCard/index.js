import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import student_avatar from "../../assets/images/student-avatar.png";
import passport_pic from '../../assets/images/student-icon2.jpeg'
import passport_pic_male from '../../assets/images/student-icon.jpeg'


const StudentCard = ({onPress, handleLongPress, data, isChecked}) => {
  return (
    <>
      <TouchableOpacity style={[styles.container, {
        shadowColor: 'black',
        borderColor: !isChecked  ? '#28D40C' : '#FC0707' 
      }]} onPress={onPress} onLongPress={handleLongPress}>
        <Image source={passport_pic} style={styles.icon} />
        <Text style={styles.name}>{data?.firstName} {data?.lastName}</Text>
        <Text style={styles.subName}>00XYZ</Text>
      </TouchableOpacity>
    </>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    width: "30%",
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: "white",
    margin: 5,
    backgroundColor: '#F6F2FC'
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  name: {
    fontSize: 12,
    fontFamily: "sansBold",
    textAlign: "center",
    marginTop: 5
  },
  subName: {
    fontSize: 12,
    fontFamily: "sansLight",
    color: "#6C6565",
    textAlign: "center",
  },
});
