import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';
import parents_icon from '../../assets/images/parents-icon.png'
import next_icon from '../../assets/images/next-icon.png'


const Parents = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.splashTitle}>Parents</Text>
            <Text style={styles.splashSubTitle}>Parents and Teachers works Together for the child’s benifit</Text>
            <Image source={parents_icon}/>
            <TouchableOpacity style={styles.nextBtn} onPress={()=> navigation.navigate('teacherSplash')}>
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
        backgroundColor: '#CFE999',
        padding: 42
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