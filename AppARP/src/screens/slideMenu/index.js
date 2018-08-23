import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import resetToken from '../../api/resetToken';

import styles from './styles';
import User from '../../image/User.png';
import icHome from '../../image/icHome.png';
import icGrid from '../../image/icGrid.png';
import icBox from '../../image/icBox.png';
import icPlus from '../../image/icPlus.png';
import icUsers from '../../image/icUsers.png';
import icHelp from '../../image/icHelp.png';
import icLanguage from '../../image/icLanguage.png';
import icLogout from '../../image/icLogout.png';
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTouchHR: false,
            isTouchHome: false,
        };
    }
    render() {
        const { container, header, headerLeft, icUser, headerRight, txtName, txtMail, body,
            viewGeneral, viewIcon, ichome, txtGeneral, childHR, icgrid, icbox, ichelp, icusers,
            iclogout, footer, txtVersion
        } = styles;
        const ChildHR = this.state.isTouchHR
            ? <View style={childHR}>
                <View style={viewGeneral}>
                    <View style={viewIcon}>
                        <Image style={icgrid} source={icGrid} />
                    </View>
                    <Text style={txtGeneral}>Hệ thống phòng ban</Text>
                </View>
                <View style={viewGeneral}>
                    <View style={viewIcon}>
                        <Image style={ichelp} source={icPlus} />
                    </View>
                    <Text style={txtGeneral}>Thêm phòng mới</Text>
                </View>
                <View style={viewGeneral}>
                    <View style={viewIcon}>
                        <Image style={icusers} source={icUsers} />
                    </View>
                    <Text style={txtGeneral}>Nhân viên</Text>
                </View>
            </View>
            : null;
        return (
            <View style={container}>
                <View style={header}>
                    <View style={headerLeft}>
                        <Image style={icUser} source={User} />
                    </View>
                    <View style={headerRight}>
                        <Text style={txtName}>Admin</Text>
                        <Text style={txtMail}>Admin@altmedia.com</Text>
                    </View>
                </View>
                <View style={body}>
                    <TouchableOpacity
                        onPress={this._isTouchHome}
                        style={viewGeneral}>
                        <View style={viewIcon}>
                            <Image style={ichome} source={icHome} />
                        </View>
                        <Text style={txtGeneral}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._isTouchHR}
                        style={viewGeneral}>
                        <View style={viewIcon}>
                            <Image style={icbox} source={icBox} />
                        </View>
                        <Text style={txtGeneral}>HR</Text>
                    </TouchableOpacity>
                    {ChildHR}
                    <TouchableOpacity style={viewGeneral}>
                        <View style={viewIcon}>
                            <Image style={ichelp} source={icHelp} />
                        </View>
                        <Text style={txtGeneral}>Hỗ trợ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={viewGeneral}>
                        <View style={viewIcon}>
                            <Image style={ichelp} source={icLanguage} />
                        </View>
                        <Text style={txtGeneral}>Thay đổi ngôn ngữ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._logout}
                        style={viewGeneral}>
                        <View style={viewIcon}>
                            <Image style={iclogout} source={icLogout} />
                        </View>
                        <Text style={txtGeneral}>Thoát</Text>
                    </TouchableOpacity>
                </View>
                <View style={footer}>
                    <Text style={txtVersion}>Phiên bản 1.0.1</Text>
                </View>

            </View>
        );
    }
    _logout = () => {
        resetToken()
        .then(a => {
            if(a===null){
                this._isLogin();
            }
            this._isLogin();
        })
    };
    _isTouchHR = () => {
        this.setState({
            isTouchHR: !this.state.isTouchHR
        })
    };
    _isTouchHome = () => {
        this.setState({
            isTouchHR: false,
            isTouchHome: !this.state.isTouchHome
        })
    };
    _isLogin = () =>{
        this.props.navigation.navigate('login')
    }
};