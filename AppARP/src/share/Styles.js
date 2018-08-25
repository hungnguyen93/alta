import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

const icBackWidth = width(100) - width(95);
const icBackHeight = (icBackWidth / 31) * 55;

const styles = StyleSheet.create({
    header:{
        height:height(10),
        backgroundColor:'#ff7a03',
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        padding:8
    },
    icBackStyle:{
        height:icBackWidth,
        width:icBackHeight
    },
    txtTitle:{
        color:'white',
        fontSize:totalSize(2.5),
        fontWeight:'bold'

    },
    headerRight:{
        height:height(3),
        width:width(4)
    }
});
export default styles;