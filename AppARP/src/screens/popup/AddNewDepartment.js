import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import Search from '../../share/Search';
import icClose from '../../image/icClose.png';
import icCheck from '../../image/icCheck.png';
export default class AddNewDepartment extends Component {
    render() {
        const { container, containerBody, header, txtTitle, icclose, body,
            viewtxtDepartment, txtDepartment, icisCheck
        } = Styles;
        return (
            <View style={container}>
                <View style={containerBody}>
                    <View style={header}>
                        <View style={icclose} />
                        <Text style={txtTitle}>
                            Trực thuộc phòng ban
                        </Text>
                        <TouchableOpacity>
                            <Image style={icclose} source={icClose} />
                        </TouchableOpacity>
                    </View>
                    <View style={body}>
                        <Search stylePlus={{ marginTop: 5 }} />
                        <View style={viewtxtDepartment}>
                            <Text style={txtDepartment}>Lập trình</Text>
                            <Image style={icisCheck} source={icCheck} />
                        </View>
                        <View style={viewtxtDepartment}>
                            <Text style={txtDepartment}>Thiết kế</Text>
                            <Image style={icisCheck} source={icCheck} />
                        </View>
                        <View style={viewtxtDepartment}>
                            <Text style={txtDepartment}>Media</Text>
                            <Image style={icisCheck} source={icCheck} />
                        </View>
                        <View style={viewtxtDepartment}>
                            <Text style={txtDepartment}>Sale vs Marketing</Text>
                            <Image style={icisCheck} source={icCheck} />
                        </View>
                        <View style={viewtxtDepartment}>
                            <Text style={txtDepartment}>Hành chính</Text>
                            <Image style={icisCheck} source={icCheck} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}