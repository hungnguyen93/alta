import { AsyncStorage } from 'react-native';
const resetToken = async () => {
    try {
        await AsyncStorage.removeItem('@store');
        const value = await AsyncStorage.getItem('@store');
        if (value === null) {
            return value;
        }
        return null;
    } catch (error) {
        console.log("Error resetting data" + error);
    }
}
export default resetToken;