import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from '../screens/Staff/styles';
import icSearch from '../image/isSearch.png';
export default class Search extends Component {
    render() {
        const {viewSearch, inputStyle, icSearchStyle} = styles;
        return (
            <View style={[viewSearch, this.props.stylePlus]}>
                <TextInput
                    placeholder="Tìm kiếm"
                    style={inputStyle}
                    autoCapitalize="none"
                    underlineColorAndroid="transparent"
                    {...this.props}
                />
                <Image source={icSearch} style={icSearchStyle} />
            </View>
        );
    }
}
