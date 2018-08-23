import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import SlideMenu from '../screens/slideMenu/index';
class MyHomeScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'blue', justifyContent: 'center', flex: 1 }}>
                <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                    <Text>ScreenHome: Open Draw</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const MyApp = createDrawerNavigator({
    Home: {
        screen: MyHomeScreen
    },
},
    {
        drawerPosition: 'left', 
        initialRouteName: 'Home',
        drawerWidth: 300,
        contentComponent: (props) => (<SlideMenu {...props} />)
    }
);
export default MyApp;