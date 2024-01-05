import React from "react"
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';

const Item = () => {
  const {itemWrapper, imageWrapper, imageStyle, priceBuyWrapper, priceTxt} = styles

  return(
    <View style={itemWrapper}>
      <View style={imageWrapper}>
        <Image style={imageStyle} source={require('../../icons/shirt.jpg')}/>
      </View>
      <View style={priceBuyWrapper}>
        <Text style={priceTxt}>999,99 $</Text>
        <TouchableOpacity>
          <FontAwesome5 name="cart-plus" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  itemWrapper: {
    width: 120,
    height: 180,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'lightgray',
    elevation: 7
  },
  imageWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2
  },
  imageStyle: {
    width: 110,
    height: 140,
    objectFit: 'contain'
  },
  priceBuyWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 7,
    paddingRight: 7
  },
  priceTxt: {
    fontSize: 18
  }
})

export default Item