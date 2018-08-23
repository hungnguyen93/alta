import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import icPhone from '../../image/icPhone.png';
import icMail from '../../image/icMail.png';
import icBack from '../../image/icBack.png';
export default class index extends Component {
    render() {

        const { container, header, txtName, viewPhone_Email, viewPhone, viewEmail,
            txtPhone_Email, icStyle, body, viewDetail, txtTop, txtBottom, headerTop,
            rightHeder, icBackStyle, txtTitle
        } = styles;

        return (
            <View style={container}>
                <View style={headerTop}>
                    <TouchableOpacity>
                        <Image
                            source={icBack}
                            style={icBackStyle} />
                    </TouchableOpacity>
                    <Text style={txtTitle}>Chi tiết nhân viên</Text>
                    <View style={rightHeder} />
                </View>
                <View style={header}>
                    <Text style={txtName}>Nguyen Thi Teo</Text>
                </View>
                <View style={viewPhone_Email}>
                    <View style={viewPhone}>
                        <Text style={txtPhone_Email}>0979999799</Text>
                        <Image source={icPhone} style={icStyle} />
                    </View>
                    <View style={viewEmail}>
                        <Text style={txtPhone_Email}>@alta</Text>
                        <Image source={icMail} style={icStyle} />
                    </View>
                </View>
                <View style={body}>
                    <View style={viewDetail}>
                        <Text style={txtTop}>Cấp bậc</Text>
                        <Text style={txtBottom}>Nhân viên</Text>
                    </View>
                    <View style={viewDetail}>
                        <Text style={txtTop}>Loại hình công việc</Text>
                        <Text style={txtBottom}>Thử việc</Text>
                    </View>
                    <View style={viewDetail}>
                        <Text style={txtTop}>ID nội bộ</Text>
                        <Text style={txtBottom}>NVA</Text>
                    </View>
                    <View style={viewDetail}>
                        <Text style={txtTop}>Văn phòng làm việc</Text>
                        <Text style={txtBottom}>NVA</Text>
                    </View>
                    <View style={viewDetail}>
                        <Text style={txtTop}>Trạng thái</Text>
                        <Text style={txtBottom}>Có hiệu lực</Text>
                    </View>
                    <View style={[viewDetail,{ borderBottomWidth: 0 }]}>
                        <Text style={txtTop}>Ngày tạo</Text>
                        <Text style={txtBottom}>03:44, Hôm nay</Text>
                    </View>
                </View>
            </View>
        );
    }
}