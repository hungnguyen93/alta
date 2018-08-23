import React, { Component } from 'react';
import {
    Image, View, Text, TouchableOpacity, ActivityIndicator, Alert, Platform, Linking,
    KeyboardAvoidingView
} from 'react-native';
import logo from '../../image/logo.png';
import icUser from '../../image/icUser.png';
import icPass from '../../image/icPass.png';
import VN from '../../image/VN.png';
import check from '../../image/check.png';
import styles from './loginStyle';
import Input from '../../share/Input';
import Button from '../../share/Button';
import saveToken from '../../api/saveToken';
import signIn from '../../api/signIn';
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indicator: true,
            isCheck: false,
            email: "",
            password: "",
            token: "",
            indicator: false
        };
    };
    // Event listening Enter the URL
    componentDidMount() {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                !! url && this.navigate(url);
            });
        } else {
            Linking.addEventListener('url', this.handleOpenURL);
        }
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL = (event) => {
        this.navigate(event.url);
    }
    // cut URL to get Token and navigation RouteName.
    navigate = (url) => {
        const { navigate } = this.props.navigation;
        const route = url.replace(/.*?:\/\//g, '');
        const token = route.match(/\/([^\/]+)\/?$/)[1];
        const routeName = route.split('/')[0];
        if (routeName === 'people') navigate('resetPass', { token })
    }

    _login = () => {
        const { email, password } = this.state;
        this.setState({
            indicator: true
        })
        signIn(email, password)
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    token,
                    email: "",
                    password: "",
                    indicator: false
                });
                const vitri = responseJson.data.indexOf("=");
                const token = responseJson.data.slice(vitri + 1);
                this._next();
                saveToken(token);
            })
            .catch((error) => {
                console.log(error)

                this.setState({
                    indicator: false
                });
                Alert.alert(
                    'Notification',
                    'Email or Pass incorrect',
                    [
                        { text: 'OK', onPress: () => { } },
                    ],
                    { cancelable: false }
                )
            });
    };
    render() {
        const { container, logoStyle, body, viewLogo, flooter, viewRemember,
            checkStyle, textRemember, logoVN
        } = styles;
        const indicator = this.state.indicator ? <ActivityIndicator size="small" color='gray' /> : null;
        const { email, password } = this.state;
        const isCheck = this.state.isCheck ? <Image style={{ width: 26, height: 26, }} source={check} /> : null;
        return (
            <View style={container}>
                <View style={viewLogo}>
                    <Image style={logoStyle} source={logo} />
                </View>
                {indicator}
                <View style={body}>
                    <Input
                        placeholder="Username"
                        placeholderTextColor="#FF6222"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => this.setState({ email: text })}
                        source={icUser}
                    />
                    <Input
                        placeholder="Password"
                        placeholderTextColor="#FF6222"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => this.setState({ password: text })}
                        source={icPass}
                    />
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Button
                            title="SIGN IN"
                            onPress={this._login}
                            style={{marginTop:10}}
                        />
                    </View>
                </View>
                <View style={flooter}>
                    <View style={viewRemember}>
                        <TouchableOpacity style={checkStyle}
                            onPress={this._isCheckRemember}
                        >
                            {isCheck}
                        </TouchableOpacity>
                        <Text style={textRemember}>Remember</Text>
                    </View>
                    <View style={viewRemember}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('forgotPass')}>
                            <Text style={textRemember}>Forgot password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={logoVN} source={VN} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    _isCheckRemember = () => {
        this.setState({
            isCheck: !this.state.isCheck
        });
    };

    _next = () => {
        this.props.navigation.navigate('home');
    }
}
