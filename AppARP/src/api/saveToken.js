import { AsyncStorage } from 'react-native';
const saveToken = async (token) =>{
    await AsyncStorage.setItem( '@store', token)
};
export default saveToken;