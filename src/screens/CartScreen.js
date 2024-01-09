import React from 'react'
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native'
import CartItem from '../components/CartItem'
import CartInfo from '../components/CartInfo'

const CartScreen = () => {
  const { container, body } = styles
  return (
    <View style={container}>
      <StatusBar />
      <ScrollView>
        <View style={body}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </View>
      </ScrollView>
      <CartInfo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingTop: 2,
    borderTopColor: 'gray',
    borderTopWidth: 2
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  }
})

export default CartScreen
