import React, { Component } from 'react';
import { View, Image } from 'react-native';

import logo from '../../image/logo.png';
import icPass from '../../image/icPass.png';
import getToken from '../../api/getToken';
import changePassword from '../../api/changePassword';
import Button from '../../share/Button';
import Input from '../../share/Input';
import loginStyle from '../Login/loginStyle';
export default class changePass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mkOld: '',
            mkNew: '',
            cfmkNew: ''
        }
    }
    _changePass = () => {
        const { mkOld, mkNew, cfmkNew } = this.state;
        getToken()
            .then(res => {
                changePassword(mkOld, mkNew, cfmkNew, res)
            })
    };
    render() {
        const { mkNew, mkOld, cfmkNew } = this.state
        const { container, logoStyle, viewLogo, body } = loginStyle;
        return (
            <View style={container}>
                <View style={viewLogo}>
                    <Image style={logoStyle} source={logo} />
                </View>
                <View style={body}>
                    <Input
                        source={icPass}
                        placeholder='Nhập mật khẩu của bạn'
                        placeholderTextColor="#FF6222"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        value={mkOld}
                        onChangeText={text => this.setState({ mkOld: text })}
                    />
                    <Input
                        source={icPass}
                        placeholder='Nhập mật khẩu mới'
                        placeholderTextColor="#FF6222"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        value={mkNew}
                        onChangeText={text => this.setState({ mkNew: text })}
                    />
                    <Input
                        source={icPass}
                        placeholder='Xác nhận mật khẩu mới'
                        placeholderTextColor="#FF6222"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        value={cfmkNew}
                        onChangeText={text => this.setState({ cfmkNew: text })}
                    />
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Button
                            title="Xác nhận"
                            onPress={this._changePass}
                            style={{ marginTop: 10 }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}