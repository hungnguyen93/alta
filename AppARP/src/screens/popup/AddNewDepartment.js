import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Styles from './Styles';
import Search from '../../share/Search';
import icClose from '../../image/icClose.png';
import icCheck from '../../image/icCheck.png';
export default class AddNewDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: undefined,
            touchPopup: false
        }
    }
    render() {
        const data = [
            { key: "Lập trình" },
            { key: "Thiết kế" },
            { key: "Media" },
            { key: "Sale & Marketing" },
            { key: "Hành chính" },
            { key: "Kế toán" },
        ];
        const { container, containerBody, header, txtTitle, icclose, body,
            viewtxtDepartment, txtDepartment, icisCheck
        } = Styles;
        if (this.state.touchPopup) {
            return (
                <View style={container}>
                    <View style={containerBody}>
                        <View style={header}>
                            <View style={icclose} />
                            <Text style={txtTitle}>
                                Trực thuộc phòng ban
                            </Text>
                            <TouchableOpacity onPress={this._ClosePopup}>
                                <Image style={icclose} source={icClose} />
                            </TouchableOpacity>
                        </View>
                        <View style={body}>
                            <Search stylePlus={{ marginTop: 5 }} />
                            <FlatList
                                data={data}
                                renderItem={({ item, index }) => <TouchableOpacity onPress={() => this._Touch(index,item.key)}
                                    style={viewtxtDepartment}>
                                    <Text style={txtDepartment}>{item.key}</Text>
                                    {this.state.selected === index ? <Image style={icisCheck} source={icCheck} /> : null}
                                </TouchableOpacity>}
                            />
                        </View>
                    </View>
                </View>
            );
        } else return false
    }
    _Touch = (index) => {
        if (this.state.selected === index) {
            this.setState({ selected: undefined })
        } else {
            this.setState({
                selected: index
            });
        }
    }
    _OpenPopup = () => {
        this.setState({
            touchPopup: true
        });
    };

    _ClosePopup = () => {
        this.setState({
            touchPopup: false
        });
    };
}