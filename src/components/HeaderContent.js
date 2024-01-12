import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const HeaderContent = (props) => {
  const { container, searchBar, textInput, itemNumbers, itemNumbersTxt } =
    styles

  const { navTo, cartItemsNum } = props

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
      <TouchableOpacity onPress={navTo}>
        <View>
          <AntDesign name="shoppingcart" size={50} color="black" />
          <View style={itemNumbers}>
            <Text style={itemNumbersTxt}>{cartItemsNum}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
  },
  itemNumbers: {
    position: 'absolute',
    width: 30,
    alignItems: 'center',
    top: 10,
    right: 6
  },
  itemNumbersTxt: {
    fontWeight: '600'
  }
})

export default HeaderContent
