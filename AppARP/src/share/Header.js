import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from './Styles';
import icBack from '../image/icBack.png';
export default class Header extends Component {
    render() {
        const {header, icBackStyle, txtTitle, headerRight} = Styles;
        return (
            <View style={header}>
                <TouchableOpacity>
                    <Image
                        source={this.props.source}
                        style={icBackStyle} />
                </TouchableOpacity>
                <Text style={txtTitle}>{this.props.title}</Text>
                <View style={icBackStyle} />
            </View>
        );
    }
}