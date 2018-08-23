import React, { Component } from 'react';
import {
    TextInput, View, Image
} from 'react-native';
import styles from '../screens/Login/loginStyle';
export default class Input extends Component {
    render() {
        return (
            <View style={[styles.viewUser, this.props.style]}>
                <Image style={[styles.icStyle, this.props.styleImage]} source={this.props.source} />
                <TextInput {...this.props} style={styles.inputStyle } underlineColorAndroid='transparent'/>
            </View>
        );
    }
}
