import { AsyncStorage } from 'react-native';

export async function loadAuthToken() {
    try {
        console.log('attempting to load JWT')
        const authToken = await AsyncStorage.getItem('authToken').then(result=>result);
        return authToken;
        // return AsyncStorage.getItem('authToken');
    } catch (e) {
        console.log(e, 'unable to load token')
    }
};

export async function saveAuthToken (authToken) {
    try {
        console.log('attempting to save JWT')
        await AsyncStorage.setItem('authToken', authToken);
        // setTimeout(function(){AsyncStorage.getItem('authToken').then((result) => console.log(result))},5000)
    } catch (e) {
        console.log(e, 'unable to save token')
    }
};

export const clearAuthToken = () => {
    try {
        console.log('attempting to clear JWT')
        // AsyncStorage.removeItem('authToken');
    } catch (e) {
        console.log(e, 'unable to clear token')
    }
};
