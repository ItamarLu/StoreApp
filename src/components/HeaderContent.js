import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const HeaderContent = () => {
  const { container, searchBar, textInput } = styles

  return (
    <View style={container}>
      <View style={searchBar}>
        <AntDesign name="search1" size={25} color="#A6A6A6" />
        <TextInput
          style={textInput}
          placeholderTextColor={'#A6A6A6'}
          placeholder={'Search Item'}
          cursorColor={'gray'}
        />
      </View>
      <View>
        <Text>23</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  searchBar: {
    borderRadius: 5,
    elevation: 7,
    height: 40,
    width: 300,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    gap: 5,
    backgroundColor: '#F0F0F0'
  },
  textInput: {
    fontSize: 20,
    width: 240
  }
})

export default HeaderContent
