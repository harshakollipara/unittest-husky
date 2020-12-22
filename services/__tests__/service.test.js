import 'react-native';
import { getItems, saveItems, Service } from '../storage';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

jest.spyOn(Alert, 'alert');

beforeAll(() => {
    jest.mock('@react-native-community/async-storage');
})

describe('getRecentItem', () => {
    test('if no results exist at key, return an empty array', async () => {
        const result = await getItems();
        expect(result).toEqual([]);
    });
    it('returns an array of recent items', async () => {
        AsyncStorage.setItem('mykey', JSON.stringify([{ id: 1 }]))
        return AsyncStorage.getItem('mykey').then(myValue => {
            expect(myValue).toBe("[{\"id\":1}]")
        });
    });
});

describe('saveRecentItem', () => {
    test('if no recent item exists, adds item', async () => {
        await saveItems({ id: 1 });
        return AsyncStorage.getItem('mykey').then(myValue => {
            expect(myValue).toBe("[{\"id\":1}]");
        });
    });

});

describe('Service class', () => {
    test('staticService', () => {
        Service.staticService();
        expect(Alert.alert).toHaveBeenCalledWith('Static Service')
    })
})
