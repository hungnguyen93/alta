import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: height(10),
        justifyContent: 'center'
    },
    viewSearch:{
        height:height(5),
        flexDirection:'row',
        backgroundColor:'#EFEFEF',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:height(2.5),
        marginHorizontal:width(4),
        paddingHorizontal:width(5)
    },
    inputStyle:{
        width:width(76),
    },
    icSearchStyle:{
        height:height(3),
        width:width(5.4),
    },
    body:{
        flex:1,
    },
    viewTitleContact:{
        height:height(4),
        backgroundColor:'#EFEFEF',
        justifyContent:'center',
        marginRight:width(4)
    },
    txtTitleContact:{
        color: '#ff7a03',
        fontSize:totalSize(2.5),
        fontWeight:'bold',
        paddingHorizontal:width(4)
    },
    viewContactName:{
        height:height(7.5),
        justifyContent:'center',
        marginHorizontal:width(4),
        borderBottomWidth:1,
        borderBottomColor:'#EFEFEF'
        
    },
    txtName:{
        fontSize:totalSize(2.5),
    }
});
export default styles;