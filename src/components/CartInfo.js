import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const CartInfo = () => {
  const { wrapper, container, infoWrapper, payBtn } = styles
  return (
    <View style={wrapper}>
      <View style={container}>
        <View style={infoWrapper}>
          <Text>Total = 9999,99 $</Text>
          <TouchableOpacity style={payBtn}>
            <Text>Continue to Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 2,
    borderTopColor: 'gray',
    borderTopWidth: 2
  },
  container: {
    width: 300,
    height: 100,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'lightgray',
    elevation: 7,
    alignSelf: 'center',
    margin: 20
  },
  infoWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  payBtn: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'gray',
    paddingVertical: 8,
    paddingHorizontal: 4
  }
})

export default CartInfo
