import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export const saveItems = async (recentItem) => {
    try {
        const existingItem = await getItems();
        const newItem = [recentItem, ...existingItem];
        return AsyncStorage.setItem(
            'DEMO::recentItem',
            JSON.stringify(newItem)
        );
    } catch (err) {

        return;
    }
};

export const getItems = async () => {
    try {
        const result = await AsyncStorage.getItem('DEMO::recentItem');
        if (result) {
            return JSON.parse(result);
        }

        return [];
    } catch (err) {
        return [];
    }
};

export class Service {
    static staticService = () => {
        return Alert.alert('Static Service')
    };

    service = () => {
        return Alert.alert('Service')
    }
}