import { StyleSheet } from 'react-native';
import { width, height} from 'react-native-dimension';

const icBackWidth = width(100) - width(96);
const icBackHeight = (icBackWidth / 31) * 55;

const icSentEmail = width(100) - width(50);

const forgotPassStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    header:{
        flex:2,
        justifyContent:'space-between',
    },
    containerBody:{
        flex:3,
        marginTop:height(3),
    },
    icBackStyle:{
        height:icBackHeight,
        width:icBackWidth,
    },
    textStyle:{
        color:'#FF6222',
        fontSize:height(4),
    },
    textView:{
        alignItems:'center'
    },
    txtStyle: {
        color: '#FF550F',
        fontSize: 20,
        marginHorizontal: 30
    },
    textSentMail: {
        color: '#FF550F',
        fontSize: 24,
        fontWeight: 'bold'
    },
    icsentEmail:{
        width:icSentEmail,
        height:icSentEmail
    }
});
export default forgotPassStyle;