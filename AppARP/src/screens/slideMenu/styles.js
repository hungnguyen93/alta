import { StyleSheet } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
// 190*190
const icUserWidth = width(100) - width(80);
const icUserHeight = (icUserWidth / 190) * 190; // chia chieu cao * chieu rong

const icWidth = width(100) - width(94);

const icHomeHeight = (icWidth / 55) * 61;
const icGridHeight = icWidth;
const icBoxHeight = (icWidth / 56) * 61;
const icHelp = (icWidth / 62) * 61;
const icLogoutHeight = icWidth;
const icUsersHeight = (icWidth / 73) * 61

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: height(20),
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#efefef',
    },
    headerLeft: {
        width: width(28),
        justifyContent: 'center',
        alignItems: 'center'
    },
    icUser: {
        height: icUserHeight,
        width: icUserWidth
    },
    headerRight: {
        flex: 1,
        justifyContent: 'center'
    },
    txtName: {
        color: '#ff7a03',
        fontSize: totalSize(3)
    },
    txtMail: {
        color: '#888888'
    },
    body: {
        flex: 1
    },
    viewGeneral: {
        height: height(8),
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewIcon: {
        width: width(15),
        alignItems: 'center'
    },
    ichome: {
        width: icWidth,
        height: icHomeHeight,
    },
    txtGeneral: {
        color: '#ff7a03',
        fontSize: totalSize(2.5)
    },
    icbox: {
        height: icBoxHeight,
        width: icWidth
    },
    childHR:{
        height:height(24),
        marginLeft:width(10)
    },
    icgrid: {
        height: icGridHeight,
        width: icWidth
    },
    icusers:{
        height:icUsersHeight,
        width:icWidth
    },
    ichelp: {
        height: icHelp,
        width: icWidth
    },
    iclogout: {
        height: icLogoutHeight,
        width: icWidth
    },
    footer:{
        width:width(76),
        alignItems:'center',

    },
    txtVersion:{
        color:'#888888',
        fontSize:totalSize(2.5),
        paddingBottom:height(3)
    }
});
export default styles;