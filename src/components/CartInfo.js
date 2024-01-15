import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { itemDetails } from '../utilities/itemDetails'

const CartInfo = (props) => {
  const { wrapper, container, infoWrapper, totalTxt, payBtn, payBtnTxt } = styles

  const { cartItems, handleNav } = props

  const calculateGrandTotal = () => {
    let grandTotal = 0
    for (const [id, quantity] of Object.entries(cartItems)) {
      const item = itemDetails[id]
      grandTotal += parseFloat(item.price.replace(',', '.')) * quantity
    }
    return grandTotal.toFixed(2).replace('.', ',')
  }

  return (
    <View style={wrapper}>
      <View style={container}>
        <View style={infoWrapper}>
          <Text style={totalTxt}>Total = ${calculateGrandTotal()}</Text>
          <TouchableOpacity style={payBtn} onPress={handleNav}>
            <Text style={payBtnTxt}>Continue to Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 2,
    borderTopColor: 'lightgray',
    borderTopWidth: 1
  },
  container: {
    width: 350,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingRight: 5
  },
  infoWrapper: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 10
  },
  totalTxt: {
    fontSize: 20,
    fontWeight: '600'
  },
  payBtn: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgreen',
    backgroundColor: 'lightgreen',
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 3
  },
  payBtnTxt: {
    fontSize: 16,
    fontWeight: '600'
  }
})

export default CartInfo
