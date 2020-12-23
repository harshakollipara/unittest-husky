import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

interface ButtonProps{
    children:any,
    onPress?:any
}

export default class Button extends Component<ButtonProps>{
    constructor(props:ButtonProps){
        super(props)
    }

    render(){
        const { children, onPress } = this.props
        const { container, text } = styles
        return(
            <TouchableOpacity style={container} onPress={onPress}>
                <Text style={text}>{children}</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        alignSelf: 'center',
        backgroundColor:'blue',
        margin: 10,
        paddingHorizontal: 25
    },
    text: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontFamily:'OpenSans-Regular'
    }
})