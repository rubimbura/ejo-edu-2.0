import { Text, View, StyleSheet, TouchableOpacity, BackHandler } from "react-native"
import Colors from "../../constants/Colors"




const ListItemCard = ({type, onPress, key, isRed, isSelected}) => {

    return(
        <TouchableOpacity style={[styles.container, {borderColor: isRed ?  '#28D40C' : '#FC0707', backgroundColor: isSelected ?  '#C738D8' : ''}]} onPress={onPress} key={key}>
            <Text style={styles.type}>
                {type}
            </Text>
        </TouchableOpacity>
    )
}

export default ListItemCard

const styles = StyleSheet.create({
    container: {
        width: '90%',
        shadowColor: Colors.primary,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
        padding: 20,
        borderWidth: 1,
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
        backgroundColor: 'white',
        marginBottom: 20,
        display: 'flex',
        alignSelf: 'center'
  },
  type:{
    color: '#0B393C',
    fontSize: 14,
    lineHeight: 26,
    fontFamily: 'sansMedium'
  }
})