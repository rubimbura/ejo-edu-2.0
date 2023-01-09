import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import login_icon from "../../assets/images/login-icon.png";
import { StatusBar } from "expo-status-bar";
import TextField from "../../components/textfield";
import * as Animatable from "react-native-animatable";
import PrimaryButton from "../../components/button/PrimaryButton";
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginReducer } from '../../slices/auth'

const Login = ({navigation}) => {

  const [showPassword, setShowPassword] = useState(true)
  const dispatch = useDispatch()

  const toggleRevealPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = () => {
    // navigation.navigate('timetableScreen')
    dispatch(loginReducer(true))
  }

  return (
    <LinearGradient style={styles.container} colors={["#7C32FF", "#C738D8"]}>
      <StatusBar style="light" />
      <View style={styles.headerIcon}>
        <Image source={login_icon} />
      </View>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""} style={{flex: 5}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animatable.View
        style={styles.bodyCtn}
        animation="fadeInUpBig"
        easing="ease">
            <Text style={styles.welcomeText}>Welcome</Text>
            <View style={styles.usernameCtn}>
              <TextField label="Mobile Number/Email"/>
            </View>
            <View style={styles.passwordCtn}>
              <TextField label="Password" isPassword={true} showPassword={showPassword} toggleRevealPassword={toggleRevealPassword}/>
            </View>
            <TouchableOpacity style={styles.resetPasswordCtn}>
              <Text style={styles.resetText}>Reset Password</Text>
            </TouchableOpacity>
            <PrimaryButton onPress={handleLogin} title="SIGNIN" hasArrow={true}/>
      </Animatable.View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerIcon: {
    marginTop: 40,
    flex: 2,
  },
  bodyCtn: {
    flex: 5,
    backgroundColor: "#fff",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingHorizontal: 30,
  },
  welcomeText: {
    marginTop: 65,
    color: "#000",
    fontSize: 48,
    lineHeight: 48,
    fontFamily: "sansBold",
    textAlign: "center",
  },
  usernameCtn: {
    paddingTop: 42,
    marginBottom: 35,
  },
  passwordCtn: {
    marginBottom: 50,
  },
  resetPasswordCtn: {
    paddingBottom: 25,
    display: "flex",
    alignSelf: "center",
  },
  resetText: {
    color: "#313131",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "sansRegular",
  },
});
