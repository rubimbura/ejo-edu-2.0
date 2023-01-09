import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TeacherSplashScreen from '../screens/splash/Teachers'
import ParentSplashScreen from '../screens/splash/Parents'
import StudentSplashScreen from '../screens/splash/Students'
import LoginScreen from '../screens/auth/Login'



const Stack = createNativeStackNavigator();


const RootStackScreen = () =>{
    return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen name="parentSplash" component={ParentSplashScreen}/>
        <Stack.Screen name="teacherSplash" component={TeacherSplashScreen} />
        <Stack.Screen name="studentSplash" component={StudentSplashScreen} />
      </Stack.Navigator>
    )
}

export default RootStackScreen