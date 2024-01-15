import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const CartItem = (props) => {
  const {
    container,
    imageWrapper,
    imageStyle,
    infoBuyWrapper,
    itemNameStyles,
    quantityControlWrapper,
    itemQuantityTxt,
    priceTxt,
    cartBtn
  } = styles

  const { itemPath, itemName, itemPrice, id, updateQuantityInCart, quantity } =
    props
  const [numberOfItems, setNumberOfItems] = useState(quantity)

  const handlePressAdd = () => {
    setNumberOfItems(numberOfItems + 1)
    updateQuantityInCart(id, numberOfItems + 1)
  }
  const handlePressMinus = () => {
    if (numberOfItems > 0) {
      setNumberOfItems(numberOfItems - 1)
      updateQuantityInCart(id, numberOfItems - 1)
    }
  }

  const calculateTotalPrice = () => {
    return (parseFloat(itemPrice.replace(',', '.')) * numberOfItems)
      .toFixed(2)
      .replace('.', ',')
  }

  return (
    <View style={container}>
      <View style={imageWrapper}>
        <Image style={imageStyle} source={itemPath} />
      </View>
      <View style={infoBuyWrapper}>
        <Text style={itemNameStyles}>{itemName}</Text>
        <View style={quantityControlWrapper}>
          {numberOfItems === 1 ? (
            <TouchableOpacity style={cartBtn} onPress={handlePressMinus}>
              <FontAwesome5 name="trash" size={24} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={cartBtn} onPress={handlePressMinus}>
              <FontAwesome5 name="minus" size={24} color="white" />
            </TouchableOpacity>
          )}
          <Text style={itemQuantityTxt}>{numberOfItems}</Text>
          <TouchableOpacity style={cartBtn} onPress={handlePressAdd}>
            <FontAwesome5 name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={priceTxt}>${calculateTotalPrice()}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 160,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'start',
    margin: 10
  },
  imageStyle: {
    width: 110,
    height: 150,
    objectFit: 'contain'
  },
  infoBuyWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 10,
    width: 200,
    maxWidth: 200,
    marginRight: 10
  },
  itemNameStyles: {
    fontSize: 18
  },
  quantityControlWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    borderRadius: 10,
    padding: 5
  },
  itemQuantityTxt: {
    fontSize: 20,
    height: 30,
    width: 30,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  priceTxt: {
    fontWeight: '600',
    fontSize: 18
  },
  cartBtn: {
    borderRadius: 10,
    backgroundColor: 'black',
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CartItem
