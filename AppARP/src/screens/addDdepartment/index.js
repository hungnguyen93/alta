import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native';

import icBack from '../../image/icBack.png';
import icDown from '../../image/icDown.png';
import icBtn from '../../image/btn.png';
import styles from './styles';
import PopupAddDepartment from '../popup/AddNewDepartment';
export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:''
        }
    }
    render() {
        const { container, headerTop, icBackStyle, txtTitle, headerTopRight, body, viewDependentRoom,
            viewTop, txtTop, viewBottom, txtBottom, viewDescription, headerDescription, bodyDescription,
            icdown, footer, icbtn, txtRefresh
        } = styles;
        return (
            <View style={container}>
                <View style={headerTop}>
                    <TouchableOpacity>
                        <Image
                            source={icBack}
                            style={icBackStyle}
                        />
                    </TouchableOpacity>
                    <Text style={txtTitle}>Thêm mới phòng ban</Text>
                    <View style={headerTopRight} />
                </View>
                <View style={body}>
                    <View style={viewDependentRoom}>
                        <View style={viewTop}>
                            <Text style={txtTop}>Phòng trực thuộc</Text>
                        </View>
                        <View style={viewBottom} >
                            <Text style={txtBottom}>{this.state.name}</Text>
                            <TouchableOpacity onPress={() => this.ref._OpenPopup()}>
                                <Image style={icdown} source={icDown} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={viewDependentRoom}>
                        <View style={viewTop}>
                            <Text style={txtTop}>Tên phòng ban</Text>
                        </View>
                        <View style={viewBottom} >
                            <Text style={txtBottom}>Media</Text>
                        </View>
                    </View>
                    <View style={viewDescription}>
                        <View style={headerDescription}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder='Mô tả'
                                placeholderTextColor='#888888'
                                multiline={true}
                                style={txtTop}
                            />
                        </View>
                    </View>
                </View>
                <View style={footer}>
                    <TouchableOpacity style={icbtn}>
                        <ImageBackground style={icbtn} source={icBtn}>
                            <Text style={txtRefresh}>LÀM MỚI</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={icbtn}>
                        <ImageBackground style={icbtn} source={icBtn}>
                            <Text style={txtRefresh}>THÊM MỚI</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <PopupAddDepartment 
                ref={ref => this.ref = ref} 
                _selected= { value => this.setState({name : value}) }
                />
            </View>
        );
    }

}