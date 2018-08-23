import { Alert } from 'react-native';
const changePassword = (oldpass, newpass, cfmkNew, token) => {
    if (newpass === cfmkNew) {
        fetch('http://gateway-login.dev-altamedia.com/api/user/update',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer' + token,
                },
                body: JSON.stringify({ old_password: oldpass, new_password: newpass })
            })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    Alert.alert(
                        'Thông báo',
                        'Đổi mật khẩu thành công',
                        [
                            { text: 'OK', onPress: () => { } },
                        ],
                        { cancelable: false }
                    )
                }
                else { 
                    if(res.status===500){
                    Alert.alert(
                        'Thông báo',
                        'Đổi mật khẩu không thành công',
                        [
                            { text: 'OK', onPress: () => { } },
                        ],
                        { cancelable: false }
                    )
                } else {return ''}
                    
                }
            })
    }
    else {
        Alert.alert(
            'Thông báo',
            'Mật khẩu xác nhận không khớp',
            [
                { text: 'OK', onPress: () => { } },
            ],
            { cancelable: false }
        )
    }
}

module.exports = changePassword;

