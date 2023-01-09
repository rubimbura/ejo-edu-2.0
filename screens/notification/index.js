import { Text, View,StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"




const NotificationScreen = () => {
    return(
        <View style={styles.container}>
          <StatusBar style="dark" />
          <Text>Notifications page</Text>
        </View>
    )
}


export default NotificationScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})