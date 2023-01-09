import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';
import teacher_icon from '../../assets/images/teacher-icon.png'
import next_icon from '../../assets/images/next-icon.png'


const Parents = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.splashTitle}>Teachers</Text>
            <Text style={styles.splashSubTitle}>Parents and Teachers works Together for the child’s benifit</Text>
            <Image source={teacher_icon} style={styles.imageIcon}/>
            <TouchableOpacity style={styles.nextBtn} onPress={()=> navigation.navigate('studentSplash')}>
                <Image source={next_icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default Parents



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#D4F5FF',
        padding: 42
    },
    imageIcon:{
        marginTop: 60,
    },
    splashTitle:{
        marginTop: 60,
        color: 'black',
        fontSize: 48,
        lineHeight: 65,
        fontFamily: 'sansBold'
    },
    splashSubTitle:{
        color: '#000',
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'notoRegular'
    },
    nextBtn:{
        position: 'absolute',
        bottom: 30,
        display: 'flex',
        alignSelf: 'center',
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: 'rgba(64, 14, 95, 0.91)',
        alignItems: 'center',
        justifyContent: 'center'
    }
})