import React from 'react'
import { TouchableOpacity } from 'react-native';
import { create } from 'react-test-renderer';
import Button from '../Button.class';

describe('Button component', () => {
    const props = {
        onPress: jest.fn(),
        children: '',
    }

    test('renders correctly', () => {
        const instance = create(<Button {...props}>Button Test</Button>).toJSON();
        expect(instance).toMatchSnapshot();
    })
    test('should call onPress', () => {
        const instance = create(<Button {...props}>Button Test</Button>);
        const response = instance.root.findByType(TouchableOpacity);
        response.props.onPress();
        expect(props.onPress).toHaveBeenCalled();
    })

})