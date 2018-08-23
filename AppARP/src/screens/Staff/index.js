import React, { Component } from 'react';
import {
    View, Text, SectionList, Image, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import icBack from '../../image/icBack.png';
import styles from './styles';
import Search from '../../share/Search';
export default class index extends Component {
    render() {
        var sectionData = [
            { title: "A", data: ["Nguyen Thi Anh", "Tran Van An", "Su Anh"] },
            { title: "B", data: ["Nguyen Thi B", "Tran Van Be", "Su Banh"] },
            { title: "C", data: ["Nguyen Thi Co", "Tran Van Cua", "Su Co"] },
            { title: "D", data: ["Nguyen Thi Dao", "Tran Van Do", "Su Di"] },
        ]
        const {
            container, headerTop, icBackStyle, txtTitle, headerTopRight, header,
            body, viewTitleContact, txtTitleContact,
            viewContactName, txtName
        } = styles;
        return (
            <View style={container}>
                <View style={headerTop}>
                    <TouchableOpacity>
                        <Image
                            source={icBack}
                            style={icBackStyle} />
                    </TouchableOpacity>
                    <Text style={txtTitle}>Nhân viên</Text>
                    <View style={headerTopRight} />
                </View>
                <View style={header}>
                    <Search />
                </View>
                <KeyboardAvoidingView style={container} behavior="padding" enabled>
                    <View style={body}>
                        <SectionList
                            showsVerticalScrollIndicator={false}
                            sections={sectionData}
                            renderSectionHeader={({ section: { title } }) => <View style={viewTitleContact}>
                                <Text style={txtTitleContact}>{title}</Text>
                            </View>}
                            renderItem={({ item }) => <View style={viewContactName}>
                                <Text style={txtName}>{item}</Text>
                            </View>}
                            keyExtractor={(item, index) => item + index}
                        >
                        </SectionList>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}