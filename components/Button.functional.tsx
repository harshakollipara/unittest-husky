import React, { FunctionComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

interface ButtonProps {
onPress?: any
}

export const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}> {children} </Text>
      </View>
    </TouchableOpacity>
  )
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

export default Button