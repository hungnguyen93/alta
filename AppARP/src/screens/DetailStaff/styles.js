import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF'
    },
    header: {
        height: height(12),
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtName: {
        fontSize: totalSize(3.5),
        fontWeight: 'bold'
    },
    viewPhone_Email: {
        height: height(15),
        backgroundColor: 'white',

    },
    viewPhone: {
        flex: 1,
        marginHorizontal: 18,
        borderBottomWidth: 1.5,
        borderBottomColor: '#EFEFEF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewEmail: {
        flex: 1,
        marginHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    txtPhone_Email: {
        fontSize: totalSize(2.2),
        color: '#ff7a03'
    },
    icStyle: {
        height: height(5),
        width: width(9),
    }, 
    body:{
        flex:1,
        marginTop:height(3),
        marginBottom:height(10),
        backgroundColor:'white'
    },
    viewDetail:{
        flex:1,
        marginHorizontal: 18,
        borderBottomWidth: 1.5,
        borderBottomColor: '#EFEFEF',
        justifyContent: 'space-around',
    },
    txtTop:{
        fontSize:totalSize(1.5),
        color:'#888888'
    },
    txtBottom:{
        fontSize:totalSize(2.3),
    },
    header:{
        height:height(11),
       
        justifyContent:'center',
        alignItems:'center'
    }
});
export default styles;