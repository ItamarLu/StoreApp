import React, { useState, useEffect } from 'react'
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native'
import CartItem from '../components/CartItem'
import CartInfo from '../components/CartInfo'
import { itemDetails } from '../utilities/itemDetails'
import { loadItems, saveItems } from '../utilities/Storage'

const CartScreen = ({ navigation }) => {
  const { container, body } = styles

  const [items, setItems] = useState({})

  const getImagePathForItemId = (id) => {
    return itemDetails[id].imagePath
  }
  const getItemNameForItemId = (id) => {
    return itemDetails[id].name
  }
  const getItemPriceForItemId = (id) => {
    return itemDetails[id].price
  }

  useEffect(() => {
    const loadItemsFromStorage = async () => {
      const storedItems = await loadItems()
      setItems(storedItems)
    }

    loadItemsFromStorage()
  }, [])

  const filteredItems = Object.entries(items).filter(
    ([id, quantity]) => quantity > 0
  )

  const updateQuantityInCart = (itemId, newQuantity) => {
    setItems((prevItems) => ({
      ...prevItems,
      [itemId]: newQuantity
    }))
    saveItems({ ...items, [itemId]: newQuantity })
  }

  const handleNav = () => {
    navigation.navigate('PayScreen')
  }

  return (
    <View style={container}>
      <StatusBar backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={body}>
          {filteredItems.map(([id, quantity]) => (
            <CartItem
              key={id}
              itemPath={getImagePathForItemId(id)}
              itemName={getItemNameForItemId(id)}
              itemPrice={getItemPriceForItemId(id)}
              id={id}
              updateQuantityInCart={updateQuantityInCart}
              quantity={quantity}
            />
          ))}
        </View>
      </ScrollView>
      <CartInfo cartItems={items} handleNav={handleNav} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CartScreen
