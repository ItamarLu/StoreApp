import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const CartItem = () => {
  const {
    container,
    imageWrapper,
    imageStyle,
    infoBuyWrapper,
    itemName,
    quantityControlWrapper,
    itemQuantityTxt,
    priceTxt
  } = styles

  return (
    <View style={container}>
      <View style={imageWrapper}>
        <Image style={imageStyle} source={require('../../icons/shirt.jpg')} />
      </View>
      <View style={infoBuyWrapper}>
        <Text style={itemName}>Camisa Preta</Text>
        <View style={quantityControlWrapper}>
          <TouchableOpacity>
            <FontAwesome5 name="trash" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="minus" size={24} color="black" />
          </TouchableOpacity>
          <Text style={itemQuantityTxt}>2</Text>
          <TouchableOpacity>
            <FontAwesome5 name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={priceTxt}>999,99 $</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 160,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  itemName: {
    fontSize: 18
  },
  quantityControlWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'lightgray',
    padding: 5
  },
  itemQuantityTxt: {
    fontSize: 18,
    borderRightColor: 'gray',
    borderRightWidth: 1,
    borderLeftColor: 'gray',
    borderLeftWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  priceTxt: {
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'lightgray',
    paddingTop: 5,
    width: 100,
    textAlign: 'center'
  }
})

export default CartItem
