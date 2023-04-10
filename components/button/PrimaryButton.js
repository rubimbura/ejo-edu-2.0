import { Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import right_arrow from '../../assets/images/right-arrow-icon.png'




const PrimaryButton = ({onPress, title, hasArrow, styling}) => {
    return(
        <LinearGradient style={[styling, styles.container]} colors={['#C738D8', '#7C32FF']} start={[1, 0]} end={[0, 1]}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text></Text>
                <Text style={styles.text}>{title}</Text>
                {hasArrow ? <Image source={right_arrow}/> : <Text></Text>}
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default PrimaryButton


const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignSelf: 'center',
        backgroundColor: 'red',
        width: '100%',
        borderRadius: 8,
        marginTop: 30
    },
    button:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        flexDirection: 'row',
        paddingRight: 18
    },
    text:{
        color: '#fff',
        fontSize: 16,
        lineHeight: 23,
        fontFamily: 'sansMedium'
    }
})