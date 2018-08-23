import React, { Component } from 'react';
import {
    Text, TouchableOpacity, ImageBackground
} from 'react-native';

import icLogin from '../image/icLogin.png';
import styles from '../screens/Login/loginStyle';

export default class Button extends Component {
    render() {
        const { textSignin, iclogin } = styles;
        return (
            <TouchableOpacity
                {...this.props}
            >
                <ImageBackground style={iclogin} source={icLogin}>
                    <Text style={textSignin}>{this.props.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}