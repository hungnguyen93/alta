import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension'

const icCloseWidth = width(100) - width(95);

const icIscheckHeight = (icCloseWidth / 55) * 40;

const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor:'rgba(0, 0, 1, 0.5)',
        position: 'absolute',
        width:'100%',
        height:'100%'
    },
    containerBody: {
        height: height(50),
        borderRadius:5,
        marginHorizontal:width(2),
        backgroundColor:'white'
    },
    header:{
        flexDirection:'row',
        height:height(8),
        backgroundColor:'#ff7a03',
        borderTopStartRadius:5,
        borderTopEndRadius:5,
        alignItems:'center',
        justifyContent:'space-around',
        paddingRight:width(1.5)

    },
    txtTitle:{
        color:'white',
        fontSize:totalSize(3)
    },
    icclose:{
        height:icCloseWidth,
        width:icCloseWidth
    },
    body:{
        flex:1
    },
    viewtxtDepartment:{
        height:height(7),
        marginTop:2,
        flexDirection:'row',
        alignItems:'center',
        borderTopWidth:1,
        borderTopColor:'#EFEFEF',
        justifyContent:'space-between',
        paddingHorizontal:width(5.5)
    },
    txtDepartment:{
        fontSize:totalSize(2.5),
        color:'#606060'

    },
    icisCheck:{
        height:icIscheckHeight,
        width:icCloseWidth
    }
});
export default Styles;