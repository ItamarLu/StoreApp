import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

const Item = (props) => {
  const {
    itemWrapper,
    imageWrapper,
    imageStyle,
    itemNameStyle,
    priceBuyWrapper,
    priceTxt,
    addButton,
    addCartTxt
  } = styles

  const { itemPath, itemName, itemPrice, addCart, id } = props

  const handleAddToCart = () => {
    addCart(id)
  }

  return (
    <View style={itemWrapper}>
      <View style={imageWrapper}>
        <Image style={imageStyle} source={itemPath} />
      </View>
      <View style={priceBuyWrapper}>
        <Text style={itemNameStyle}>{itemName}</Text>
        <Text style={priceTxt}>${itemPrice}</Text>
        <TouchableOpacity style={addButton} onPress={handleAddToCart}>
          <Text style={addCartTxt}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    width: 120
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    objectFit: 'contain',
    width: 110,
    height: 130
  },
  itemNameStyle: {
    fontSize: 18
  },
  priceBuyWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  priceTxt: {
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 19
  },
  addButton: {
    borderColor: 'lightgreen',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    paddingHorizontal: 6,
    paddingVertical: 6,
    elevation: 5
  },
  addCartTxt: {
    fontWeight: '600'
  }
})

export default Item
