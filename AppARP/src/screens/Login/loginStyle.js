import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

const icLoginWidth = width(100) - width(10);
const icLoginHeight = (icLoginWidth / 1027) * 141;

const icUserWidth = width(100) - width(95);
const icUserHeight = (icUserWidth / 50) * 69;

const icLogoWidth = width(100) - width(25);
const icLogoHeight = (icLogoWidth / 750) * 528;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoStyle: {
        width: icLogoWidth,
        height: icLogoHeight
    },
    body: {
        flex: 2,
    },
    inputStyle: {
        width:width(80),
        paddingHorizontal: width(6),
        fontSize: totalSize(2),
    },
    icStyle: {
        height: icUserHeight,
        width: icUserWidth
    },
    viewLogo: {
        height: height(40),
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewUser: {
        flexDirection: 'row',
        height: height(7),
        alignItems: 'center',
        borderBottomWidth: height(0.1),
        borderBottomColor: '#FF6222',
        marginHorizontal: width(6),
        marginBottom: height(2)
    },
    textSignin: {
        fontSize: height(3),
        color: 'white'
    },
    iclogin: {
        height: icLoginHeight,
        width: icLoginWidth,
        justifyContent: 'center',
        alignItems: 'center'

    },
    flooter: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingBottom: height(2)
    },
    viewRemember: {
        height: height(5),
        width: width(40),
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: width(6),

    },
    checkStyle: {
        height: 26,
        width: 26,
        backgroundColor: 'white',
        borderRadius: 13,
        borderColor: '#FF550F',
        borderWidth: 1
    },
    textRemember: {
        color: '#FF550F',
        paddingLeft: width(1)
    },
    logoVN: {
        width: 26,
        height: 26,
        marginLeft: height(2),
    }
})
export default styles;