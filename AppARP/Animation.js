import React, { Component } from 'react';
import {  Animated, Text, Easing } from 'react-native';
export default class Animation extends Component {
    constructor(props){
        super(props);
        this.state = { fadeAnim: new Animated.Value(-800) }
    }
    componentDidMount(){
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue:0,
                duration:1000,
                easing: Easing.bezier(.59,.1,.8,.57)
            }
        ).start()
    }
    render() {
        const marginLeft = this.state.fadeAnim;
        return (
            <Animated.View style={{height:200, width:300, backgroundColor:'white', marginLeft}}>
                <Text>Demo Animation</Text>
            </Animated.View>
        );
    }
}