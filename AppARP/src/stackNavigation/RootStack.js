import login from '../screens/Login/index';
import forgotPassword from '../screens/ForgotPass/index';
import forgotSS from '../screens/ForgotPass/ForgotSuccess';
import Draw from '../stackNavigation/drawNavigation';
import DetailStaff from '../screens/DetailStaff/index'
import resetPass from '../screens/ResetPass/index';
import changePass from '../screens/changePass/changePass';
import Staff from '../screens/Staff/index';
import loadingScreen from '../screens/Loading/index';
import slideMenu from '../screens/slideMenu/index';
import addDepartment from '../screens/addDdepartment/index';
import { createStackNavigator, createSwitchNavigator} from 'react-navigation';
const Authentication = createStackNavigator(
    {
        login: {
            screen: login
        },
        forgotPass: {
            screen: forgotPassword
        },
        forgotSS:{
            screen: forgotSS
        },
        resetPass:{
            screen: resetPass
        },
        detailStaff:{
            screen: DetailStaff
        },
        changePass:{
            screen: changePass
        },
        staff:{
            screen: Staff
        },
        loading:{
            screen:loadingScreen
        },
        slideMenu:{
            screen:slideMenu
        },
       addDepartment:{
           screen:addDepartment
       }
    },
    {
        initialRouteName: 'login',
        navigationOptions: {
        header: null,
        }
    }
);
const AppNavigator = createSwitchNavigator({
    authen:{
        screen: Authentication
    },
    home:{
        screen: Draw
    }
});
export default AppNavigator;