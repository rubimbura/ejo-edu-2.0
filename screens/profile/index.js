import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text>Profile page</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
