import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import back_arrow from "../../assets/images/back-arrow.png";
import moment from "moment";

const ModuleHeader = ({ navigation, moduleTitle, level, subject, name }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.firstRow} onPress={() => navigation.goBack()}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.icon}>
            <Image source={back_arrow} />
          </TouchableOpacity>
          <View style={styles.ModuleCtn}>
            <Text style={styles.moduleText}>{moduleTitle}</Text>
            <View style={styles.subModuleCtn}>
              <Text style={styles.subModuleText}>S4 MPC</Text>
              <Text style={styles.subject}>{subject}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.currentDate}>{moment().format("MMM Do YY")}</Text>
          <Text style={styles.currentHour}>{moment().format("LT")}</Text>
        </View>
      </View>
      <View style={styles.moduleName}>
        <Text style={[styles.moduleText, {fontSize:24 }]}>{name}</Text>
      </View>
    </View>
  );
};

export default ModuleHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
  },
  ModuleCtn: {
    marginLeft: 17,
    width: "70%",
  },
  moduleText: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 48,
    fontFamily: "sansMedium",
  },
  subModuleCtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subModuleText: {
    color: "white",
    fontSize: 16,
    fontFamily: "sansMedium",
  },
  subject: {
    color: "white",
    fontSize: 14,
    fontFamily: "sansMedium",
  },
  currentDate: {
    color: "white",
    fontSize: 16,
    fontFamily: "sansRegular",
    lineHeight: 23,
    display: "flex",
    alignSelf: "flex-end",
  },
  currentHour: {
    color: "white",
    fontSize: 16,
    fontFamily: "sansRegular",
    lineHeight: 23,
    display: "flex",
    alignSelf: "flex-end",
  },
  icon: {
    marginTop: 15,
  },
  moduleName:{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
  },
  studentName:{

  }
});
