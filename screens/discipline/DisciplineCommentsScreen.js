import {
    StyleSheet,
    View,
    Text,
    ScrollView,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { StatusBar } from "expo-status-bar";
  import * as Animatable from "react-native-animatable";
  import PrimaryButton from "../../components/button/PrimaryButton";
  import ModuleHeader from "../../components/moduleHeader";
  import moment from "moment";
  import Color from "../../constants/Colors";
  import { TextInput, Divider } from "react-native-paper";
  
  const DisciplineCommnetsScreen = ({ navigation }) => {
    return (
      <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
        <StatusBar style="light" />
        <View style={styles.headerIcon}>
          <ModuleHeader
            navigation={navigation}
            moduleTitle="Discipline"
            level="Level 1 A"
            name="Uwineza Claudine"
          />
        </View>
        <Animatable.View
        style={styles.bodyCtn}
          animation="fadeInUpBig"
          easing="ease"
        >
          <View style={styles.bodyHeader}>
            <Text style={styles.displineTypeheader}>Comments</Text>
          </View>
          <ScrollView>
            <View style={styles.comment_ctn}>
              <View style={styles.avatar_ctn}>
                <Text style={styles.avatar_text}>M N</Text>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "75%",
                  }}
                >
                  <View>
                    <Text style={[styles.author, { marginTop: 15 }]}>
                      Mugisha Nathan
                    </Text>
                    <Text style={styles.date}>Head Discipline</Text>
                  </View>
                  <View>
                    <Text style={styles.date}>
                      {moment().format("MMM Do YY")}
                    </Text>
                  </View>
                </View>
                <View style={{ width: "90%" }}>
                  <Text style={styles.comment}>She is a good student</Text>
                </View>
              </View>
            </View>
            <Divider />
            <View style={{ marginTop: 10, padding: 20 }}>
              <TextInput
                label="Add your comment"
                multiline
                mode="outlined"
                style={{ paddingBottom: 30, backgroundColor: 'white'}}
                theme={{ colors: { primary: Color.primary } }}
              //   onChangeText={(text) => handleCommnet(text)}
              />
            </View>
            <PrimaryButton title="SUBMIT" styling={{ marginTop: 30 }} />
          </ScrollView>
        </Animatable.View>
      </LinearGradient>
    );
  };
  
  export default DisciplineCommnetsScreen;
  
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
      marginTop: 7,
      marginBottom: 20,
      gap: 20,
    },
    displineTypeheader: {
      color: "#E65151",
      fontSize: 22,
      lineHeight: 27,
      fontFamily: "sansMedium",
    },
  
    textInput: {
      width: "45%",
    },
    content_ctn: {
      width: "90%",
      alignSelf: "center",
    },
    name: {
      fontFamily: "sansMedium",
      fontSize: 25,
      color: Color.primary,
      paddingVertical: 10,
      textTransform: "capitalize",
      textAlign: "center",
    },
    comment_ctn: {
      paddingVertical: 10,
      flexDirection: "row",
      paddingHorizontal: 20,
    },
    author: {
      fontFamily: "sansMedium",
      fontSize: 12,
      color: Color.primary,
      paddingVertical: 1,
      textTransform: "capitalize",
    },
    avatar_ctn: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "#F2C94C",
      marginRight: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
    comment: {
      fontSize: 16,
      fontFamily: "sansRegular",
      color: Color.text,
      marginVertical: 10,
    },
    date: {
      fontSize: 10,
      fontFamily: "sansRegular",
      color: Color.text,
      fontStyle: "italic",
    },
    avatar_text: {
      fontSize: 18,
      fontFamily: "sansMedium",
      color: "#fff",
      textTransform: "capitalize",
    },
  });
  