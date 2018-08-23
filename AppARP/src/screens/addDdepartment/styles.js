import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

const icWidth = width(100) - width(96);
const icDownHeight = (icWidth / 44) * 24;

const icBtnWidth = width(100) - width(60);
const icBtnHeight = (icBtnWidth / 483 ) * 141
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerTop: {
        height: height(10),
        backgroundColor: '#ff7a03',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 8
    },
    icBackStyle: {
        height: height(3),
        width: width(4)
    },
    txtTitle: {
        color: 'white',
        fontSize: totalSize(2),
        fontWeight: 'bold'

    },
    headerTopRight: {
        height: height(3),
        width: width(4)
    },
    body: {
        flex: 1,
    },
    viewDependentRoom: {
        height: height(8),
        marginHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        justifyContent: 'space-around',
    },
    viewTop: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    txtTop: {
        fontSize: totalSize(1.5),
        color: '#888888'
    },
    viewBottom: {
        flex: 1,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    txtBottom: {
        fontSize: totalSize(2.3),
        color: '#ff7a03'
    },
    viewDescription:{
        height: height(20),
        marginHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
    },
    headerDescription:{
        flex:1,
        paddingTop:height(1)
        
    },
    bodyDescription:{
        flex:1
    },
    icdown:{
        height: icDownHeight,
        width:icWidth
    },
    footer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:width(4)
    },
    txtRefresh:{
        color:'white',
        fontWeight:'bold',
        fontSize:totalSize(2.3)
    },
    icbtn:{
        height:icBtnHeight,
        width:icBtnWidth,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default styles;