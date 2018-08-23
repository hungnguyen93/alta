import React, { Component } from 'react';
import { View, Text} from 'react-native';
import styles from './styles';
import getToken from '../../api/getToken';
export default class index extends Component {
componentWillMount(){
    this._getToken();
}
    render() {
        const { container, } = styles;
        return (
            <View style={container}>
                <Text>Screen Loading...</Text>
            </View>
        );
    }
    _getToken = () => {
        getToken().then(a => {
            if (a != null && a != '') {
                this._nextHome();
            } else {
                this._nextLogin();
            }
        });
    };
    _nextHome=()=>{
        this.props.navigation.navigate('home')
    };
    _nextLogin=()=>{
        this.props.navigation.navigate('login')
    };
}