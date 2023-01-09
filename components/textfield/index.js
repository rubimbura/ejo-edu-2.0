import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons'


const TextField = ({label, isPassword, showPassword, toggleRevealPassword}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.inputTitle}>{label}</Text>
            <View style={styles.inputFieldCtn}>
                <TextInput style={styles.input} secureTextEntry={showPassword ? true : false}/>
                {isPassword && 
                    <TouchableOpacity onPress={toggleRevealPassword}>
                        {!showPassword ? <Feather name="eye-off" size={20} color="#C6CBD4" /> : 
                        <Feather name="eye" size={20} color="#C6CBD4" />}
                    </TouchableOpacity> 
                }
            </View>
        </View>
    )
}

export default TextField


const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 1,
        borderColor:'#E1E3E8'
    },
    inputTitle:{
        color: '#C738D8',
        fontSize: 12,
        lineHeight: 15,
        fontFamily: 'sansRegular'
    },
    input:{
        paddingTop: 5,
        paddingBottom: 5,
        color: '#323643',
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'sansMedium',
        width: '90%'
    },
    inputFieldCtn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})