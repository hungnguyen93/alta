import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Container, Col } from 'native-base';

import forgotPassStyle from './forgotPassStyle';
import icSentEmail from '../../image/icSentEmail.png';
import Button from '../../share/Button';

export default class ForgotSuccess extends Component {
    render() {
        const { txtStyle, textSentMail, icsentEmail } = forgotPassStyle;
        return (
            <Container>
                <Col style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Image style={icsentEmail}source={icSentEmail} />
                    <Text style={textSentMail}>Đã gửi mail</Text>
                </Col>
                <Col style={{ alignItems: 'center', marginTop: '3%' }}>
                    <Text style={txtStyle}>Vui lòng kiểm tra hộp thư đến để</Text>
                    <Text style={txtStyle}>xem email từ Admin có kèm liên kết</Text>
                    <Text style={txtStyle}>để đặt lại mật khẩu</Text>
                    <Button
                        title="VỀ TRANG CHỦ"
                        onPress={() => this.props.navigation.popToTop()}
                        style={{ marginTop: 15 }}
                    />
                </Col>
            </Container>
        );
    }
}