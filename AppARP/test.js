import React, { Component } from 'react';
import { View } from 'react-native';
import Animation from './Animation';
export default class test extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor:'gray', justifyContent:'center', alignItems:'center'}}>
                <Animation/>
            </View>
        );
    }
}