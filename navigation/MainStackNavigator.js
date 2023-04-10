import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";
import NotificationScreen from "../screens/notification";
import TimetableScreen from "../screens/timetable";


import HomeTimetableScreen from '../screens/timetable/TimetableHomeScreen';

import AttendanceScreen from '../screens/attendance';
import AttendanceOverviewScreen from '../screens/attendance/attendanceOverviewScreen';
import AttendanceCommentsScreen from '../screens/attendance/attendenceCommentsScreen';


import DisciplineScreen from '../screens/discipline';
import DiscplineStep2Screen from '../screens/discipline/DiscplineStep2Screen';
import InfractionScreen from '../screens/discipline/DisciplineStep3Screen';
import DisciplineOverviewScreen from '../screens/discipline/DisciplineOverviewScreen';
import DisciplineStep1Screen from '../screens/discipline/DiscplineStep1Screen';
import DisciplineCommnetsScreen from '../screens/discipline/DisciplineCommentsScreen';


import ParticipationScreen from '../screens/participation';
import AbilityAssesmentScreen from '../screens/participation/AbilityAssesmentScreen';
import ChooseAssesmentScreen from '../screens/participation/ChooseAssesmentScreen';
import ParticipationOverviewScreen from '../screens/participation/ParticipationOverviewScreen';
import ParticipationCommnetsScreen from '../screens/participation/ParticipationCommentScreen';


import LessonPlanScreen from '../screens/lessonPlan';
import AddLessonPlanName from '../screens/lessonPlan/AddLessonPlanName';
import CornfirmLessnPlanName from '../screens/lessonPlan/ConfirmLessonPlanName';
import LessonPlanKnowledgeScreen from '../screens/lessonPlan/LessonPlanKnowledgeScreen';
import LessonPlanConfirmKnowledge from '../screens/lessonPlan/LessonPlanConfirmKnowledge';
import LessonPlanSkillsScreen from '../screens/lessonPlan/LessonPlanSkillsScreen';
import LessonPlanConfirmAttitudeAndValues from '../screens/lessonPlan/LessonPlanConfirmAttitudeAndValues';
import LessonPlanAttitudeAndValues from '../screens/lessonPlan/LessonPlanAttitudeAndValues';
import LessonPlanConfirmSkills from '../screens/lessonPlan/LessonPlanConfirmSkills';
import LessonPlanIntroduction from '../screens/lessonPlan/LessonPlanIntroduction';
import LessonPlanDevelopemnt from '../screens/lessonPlan/LessonPlanDevelopment';
import LessonPlanConculusion from '../screens/lessonPlan/LessonPlanConculusion';
import LessonPlanOverview from '../screens/lessonPlan/LessonPlanOverview';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


// const DisciplineStack = () => {
//   <Stack.Navigator screenOptions={{headerShown: false}}>
//     <Stack.Screen name='DisciplineScreen' component={DisciplineScreen}/>
//   </Stack.Navigator>
// }


const HomeStackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>


      <Stack.Screen name='AttandanceScreen' component={AttendanceScreen}/>
      <Stack.Screen name='AttandanceOverviewScreen' component={AttendanceOverviewScreen}/>
      <Stack.Screen name='AttandanceCommentsScreen' component={AttendanceCommentsScreen}/>

      <Stack.Screen name='DisciplineScreen' component={DisciplineScreen}/>
      <Stack.Screen name='DisciplineStep1Screen' component={DisciplineStep1Screen}/>
      <Stack.Screen name='DiscplineStep2Screen' component={DiscplineStep2Screen}/>
      <Stack.Screen name='InfractionScreen' component={InfractionScreen}/>
      <Stack.Screen name='DisciplineOverviewScreen' component={DisciplineOverviewScreen}/>
      <Stack.Screen name='DisciplineCommnetsScreen' component={DisciplineCommnetsScreen}/>

      <Stack.Screen name='ParticipationScreen' component={ParticipationScreen}/>
      <Stack.Screen name='AbilityAssesmentScreen' component={AbilityAssesmentScreen}/>
      <Stack.Screen name='ChooseAssesmentScreen' component={ChooseAssesmentScreen}/>
      <Stack.Screen name='ParticipationOverviewScreen' component={ParticipationOverviewScreen}/>
      <Stack.Screen name="ParticipationCommnetsScreen" component={ParticipationCommnetsScreen}/>

      <Stack.Screen name='LessonPlanScreen' component={LessonPlanScreen}/>
      <Stack.Screen name='AddLessonPlanName' component={AddLessonPlanName}/>
      <Stack.Screen name='ConfirmLessonPlanName' component={CornfirmLessnPlanName}/>
      <Stack.Screen name='LessonPlanKnowledge' component={LessonPlanKnowledgeScreen}/>
      <Stack.Screen name='ConfirmKnowledge' component={LessonPlanConfirmKnowledge}/>
      <Stack.Screen name='lessonPlanSkills' component={LessonPlanSkillsScreen}/>
      <Stack.Screen name='ConfirmSkills' component={LessonPlanConfirmSkills}/>
      <Stack.Screen name='LessonPlanAttitudeAndValues' component={LessonPlanAttitudeAndValues}/>
      <Stack.Screen name='ConfirmAttitudeAndValues' component={LessonPlanConfirmAttitudeAndValues}/>
      <Stack.Screen name='lessonPlanIntroduction' component={LessonPlanIntroduction}/>
      <Stack.Screen name='lessonPlanDevelopemnt' component={LessonPlanDevelopemnt}/>
      <Stack.Screen name='lessonPlanConculusion' component={LessonPlanConculusion}/>
      <Stack.Screen name='lessonPlanOverview' component={LessonPlanOverview}/>

    </Stack.Navigator>
  )
}



const TimetableStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTimetable" component={HomeTimetableScreen}/>
    </Stack.Navigator>
  )
}


function BottomStackNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='dashboard'
      screenOptions={{headerShown: false}}
      >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: '#7C32FF',
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="home" size={24} color={focused ? '#7C32FF' : 'black'} />
          ),
        }}
      />
      <Tab.Screen name="Timetable" component={TimetableStack} 
      options={{
        tabBarLabel: "Timetable",
        tabBarActiveTintColor: '#7C32FF',
        tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="timetable" size={24} color={focused ? '#7C32FF' : 'black'} />
        ),
        
      }}/>
      <Tab.Screen name="Notification" component={NotificationScreen} 
      options={{
          tabBarActiveTintColor: '#7C32FF',
          tabBarLabel: "Notifications",
        tabBarIcon: ({ color, focused }) => (
            <Ionicons name="notifications-outline" size={24} color={focused ? '#7C32FF' : 'black'} />
        ),
        tabBarBadge: 2,
      }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
          tabBarActiveTintColor: '#7C32FF',
          tabBarLabel: "Profile",
        tabBarIcon: ({ color, focused }) => (
            <Ionicons name="person-outline" size={24} color={focused ? '#7C32FF' : 'black'} />
        ),
      }}/>
    </Tab.Navigator>
  );
}


function MainStackNavigator (){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="timetableScreen" component={TimetableScreen}/>
      <Stack.Screen name="homeTabs" component={BottomStackNavigator}/>
    </Stack.Navigator>
  )
}

export default MainStackNavigator;
