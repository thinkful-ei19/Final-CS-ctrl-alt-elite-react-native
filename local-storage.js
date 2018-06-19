import { AsyncStorage } from 'react-native';

export const loadAuthToken = () => {
    try {
        return AsyncStorage.getItem('authToken');
    } catch (e) {
        console.log(e, 'unable to load token')
    }
};

export const saveAuthToken = authToken => {
    try {
        AsyncStorage.setItem('authToken', authToken);
    } catch (e) {
        console.log(e, 'unable to save token')
    }
};

export const clearAuthToken = () => {
    try {
        AsyncStorage.removeItem('authToken');
    } catch (e) {
        console.log(e, 'unable to clear token')
    }
};
