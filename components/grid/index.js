import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import Color from "../../constants/Colors";
import lesson_icon from "../../assets/images/lesson.png";
import attandance_icon from "../../assets/images/attendance.png";
import participation_icon from "../../assets/images/participation.png";
import displine_icon from "../../assets/images/displine.png";
import assignment_icon from "../../assets/images/assignment.png";
import marks_icon from "../../assets/images/marks.png";
import leave_icon from "../../assets/images/leave.png";
import dashboard from "../../assets/images/dashboard.png";
import background_icon1 from "../../assets/images/background1.png";
import background_icon2 from "../../assets/images/background2.png";
import background_icon3 from "../../assets/images/background3.png";
import background_icon4 from "../../assets/images/background4.png";
import background_icon5 from "../../assets/images/background5.png";
import background_icon6 from "../../assets/images/background6.png";
import background_icon7 from "../../assets/images/background7.png";
import background_icon8 from "../../assets/images/background8.png";


const Grid = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.scroll_view}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AttandanceScreen")}
          style={styles.container}
        >
          <ImageBackground
            source={background_icon2}
            style={[styles.sub_container]}
          >
            <Image source={attandance_icon} />
            <Text style={styles.title}>Attendance</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("DisciplineScreen")}
          style={styles.container}
        >
          <ImageBackground
            source={background_icon4}
            style={[styles.sub_container]}
          >
            <Image source={displine_icon} />
            <Text style={styles.title}>Discipline</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ParticipationScreen")}
          style={styles.container}
        >
          <ImageBackground
            source={background_icon3}
            style={[styles.sub_container]}
          >
            <Image source={participation_icon} />
            <Text style={styles.title}>Participation</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("LessonPlanScreen")}
          style={[styles.container]}
        >
          <ImageBackground
            style={[styles.sub_container]}
            source={background_icon1}
          >
            <Image source={lesson_icon} style={{ alignSelf: "center" }} />
            <Text style={styles.title}>Lesson Plan</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => navigation.navigate("AssignmentScreen")}
          style={[styles.container, {opacity: 0.5}]}
        >
          <ImageBackground
            source={background_icon5}
            style={[styles.sub_container]}
          >
            <Image source={assignment_icon} />
            <Text style={styles.title}>Assignment</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => navigation.navigate("StudentMarksScreen")}
          style={[styles.container, {opacity: 0.5}]}
        >
          <ImageBackground
            style={[styles.sub_container]}
            source={background_icon6}
          >
            <Image source={marks_icon} />
            <Text style={styles.title}>Student Marks</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => navigation.navigate("LeaveHistoryScreen")}
          style={[styles.container, {opacity: 0.5}]}
        >
          <ImageBackground
            style={[styles.sub_container]}
            source={background_icon7}
          >
            <Image source={leave_icon} />
            <Text style={styles.title}>Leave History</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => navigation.navigate("DashboardScreen")}
          style={[styles.container, {opacity: 0.5}]}
        >
          <ImageBackground
            source={background_icon8}
            style={[styles.sub_container]}
          >
            <Image source={dashboard} />
            <Text style={styles.title}>Dashboard</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sub_container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  container: {
    width: 120,
    height: 120,
    borderRadius: 5,
    margin: 10,
    // borderColor: Colors.primary,
    // borderWidth: 1
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontFamily: "sansMedium",
    color: Color.text,
    flexWrap: "nowrap",
    textAlign: "center",
  },
  scroll_view: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 30,
  },
});

export default Grid;
