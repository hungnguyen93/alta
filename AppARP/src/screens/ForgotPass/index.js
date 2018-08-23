import React, { Component } from 'react';
import {
    View, Image, TouchableOpacity, Text, ActivityIndicator, Alert
} from 'react-native';
import { width, height } from 'react-native-dimension';
import forgotPassStyle from './forgotPassStyle';
import icBack from '../../image/back.png';
import icEmail from '../../image/icEmail.png';
import Input from '../../share/Input';
import Button from '../../share/Button';
import APIresetPass from '../../api/resetPass';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            indicator: false
        };
    };

    _next = () => {
        this.props.navigation.navigate('forgotSS');
    }
    _resetPass = () => {
        const { email } = this.state;
        this.setState({
            indicator: true
        });
        APIresetPass(email)
            .then(resJson => {
                if (resJson.status_code === 200) {
                    this.setState({
                        indicator: false
                    });
                    this._next();
                }
                else {
                    this.setState({ indicator: false })
                    Alert.alert(
                        'Thông báo',
                        'Email nhập không đúng!',
                        [
                            { text: 'OK', onPress: () => { this.setState({ email: '' }) } },
                        ],
                        { cancelable: false }
                    )
                }
            }
            )
            .catch(error => console.log(error))
    }
    render() {
        const indicator = this.state.indicator ? <ActivityIndicator size="small" color='gray' /> : null;
        const { container, header, containerBody, icBackStyle, textStyle, textView } = forgotPassStyle;
        const { email } = this.state;
        return (
            <View style={container}>
                <View style={header}>
                    <TouchableOpacity style={[icBackStyle, {marginTop:height(4), marginLeft:width(4)}]}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Image
                            style={icBackStyle}
                            source={icBack}
                        />
                    </TouchableOpacity>
                    <View style={textView}>
                        <Text style={textStyle}>Vui lòng liên hệ Admin</Text>
                        <Text style={textStyle}>để lấy mật khẩu</Text>
                    </View>
                </View>
                {indicator}
                <View style={containerBody}>
                    <Input
                        styleImage={{ width: width(100) - width(93), height: ((width(100) - width(93)) / 67 ) * 51}}
                        source={icEmail}
                        placeholder="Nhập email của bạn"
                        placeholderTextColor="#FF6222"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <View style={{alignItems:'center', marginTop:10}}>
                        <Button
                            title="GỬI"
                            onPress={this._resetPass}
                        />
                    </View>
                </View>
            </View>
        );
    }

}