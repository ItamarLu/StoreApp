import React from "react"
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const HeaderContent = () => {
  const {appName, searchBar, textInput} = styles

  return (
    <>
      <Text style={appName}>STORE IL</Text>
      <View style={searchBar}>
        <AntDesign name="search1" size={25} color="gray" />
        <TextInput style={textInput} placeholderTextColor={'gray'} placeholder={'Search Item'} cursorColor={'gray'}/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appName: {
    fontSize: 50,
    color: 'gray'
  },
  searchBar: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'lightgray',
    elevation: 7,
    height: 40,
    width: 300,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    gap: 5,
    backgroundColor: 'white'
  },
  textInput: {
    fontSize: 20,
    width: 240
  }
})

export default HeaderContent