import React from 'react'
import { View, TextInput, Text } from 'react-native'

const InputInfo = (props) => {
  const {
    inputContainer,
    label,
    input,
    labelText,
    placeholder,
    keyboardType,
    secureTextEntry,
    onChangeText
  } = props

  return (
    <View style={inputContainer}>
      <Text style={label}>{labelText}</Text>
      <TextInput
        style={input}
        placeholder={placeholder}
        keyboardType={keyboardType || 'default'}
        secureTextEntry={secureTextEntry || false}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default InputInfo
