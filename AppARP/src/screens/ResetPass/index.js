import React, { Component } from 'react';
import { View, Image, Alert } from 'react-native';

import loginStyle from '../Login/loginStyle';
import logo from '../../image/logo.png';
import icPass from '../../image/icPass.png';
import Button from '../../share/Button';
import Input from '../../share/Input';
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            password_confirmation: '',
        }
    };

    getParamToken = null;
    componentWillMount() {
        const { navigation } = this.props;
        this.getParamToken = navigation.getParam('token');
    }

    render() {
        const { password, password_confirmation } = this.state
        const { logoStyle, container, viewLogo, body } = loginStyle;
        return (
            <View style={container}>
                <View style={viewLogo}>
                    <Image style={logoStyle} source={logo} />
                </View>
                <View style={body}>
                    <Input
                        placeholder='Nhập mật khẩu mới'
                        placeholderTextColor="#FF6222"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        value={password}
                        source={icPass}
                        onChangeText={text => this.setState({ password: text })}
                    />
                    <Input
                        source={icPass}
                        placeholder='Xác nhận mật khẩu mới'
                        placeholderTextColor="#FF6222"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        value={password_confirmation}
                        onChangeText={text => this.setState({ password_confirmation: text })}
                    />
                    <View style={{alignItems:'center'}}>
                        <Button
                        title="Xác nhận"
                        onPress={this._resetPass}
                        style={{marginTop:10}}
                        />
                    </View>
                    
                </View>
            </View>
        );
    }
    _resetPass = () => {
        const { password, password_confirmation } = this.state
        if (password === password_confirmation) {
            fetch('http://gateway-login.dev-altamedia.com/api/user/password/reset', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password, password_confirmation, token: this.getParamToken })
            })
                .then(res => res.json())
                .then(resJson => {
                    if (resJson.status_code === 500) {
                        Alert.alert(
                            'Thông báo',
                            'Mật khẩu tối thiểu 6 ký tự',
                            [
                                {
                                    text: 'OK', onPress: () => {
                                        this.setState({ password: '', password_confirmation: '' })
                                    }
                                },
                            ],
                            { cancelable: false }
                        )
                    } else {
                        this._next();
                        this.setState({
                            password: '',
                            password_confirmation: '',
                        })
                    }
                })
                .catch(error => console.log(error))
        }
        else {
            Alert.alert(
                'Thông báo',
                'Mật khẩu xác nhận không khớp',
                [
                    {
                        text: 'OK', onPress: () => {
                            this.setState({ password: '', password_confirmation: '' })
                        }
                    },
                ],
                { cancelable: false }
            )
        }
    }
    _next = () => {
        this.props.navigation.navigate('login');
    };
}