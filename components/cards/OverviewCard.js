import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../../constants/Colors"
import moment from 'moment';






const OverviewCard = ({handleCommentsPressed, title, subTitle, description}) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerCtn}>
                <View style={{width: '50%'}}>
                 <Text style={styles.title}>{ title ||'Infraction'}</Text>
                </View>
                <View>
                    <Text style={styles.dateText}>{moment().format("MMM Do YY")}</Text>
                    <Text style={styles.dateText}>{moment().format('LT')}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.headerText}>{subTitle }</Text>
                <Text styles={styles.subHeaderText}>{description}</Text>
            </View>
            <TouchableOpacity style={styles.commentCtn} onPress={handleCommentsPressed}>
                <Text style={styles.subHeaderText}>2 Comments</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OverviewCard


const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#7C32FF',
        padding:20,
        display: 'flex',
        alignSelf: 'center',
        marginVertical: 20
    },
    headerCtn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:{
        color: Colors.primary,
        textDecorationColor: Colors.primary,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        fontSize: 18,
        lineHeight: 25,
        fontFamily: 'sansMedium'
        
    },
    dateText:{
        color: '#000',
        fontSize: 16,
        lineHeight:23,
        fontFamily: 'sansMedium',
        textAlign: 'right'
    },
    headerText:{
        color: '#000',
        fontSize: 16,
        fontFamily: 'sansBold',
        lineHeight: 17
    },
    subHeaderText:{
        color: '#000',
        fontSize: 16,
        fontFamily: 'sansRegular',
        lineHeight: 17,    
    },
    commentCtn:{
        marginTop: 20
    }
})